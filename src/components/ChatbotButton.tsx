import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="p-6 bg-brand-navy-violet text-white flex justify-between items-center">
              <div>
                <h3 className="font-bold">Walt AI Assistant</h3>
                <p className="text-[10px] text-white/70 uppercase tracking-widest">Always Online</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-8 h-64 flex flex-col items-center justify-center text-center">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-peach/20 rounded-2xl flex items-center justify-center text-brand-navy-violet mx-auto">
                   <MessageCircle className="h-6 w-6" />
                </div>
                <div className="flex space-x-1 justify-center py-2">
                  <span className="w-2 h-2 bg-brand-navy-violet rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                  <span className="w-2 h-2 bg-brand-navy-violet rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-brand-navy-violet rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
                <p className="text-gray-600 text-sm">Hello! How can we help scale your business today?</p>
                <button className="w-full py-3 bg-brand-navy-violet text-white rounded-xl text-xs font-bold uppercase tracking-widest">
                  Start Chat
                </button>
              </div>
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
