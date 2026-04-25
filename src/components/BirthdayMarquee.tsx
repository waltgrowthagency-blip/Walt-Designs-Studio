import { motion } from 'motion/react';

export default function BirthdayMarquee() {
  return (
    <div className="bg-yellow-400 overflow-hidden py-3 border-y border-red-600/20 relative z-[40]">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-red-600 font-black uppercase tracking-widest text-xs mx-10 flex items-center">
            <span className="text-red-500 mr-4">*</span>
            We wish you a Happy birthday Reyansh Singh 26 April 2026 💐🎈💚
            <span className="text-red-500 ml-4">!</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
