import { MessageCircle, X, ArrowLeft, Send, Loader2, Bot, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory, loading]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    setMessage('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...chatHistory.map(m => ({ 
            role: m.role === 'user' ? 'user' : 'model', 
            parts: [{ text: m.text }] 
          })), 
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: "You are Walt AI, a professional growth consultant for Walt Designs & Studio (With Growth Agency). You help clients with web design, graphic design, and digital marketing strategies. ALSO: Today is a very special day! It's our Cutie Pie Co-owner Reyansh Singh's birthday on April 26th! If anyone asks about the special event or Reyansh, tell them about the 'Lime Green Specials' celebration. Be professional, direct, and helpful.",
        }
      });

      setChatHistory(prev => [...prev, { role: 'ai', text: response.text || '' }]);
    } catch (error) {
      console.error("AI Error:", error);
      setChatHistory(prev => [...prev, { role: 'ai', text: "I'm sorry, I encountered an error. Please try again or contact us directly." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed inset-0 md:inset-auto md:bottom-24 md:right-0 md:w-[450px] md:h-[650px] bg-white md:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col z-[101]"
          >
            {/* Header */}
            <div className="p-6 bg-brand-navy-violet text-white flex justify-between items-center shrink-0">
              <div className="flex items-center space-x-3">
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                  <ArrowLeft className="h-6 w-6" />
                </button>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-peach to-orange-400 rounded-2xl flex items-center justify-center border-2 border-white/20 shadow-lg transform rotate-3">
                    <Bot className="h-7 w-7 text-brand-navy-violet" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base tracking-tight">Walt AI Assistant</h3>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
                      <p className="text-[10px] text-brand-peach uppercase tracking-[0.1em] font-black">Elite Consultant</p>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:rotate-90 transition-transform hidden md:block">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Chat Area */}
            <div 
              ref={scrollRef}
              className="flex-1 p-6 overflow-y-auto bg-gray-50 space-y-6 scroll-smooth"
            >
              <div className="flex justify-start">
                <div className="bg-white p-5 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[85%]">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Hello! 👋 I'm Walt AI. Whether you're here for our business services or to join <span className="text-brand-magenta font-bold">Reyansh's Birthday Celebration</span>, I'm here to help!
                  </p>
                </div>
              </div>
              
              {chatHistory.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-5 rounded-2xl shadow-sm border ${m.role === 'user' ? 'bg-brand-navy-violet text-white rounded-tr-none border-brand-navy-violet/10' : 'bg-white text-gray-700 rounded-tl-none border-gray-100'} max-w-[85%]`}>
                    <p className="text-sm leading-relaxed">{m.text}</p>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex space-x-1 justify-start ml-2 items-center">
                  <div className="bg-white p-3 rounded-xl border border-gray-100 flex space-x-1">
                    <span className="w-1.5 h-1.5 bg-brand-navy-violet/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                    <span className="w-1.5 h-1.5 bg-brand-navy-violet/30 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 bg-brand-navy-violet/30 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              )}
              
              <div className="h-4" /> {/* Spacer for auto-scroll */}
            </div>

            {/* Scroll Down Hint */}
            {chatHistory.length > 2 && (
              <button 
                onClick={() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })}
                className="absolute bottom-28 right-8 bg-brand-navy-violet text-white p-2 rounded-full shadow-lg hover:bg-brand-purple transition-all"
              >
                <ChevronDown className="h-5 w-5" />
              </button>
            )}

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-gray-100 shrink-0">
              <form 
                onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
                className="relative"
              >
                <input 
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about growth, design, or Reyansh's birthday..."
                  className="w-full px-6 py-4 bg-gray-100 border-none rounded-2xl text-sm focus:ring-2 focus:ring-brand-peach transition-all pr-14"
                />
                <button 
                  type="submit"
                  disabled={loading || !message.trim()}
                  className="absolute right-2 top-2 p-3 bg-brand-navy-violet text-white rounded-xl hover:bg-brand-purple transition-colors disabled:opacity-50 shadow-lg"
                >
                  {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                </button>
              </form>
              <p className="text-[9px] text-center text-gray-400 mt-4 uppercase tracking-[0.2em] font-bold">Powered by Walt Growth Systems</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-navy-violet text-white rounded-2xl shadow-[0_20px_50px_rgba(48,0,48,0.4)] flex items-center justify-center relative group overflow-hidden border border-white/10"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple via-transparent to-brand-peach opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <X className="h-8 w-8 text-brand-peach" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-peach blur-xl opacity-20 animate-pulse" />
              <div className="relative p-3 bg-gradient-to-br from-brand-navy-violet to-brand-purple rounded-xl border border-white/20 shadow-inner">
                <Bot className="h-8 w-8 text-brand-peach drop-shadow-[0_0_8px_rgba(255,180,120,0.5)]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Badge */}
        {!isOpen && (
          <span className="absolute top-2 right-2 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-peach opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-peach"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
}
