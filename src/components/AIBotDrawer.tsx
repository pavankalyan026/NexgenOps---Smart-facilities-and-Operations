import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, RotateCcw, Bot, User, CheckCircle, HelpCircle } from 'lucide-react';
import { ChatMessage } from '../types';
import { queryAICopilot } from '../services/aiCopilotService';
import { AI_QUICK_PROMPTS } from '../data/mockData';

interface AIBotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const AIBotDrawer: React.FC<AIBotDrawerProps> = ({ isOpen, onClose, onOpen }) => {
  const initialMessages: ChatMessage[] = [
    {
      id: 'welcome-1',
      sender: 'ai',
      text: "Hello. I'm NexgenOps AI. Ask me about your operations.",
      timestamp: 'Just now',
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when drawer opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Escape key closes drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    try {
      const response = await queryAICopilot(text);
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: "I encountered an error retrieving data. Please try again or ask about specific complaints, snags, or inventory.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleResetChat = () => {
    setMessages(initialMessages);
  };

  return (
    <>
      {/* Floating Action Trigger Button (Bottom Right) */}
      {!isOpen && (
        <button
          id="floating-ai-trigger-btn"
          onClick={onOpen}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900 dark:bg-slate-900 border border-cyan-500/50 hover:border-cyan-400 text-white shadow-2xl shadow-cyan-950/60 transition-all hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
          aria-label="Open NexgenOps AI Assistant"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-900 animate-pulse" />
          </div>
          <div className="text-left hidden sm:block pr-1">
            <div className="text-xs font-bold leading-tight text-white flex items-center gap-1.5">
              <span>NexgenOps AI</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-500/30 text-cyan-200">✦</span>
            </div>
            <div className="text-[10px] text-cyan-300/80 leading-tight">Operations Copilot</div>
          </div>
        </button>
      )}

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/50 dark:bg-slate-950/70 backdrop-blur-xs transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Drawer Panel */}
      <div
        id="ai-bot-drawer-panel"
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[410px] md:w-[430px] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-750 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="NexgenOps AI Assistant"
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 dark:text-white text-sm">NexgenOps AI</span>
                <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30">
                  Demo AI
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Operational Intelligence Copilot</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              id="reset-chat-btn"
              onClick={handleResetChat}
              title="Reset / New Chat"
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Reset chat conversation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              id="close-ai-drawer-btn"
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close AI chat drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Demo AI Disclaimer Banner */}
        <div className="px-4 py-2 bg-cyan-50 dark:bg-blue-950/40 border-b border-cyan-100 dark:border-blue-900/30 text-[11px] text-cyan-900 dark:text-cyan-200/90 flex items-center gap-2">
          <HelpCircle className="w-3.5 h-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
          <span>Demo AI — Connect your AI backend to enable live operational intelligence.</span>
        </div>

        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm bg-slate-50/50 dark:bg-slate-950/30">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${
                msg.sender === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold ${
                  msg.sender === 'user'
                    ? 'bg-cyan-600 dark:bg-blue-600 text-white'
                    : 'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-300" />}
              </div>

              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed text-xs sm:text-sm shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-cyan-600 dark:bg-blue-600 text-white rounded-tr-xs'
                    : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 rounded-tl-xs whitespace-pre-line'
                }`}
              >
                {msg.text}
                <div
                  className={`mt-1.5 text-[10px] ${
                    msg.sender === 'user' ? 'text-cyan-100 dark:text-blue-200 text-right' : 'text-slate-400'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full flex items-center justify-center bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-300 animate-spin" />
              </div>
              <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl rounded-tl-xs px-4 py-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompt Pills */}
        <div className="px-4 py-2.5 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/60 shrink-0">
          <div className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 mb-1.5 tracking-wider">
            Quick Prompts
          </div>
          <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
            {AI_QUICK_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="text-[11px] px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-300 border border-slate-200 dark:border-slate-700/80 transition-colors text-left cursor-pointer shadow-xs"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input Form */}
        <div className="p-3 sm:p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              id="ai-bot-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about complaints, snags, inventory..."
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              id="ai-bot-send-btn"
              className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer shadow-xs"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="mt-2 text-[10px] text-center text-slate-500 dark:text-slate-400">
            AI-generated recommendations based on sample operational data.
          </div>
        </div>
      </div>
    </>
  );
};
