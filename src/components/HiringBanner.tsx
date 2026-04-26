import { motion } from 'motion/react';
import { Megaphone } from 'lucide-react';

export default function HiringBanner() {
  return (
    <div className="bg-brand-magenta overflow-hidden py-3 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none" />
      <motion.div
        animate={{ 
          opacity: [1, 0.5, 1],
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <a 
          href="https://forms.gle/Z4L5n3ZKN9vNseem6"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-3 text-white text-center group"
        >
          <Megaphone className="h-5 w-5 animate-bounce shrink-0 shadow-sm" />
          <p className="text-xs md:text-sm font-bold tracking-tight">
            <span className="bg-white text-brand-magenta px-2 py-0.5 rounded mr-2 text-[10px] uppercase">Advertisement</span>
            We are hiring Employees who are interested & have experience in Sales as a Freelancing...we will pay in range from Rs.800 - Rs.1200/clients as depend on the sector...
            <span className="underline decoration-brand-peach underline-offset-4 group-hover:text-brand-peach transition-colors">if you are interested then click here</span>
          </p>
        </a>
      </motion.div>
    </div>
  );
}
