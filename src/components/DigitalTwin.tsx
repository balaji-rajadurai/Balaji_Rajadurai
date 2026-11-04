
import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  RotateCcw,
  Copy,
  Check,
  Bot
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface DigitalTwinProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
}

export const DigitalTwin: React.FC<DigitalTwinProps> = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const chatBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll only the chat message container.
  // Never scroll the entire page.
  useEffect(() => {
    const container = chatBodyRef.current;
    if (!container || messages.length === 0) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth'
    });
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend ?? inputQuery).trim();

    if (!query || isTyping) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      sender: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInputQuery('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: updatedMessages.map(({ sender, content }) => ({
            role: sender === 'user' ? 'user' : 'assistant',
            content
          }))
        })
      });

      if (!response.ok) {
        throw new Error('Unable to generate AI response.');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        sender: 'assistant',
        content: data.reply,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      setMessages(prev => [...prev, assistantMessage]);

    } catch (error) {
      console.error(error);

      setMessages(prev => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: 'assistant',
          content: 'Sorry, I could not process your request. Please try again.',
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })
        }
      ]);
    } finally {
      setIsTyping(false);
      inputRef.current?.focus();
    }
  };

  const handleReset = () => {
    setMessages([]);
    setInputQuery('');
    inputRef.current?.focus();
  };

  const handleCopy = async (id: string, content: string) => {
    await navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="py-8">
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          <Bot className="w-4 h-4" />
          <span>AI-Powered Digital Twin</span>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-lg overflow-hidden flex flex-col h-[680px] max-h-[82vh]">

        {/* Header */}
        <div className="px-5 py-3.5 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
              Balaji Rajadurai · Digital Twin
            </span>
          </div>

          <button
            onClick={handleReset}
            className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            title="Clear conversation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Messages */}
        <div
          ref={chatBodyRef}
          className="flex-1 overflow-y-auto p-5 space-y-5"
        >
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center mb-4">
                <Bot className="w-7 h-7 text-emerald-600" />
              </div>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                Ask me anything
              </h3>

              <p className="text-sm text-slate-500 mt-2 max-w-sm">
                Explore my experience, projects, technical skills,
                AI applications, and professional background.
              </p>
            </div>
          )}

          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div className="text-[11px] text-slate-400 mb-1 px-1">
                {msg.sender === 'user' ? 'You' : 'Balaji (AI Assistant)'}
                {' · '}
                {msg.timestamp}
              </div>

              <div
                className={`max-w-[88%] sm:max-w-[78%] rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 rounded-tr-sm'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-tl-sm'
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.content}</p>

                {msg.sender === 'assistant' && (
                  <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                    <button
                      onClick={() => handleCopy(msg.id, msg.content)}
                      className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check className="w-3 h-3" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          Copy answer
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Balaji's AI assistant is thinking...
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputQuery}
              onChange={e => setInputQuery(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isTyping}
              className="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />

            <button
              type="submit"
              onClick={() => console.log("Ask button clicked")}
              // disabled={!inputQuery.trim() || isTyping}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white rounded-lg text-sm font-semibold flex items-center gap-2"
            >
              Ask
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
