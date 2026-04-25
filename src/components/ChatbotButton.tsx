import { MessageCircle, X, ArrowLeft, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [loading, setLoading] = useState(false);

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
        systemInstruction: "You are Walt AI, a professional growth consultant for Walt Designs & Studio (With Growth Agency). You help clients with web design, graphic design, and digital marketing strategies. Be professional, direct, and helpful.",
        contents: [...chatHistory.map(m => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.text }] })), { role: 'user', parts: [{ text: userMessage }] }],
      });

      setChatHistory(prev => [...prev, { role: 'ai', text: response.text }]);
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
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-85 max-w-[90vw] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[500px]"
          >
            <div className="p-6 bg-brand-navy-violet text-white flex justify-between items-center shrink-0">
              <div className="flex items-center space-x-3">
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <div>
                  <h3 className="font-bold text-sm">Walt AI Support</h3>
                  <p className="text-[10px] text-brand-peach uppercase tracking-widest font-bold">Online & Ready</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:rotate-90 transition-transform">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 p-6 overflow-y-auto bg-gray-50 space-y-4">
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[85%]">
                  <p className="text-sm text-gray-700">Hello! 👋 I'm your Walt AI assistant. How can we help scale your business today?</p>
                </div>
              </div>
              
              {chatHistory.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-4 rounded-2xl shadow-sm border ${m.role === 'user' ? 'bg-brand-navy-violet text-white rounded-tr-none border-brand-navy-violet/10' : 'bg-white text-gray-700 rounded-tl-none border-gray-100'} max-w-[85%]`}>
                    <p className="text-sm">{m.text}</p>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex space-x-1 justify-start ml-2">
                  <span className="w-1.5 h-1.5 bg-brand-navy-violet/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                  <span className="w-1.5 h-1.5 bg-brand-navy-violet/30 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-1.5 h-1.5 bg-brand-navy-violet/30 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              )}
            </div>

            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
              <form 
                onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
                className="relative"
              >
                <input 
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full px-4 py-3 bg-gray-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-brand-peach transition-all pr-12"
                />
                <button 
                  type="submit"
                  disabled={loading || !message.trim()}
                  className="absolute right-2 top-1.5 p-2 bg-brand-navy-violet text-white rounded-lg hover:bg-brand-purple transition-colors disabled:opacity-50"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </button>
              </form>
              <p className="text-[8px] text-center text-gray-400 mt-2 uppercase tracking-widest">Powered by Walt Growth AI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-navy-violet text-white rounded-full shadow-2xl flex items-center justify-center relative group"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-peach opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-peach"></span>
        </span>
        {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
      </motion.button>
    </div>
  );
}
