import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Maximize2, 
  RotateCcw, 
  ShieldCheck,
  Bot
} from 'lucide-react';
import { BALAJI_DATA } from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const QUICK_PROMPTS = [
  "How do you combine structural engineering with AI?",
  "Tell me about your M.Tech from NIT Calicut & 10+ yrs exp",
  "How do you automate ETABS and Revit modeling?",
  "What optimization algorithms do you use for steel trusses?",
  "How can we collaborate or hire you?"
];

interface FloatingChatbotProps {
  onOpenFullPageTwin: () => void;
}

export const FloatingChatbot: React.FC<FloatingChatbotProps> = ({ onOpenFullPageTwin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      sender: 'assistant',
      content: "Hello! I am Balaji Rajadurai's Digital Twin. Ask me about my hobbies, accomplishments, educational details or work experience.",
      timestamp: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateAnswer = (userQuery: string): string => {
    const qLower = userQuery.toLowerCase().trim();

    // Match keywords from BALAJI_DATA knowledge base
    const match = BALAJI_DATA.digitalTwinKnowledge.find(item => 
      item.keywords.some(kw => qLower.includes(kw))
    );

    if (match) {
      return match.answer;
    }

    if (qLower.includes('contact') || qLower.includes('email') || qLower.includes('hire') || qLower.includes('reach')) {
      return `You can reach Balaji Rajadurai directly at ${BALAJI_DATA.profile.email}. He is open to structural automation consulting, custom ETABS/Revit API development, and engineering optimization contracts globally!`;
    }

    if (qLower.includes('project') || qLower.includes('work') || qLower.includes('system')) {
      return `Balaji has developed 4 flagship engineering systems: 1) AI-Powered Structural Code Compliance Agent (IS 456, IS 800, ACI 318), 2) Generative Truss Multi-Objective Optimization (genetic algorithms for steel weight reduction), 3) Intelligent FEM Modeling Automation (ETABS & SAP2000 OAPI), and 4) Bidirectional BIM-to-FEM Synchronizer (Grasshopper/Revit/Tekla). Check the Projects page to explore live interactive simulators!`;
    }

    // Default intelligent response
    return `Balaji Rajadurai is a postgraduate Structural Engineer (M.Tech NIT Calicut) with over 10 years of experience bridging conventional structural mechanics with intelligent computational systems. He specializes in ETABS/SAP2000 automation, generative structural optimization using genetic algorithms, and deterministic AI agents for design code compliance. Feel free to ask about any specific project or explore his credentials!`;
  };

  const handleSend = (text?: string) => {
    const query = (text || input).trim();
    if (!query || isTyping) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateAnswer(query);
      const assistantMsg: Message = {
        id: `a-${Date.now()}`,
        sender: 'assistant',
        content: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 550);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'reset',
        sender: 'assistant',
        content: "Conversation refreshed. How can I assist you with Balaji's structural engineering or AI systems work today?",
        timestamp: 'Just now'
      }
    ]);
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
                onClick={() => {
                  setIsOpen(false);
                  onOpenFullPageTwin();
                }}
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Expand to Full Page Digital Twin"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              
              <button
                onClick={handleReset}
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Reset conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsOpen(false)}
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
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-white dark:bg-slate-900 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl p-3 leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 rounded-tr-none'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200/60 dark:border-slate-700/60'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{m.content}</p>
                </div>
                <span className="text-[10px] text-slate-400 mt-0.5 px-1">
                  {m.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/40 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Balaji is synthesizing engineering response...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
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

            <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                
              </span>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenFullPageTwin();
                }}
                className="text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                Open Full Screen &rarr;
              </button>
            </div>
          </div>

        </div>
      )}

      {/* Persistent Floating Chat Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
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
