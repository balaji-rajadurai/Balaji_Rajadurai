
import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import { BALAJI_DATA } from "./src/data/portfolioData";

dotenv.config();

const app = express();
app.use(express.json({ limit: "1mb" }));

const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.OPENROUTER_API_KEY
});

const SYSTEM_INSTRUCTIONS = `
You are the AI digital twin of Balaji Rajadurai.

Use the following portfolio information as your primary source of truth.

PORTFOLIO DATA:
${JSON.stringify(BALAJI_DATA, null, 2)}

INSTRUCTIONS:
- Answer questions based on the portfolio data.
- Speak in the first person as Balaji when discussing his experience, projects, and skills.
- Do not invent qualifications, achievements, project details, or experience.
- If information is unavailable, clearly state that you don't have that information.
- Keep responses professional, concise, and conversational.
- Position Balaji's career direction towards AI Engineering.
`;

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: "A conversation history is required."
      });
    }

    // Validate and limit the conversation history.
    const validMessages = messages
      .filter(
        (m: any) =>
          ["user", "assistant"].includes(m.role) &&
          typeof m.content === "string"
      )
      .slice(-20);

    const response = await openai.responses.create({
      model: 'nvidia/nemotron-3.5-lightning:free',
      instructions: SYSTEM_INSTRUCTIONS,
      input: validMessages.map((m: any) => ({
        role: m.role,
        content: m.content
      })),
    //   max_output_tokens: 1000
    });

    res.json({
      reply: response.output_text
    });

  } catch (error) {
    console.error("API key error:", error);

    res.status(500).json({
      error: "Unable to generate response."
    });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`AI backend running on port ${PORT}`);
});
