import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Cake, Gift, Heart, Star, Sparkles, Send, PartyPopper, Coffee, Pizza, Cookie } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import BirthdayMarquee from '../components/BirthdayMarquee';
import confetti from 'canvas-confetti';

export default function SpecialGuests() {
  const [isOpening, setIsOpening] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpening(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const triggerConfetti = () => {
    const scalar = 2;
    const triangle = confetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' });

    confetti({
      shapes: [triangle],
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#facc15', '#ef4444', '#32cd32', '#3b82f6', '#a855f7']
    });
  };

  const decorativeIcons = [Cake, Gift, Heart, Star, PartyPopper, Coffee, Pizza, Cookie];

  return (
    <PageWrapper>
      <BirthdayMarquee />
      <style>{`
        @keyframes yellowSlowPulse {
          0% { background-color: #facc15; }
          33% { background-color: #fbbf24; }
          66% { background-color: #f59e0b; }
          100% { background-color: #facc15; }
        }
        .animated-bg {
          animation: yellowSlowPulse 15s infinite ease-in-out;
          transition: background-color 3s ease-in-out;
        }
      `}</style>
      <div className="relative min-h-screen overflow-hidden animated-bg">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        
        {/* Floating Party Popper Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          onClick={triggerConfetti}
          className="fixed bottom-10 right-10 z-[100] w-20 h-20 bg-yellow-400 text-red-600 rounded-full shadow-[0_20px_50px_rgba(255,50,50,0.4)] flex items-center justify-center border-4 border-white animate-bounce-slow"
        >
          <PartyPopper className="h-10 w-10" />
        </motion.button>
        
        {/* Curtain Opening Animation */}
        <AnimatePresence>
          {isOpening && (
            <>
              <motion.div 
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{ duration: 2, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
                className="fixed inset-y-0 left-0 w-1/2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 z-[200] border-r-[12px] border-double border-white shadow-[20px_0_50px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center pt-20"
              >
                <div className="rotate-[-90deg] whitespace-nowrap">
                  <h1 className="text-6xl font-black text-brand-navy-violet drop-shadow-[0_5px_15px_rgba(255,255,255,0.5)] uppercase tracking-tighter">
                    WELCOME TO REYANSH'S PARTY
                  </h1>
                </div>
              </motion.div>
              <motion.div 
                initial={{ x: 0 }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
                className="fixed inset-y-0 right-0 w-1/2 bg-gradient-to-l from-yellow-400 via-yellow-500 to-yellow-600 z-[200] border-l-[12px] border-double border-white shadow-[-20px_0_50px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center pt-20"
              >
                <div className="rotate-[90deg] whitespace-nowrap">
                  <h1 className="text-6xl font-black text-brand-navy-violet drop-shadow-[0_5px_15px_rgba(255,255,255,0.5)] uppercase tracking-tighter">
                    LIME GREEN SPECIALS
                  </h1>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Floating Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => {
            const Icon = decorativeIcons[i % decorativeIcons.length];
            return (
              <motion.div
                key={i}
                initial={{ y: '110vh', x: `${Math.random() * 100}vw`, rotate: 0 }}
                animate={{ 
                  y: '-20vh', 
                  rotate: 360,
                  x: `${(Math.random() * 100) + (Math.sin(i) * 5)}vw`
                }}
                transition={{ 
                  duration: 5 + Math.random() * 10, 
                  repeat: Infinity, 
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
                className="absolute text-brand-peach/30"
              >
                <Icon size={32 + Math.random() * 24} />
              </motion.div>
            );
          })}
        </div>

        <section className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header / Intro */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 2.2, duration: 1, type: "spring" }}
              className="text-center mb-16 perspective-1000"
            >
              <motion.div 
                animate={{ 
                  backgroundColor: ['#ff0000', '#00ff00', '#0000ff', '#32cd32', '#ff0000'],
                  scale: [1, 1.05, 1],
                  rotateZ: [0, 1, -1, 0]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="inline-block px-10 py-6 rounded-[3rem] shadow-[0_20px_80px_rgba(255,255,255,0.4)] mb-20 border-8 border-white transform-gpu hover:rotate-1 transition-transform cursor-default relative z-10"
              >
                <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
                  💚 Lime Green Specials 💚
                </h1>
              </motion.div>

              <div className="relative inline-block mt-20 mb-12">
                {/* 3D Popping Elements */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-16 -left-16 z-40 bg-gradient-to-tr from-pink-500 to-yellow-400 p-4 rounded-full shadow-[0_10px_40px_rgba(255,100,255,0.6)] border-4 border-white text-2xl hidden md:block"
                >
                  🎉
                </motion.div>

                {/* Cartoon Guests - Shinchan & Doraemon */}
                <motion.div 
                  animate={{ 
                    y: [0, -30, 0], 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute -left-44 top-0 z-20 hidden lg:block"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-30 group-hover:opacity-60 transition-opacity" />
                    <img src="https://img.icons8.com/color/160/doraemon.png" alt="Doraemon" className="w-32 h-32 drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)] relative" />
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ 
                    y: [0, -25, 0], 
                    rotate: [0, -5, 5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  className="absolute -right-44 bottom-0 z-20 hidden lg:block"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-red-400 blur-2xl opacity-30 group-hover:opacity-60 transition-opacity" />
                    <img src="https://img.icons8.com/color/160/crayon-shin-chan.png" alt="Shinchan" className="w-32 h-32 drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)] relative" />
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute left-1/2 -translate-x-1/2 -top-24 z-30 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-white px-6 py-3 rounded-full font-black shadow-[0_15px_40px_rgba(0,0,0,0.2)] border-4 border-white text-lg uppercase tracking-tighter whitespace-nowrap"
                >
                  HAPPY BIRTHDAY!
                </motion.div>

                <div className="group relative">
                  <div className="absolute -inset-10 bg-gradient-to-tr from-brand-peach via-white to-brand-magenta rounded-[6rem] blur-3xl opacity-50 group-hover:opacity-80 transition-all duration-1000 animate-pulse" />
                  <div className="relative z-10 p-2 bg-white rounded-[6rem] shadow-2xl transform-gpu hover:scale-105 transition-transform duration-700">
                    <img 
                      src="https://i.ibb.co/G4rrD3Q4/IMG-20260419-WA0112.jpg" 
                      alt="Reyansh Singh" 
                      className="w-72 h-72 md:w-[28rem] md:h-[28rem] object-cover rounded-[5rem] shadow-inner"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-2">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                  Reyansh Singh
                </h2>
                <p className="text-brand-peach font-bold uppercase tracking-widest text-lg">
                  (Our Cutie Pie Co-owner)
                </p>
                <p className="text-white/80 font-medium italic">26 April, 2026</p>
              </div>
            </motion.div>

            {/* The Wish */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border-4 border-white/20 shadow-2xl mb-16 text-center"
            >
              <Sparkles className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
              <div className="prose prose-invert prose-lg mx-auto text-white font-medium leading-relaxed italic">
                <p>
                  Happy Birthday to our brightest star and cutest co-owner, Reyansh Singh! 🎂 Today is a day filled with pure magic and joy as we celebrate the incredible spark you bring into our lives. You are the heart and soul of our smiles, and your presence reflects a world of boundless wonder and happiness. 
                </p>
                <p>
                  As you turn another year older on this special 26th of April, we wish you a lifetime of laughter that echoes through every corner, adventures that make your heart race with excitement, and a jar full of the sweetest chocolates and treats! May your day be as colorful as a rainbow and as bright as the sun. You inspire us with your innocent charm and remind us every day that life is a beautiful gift to be cherished. 
                </p>
                <p>
                  Reyansh, may your journey ahead be paved with sparkling dreams, loyal friends, and enough cake to last forever! Stay curious, stay joyful, and keep being the amazing little leader you were born to be. The entire team at Walt Designs sends you mountains of love and the warmest birthday hugs ever! 🎉✨
                </p>
              </div>
            </motion.div>

            {/* The Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border-8 border-brand-peach/30"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black text-brand-navy-violet uppercase tracking-tighter mb-2">Wish Him a Happy Birthday!</h3>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Drop your blessings below</p>
              </div>

              <form action="https://formspree.io/f/xbdqbybq" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-brand-navy-violet uppercase tracking-widest mb-2 ml-4">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-gray-100 border-none rounded-2xl focus:ring-4 focus:ring-brand-peach transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-brand-navy-violet uppercase tracking-widest mb-2 ml-4">Your City</label>
                    <input 
                      type="text" 
                      name="city" 
                      required 
                      placeholder="City Name"
                      className="w-full px-6 py-4 bg-gray-100 border-none rounded-2xl focus:ring-4 focus:ring-brand-peach transition-all font-medium"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-brand-navy-violet uppercase tracking-widest mb-2 ml-4">Your Message (Blessings)</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={6}
                    maxLength={5000}
                    placeholder="Write your beautiful birthday wishes here..."
                    className="w-full px-6 py-4 bg-gray-100 border-none rounded-2xl focus:ring-4 focus:ring-brand-peach transition-all font-medium resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-brand-navy-violet text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-brand-magenta hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-3"
                >
                  <Send className="h-5 w-5" />
                  <span>Send My Birthday Wishes</span>
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
