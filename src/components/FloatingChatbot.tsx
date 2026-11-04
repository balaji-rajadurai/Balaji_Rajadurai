import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  X,
  Send,
  Sparkles,
  RotateCcw,
  Bot
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const QUICK_PROMPTS = [
  "Tell me about your AI engineering experience.",
  "What is the Structural Agentic Modeller (SAM)?",
  "Explain the AI-powered tender BOQ prediction system.",
  "How does your water distribution network optimization work?",
  "How can I contact you?"
];

interface FloatingChatbotProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FloatingChatbot: React.FC<FloatingChatbotProps> = ({
  isOpen,
  onOpenChange
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Scroll only the chat message panel, not the page behind the floating window.
  useEffect(() => {
    const container = chatBodyRef.current;
    if (isOpen && container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isOpen, isTyping]);

  const createMessageId = () =>
    `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

  const handleSend = async (text?: string) => {
    const query = (text ?? input).trim();
    if (!query || isTyping) return;

    const userMsg: Message = {
      id: createMessageId(),
      sender: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    // Include the new question in the conversation sent to the backend.
    const conversation = [...messages, userMsg];

    setMessages(conversation);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: conversation.map((message) => ({
            role: message.sender === 'assistant' ? 'assistant' : 'user',
            content: message.content
          }))
        })
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || `Chat request failed (${response.status})`);
      }

      if (typeof data.reply !== 'string' || !data.reply.trim()) {
        throw new Error('The AI service returned an empty response.');
      }

      const assistantMsg: Message = {
        id: createMessageId(),
        sender: 'assistant',
        content: data.reply,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      console.error('Floating chatbot error:', error);

      const errorMsg: Message = {
        id: createMessageId(),
        sender: 'assistant',
        content: error instanceof Error
          ? `I could not get a response right now. ${error.message}`
          : 'I could not connect to the AI service. Please try again.',
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleReset = () => {
    setMessages([]);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[400px] h-[540px] max-h-[80vh] rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden mb-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-xs">
                  BR
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900"></span>
              </div>
              <div>
                <div className="text-xs font-bold leading-tight flex items-center gap-1.5">
                  <span>Balaji&apos;s Digital Twin</span>
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="text-[10px] text-slate-300">
                  Active
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
<button
                onClick={handleReset}
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Reset conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onOpenChange(false)}
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-3 py-2 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1.5 whitespace-nowrap text-[11px]">
              {QUICK_PROMPTS.map((prompt, pIdx) => (
                <button
                  key={pIdx}
                  type="button"
                  onClick={() => handleSend(prompt)}
                  disabled={isTyping}
                  className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 text-slate-700 dark:text-slate-300 hover:border-emerald-500 hover:text-emerald-600 dark:hover:border-emerald-400 dark:hover:text-emerald-300 transition-colors shrink-0 disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Messages Body */}
          <div
            ref={chatBodyRef}
            className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-white dark:bg-slate-900 text-xs"
          >
            {messages.length === 0 && (
              <div className="h-full min-h-32 flex flex-col items-center justify-center text-center text-slate-500 dark:text-slate-400 px-5">
                <Bot className="w-7 h-7 mb-2 text-emerald-500" />
                <p className="font-semibold text-slate-700 dark:text-slate-200">
                  Ask Balaji's Digital Twin
                </p>
                <p className="mt-1 text-[11px]">
                  Ask about AI projects, experience, skills, or collaboration.
                </p>
              </div>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-xl p-3 leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 rounded-tr-none'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200/60 dark:border-slate-700/60'
                  }`}
                >
                  {m.sender === 'user' ? (
                    <p className="whitespace-pre-wrap">{m.content}</p>
                  ) : (
                    <div className="prose prose-sm dark:prose-invert max-w-none
                      prose-p:my-2
                      prose-a:text-blue-600 dark:prose-a:text-blue-400
                      prose-a:underline
                      prose-strong:font-semibold
                      prose-ul:my-2
                      prose-ol:my-2
                      prose-li:my-1
                      prose-headings:my-2
                    ">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {m.content}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-slate-400 mt-0.5 px-1">
                  {m.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/40 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Generating response...</span>
              </div>
            )}

          </div>

          {/* Input Footer */}
          <div className="p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about experience, skills, education..."
                disabled={isTyping}
                className="flex-1 px-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white rounded-lg transition-colors"
                title="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>
      )}

      {/* Persistent Floating Chat Trigger Button */}
      <button
        onClick={() => onOpenChange(!isOpen)}
        aria-label="Chat with Balaji's Digital Twin"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-700/50 dark:border-emerald-400/40"
      >
        <div className="relative">
          <Bot className="w-5 h-5 text-emerald-400 dark:text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900"></span>
        </div>
        <span className="text-xs font-bold tracking-tight pr-1">
          {isOpen ? 'Close Twin' : 'Chat with Balaji (Twin)'}
        </span>
      </button>

    </div>
  );
};
