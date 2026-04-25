import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Cake, Gift, Heart, Star, Sparkles, Send, PartyPopper, Coffee, Pizza, Cookie } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

export default function SpecialGuests() {
  const [showContent, setShowContent] = useState(false);
  const [isOpening, setIsOpening] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpening(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const decorativeIcons = [Cake, Gift, Heart, Star, PartyPopper, Coffee, Pizza, Cookie];

  return (
    <PageWrapper>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-brand-magenta via-brand-purple to-brand-navy-violet">
        
        {/* Curtain Opening Animation */}
        <AnimatePresence>
          {isOpening && (
            <>
              <motion.div 
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
                className="fixed inset-y-0 left-0 w-1/2 bg-red-800 z-[200] border-r-4 border-yellow-500 shadow-2xl flex items-center justify-end"
              >
                <div className="h-full w-4 bg-red-900 opacity-50 mr-4" />
              </motion.div>
              <motion.div 
                initial={{ x: 0 }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
                className="fixed inset-y-0 right-0 w-1/2 bg-red-800 z-[200] border-l-4 border-yellow-500 shadow-2xl flex items-center justify-start"
              >
                <div className="h-full w-4 bg-red-900 opacity-50 ml-4" />
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
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div 
                animate={{ 
                  backgroundColor: ['#d946ef', '#6b21a8', '#ffcc99', '#d946ef'],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-block px-8 py-4 rounded-full shadow-2xl mb-8 border-4 border-white"
              >
                <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                  🌟 Lime Special Guests 🌟
                </h1>
              </motion.div>
              
              <div className="relative inline-block">
                <motion.div 
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-12 -right-12 z-10 bg-yellow-400 text-brand-navy-violet p-4 rounded-full font-bold shadow-xl border-4 border-white"
                >
                  HAPPY BIRTHDAY!
                </motion.div>
                <img 
                  src="https://i.ibb.co/G4rrD3Q4/IMG-20260419-WA0112.jpg" 
                  alt="Reyansh Singh" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-[3rem] border-8 border-white shadow-[0_0_50px_rgba(255,255,255,0.4)] mx-auto relative z-0"
                />
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
