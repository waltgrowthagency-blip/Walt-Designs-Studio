import { Rocket, BarChart3, Globe, Zap, CheckCircle, TrendingUp, Search, Share2, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'motion/react';

export default function Growth() {
  return (
    <PageWrapper>
      {/* Dark Wine World Hero */}
      <section className="bg-[#2D060F] py-32 relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Ambient Effects */}
        <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-magenta/30 rounded-full blur-[150px] -mr-96 -mt-96" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-peach/10 rounded-full blur-[120px] -ml-48 -mb-48" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-4"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-brand-peach/30 shadow-2xl p-1 bg-white">
                  <img 
                    src="https://i.ibb.co/67hZnKhd/Whats-App-Image-2026-04-26-at-10-29-37.jpg" 
                    alt="Walt Growth Agency Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <span className="inline-block px-3 py-1 bg-brand-peach/20 border border-brand-peach/30 rounded-full text-brand-peach text-[10px] font-bold uppercase tracking-widest">
                    The Elite Division
                  </span>
                  <h2 className="text-white font-bold text-lg tracking-tight">Walt Growth Agency</h2>
                </div>
              </motion.div>

              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight"
                >
                  Welcome to <br />
                  <span className="text-brand-peach">Walt Growth Agency</span>
                  <span className="text-2xl lg:text-3xl block mt-4 font-medium text-white/60">
                    (a part of Walt Designs Group)
                  </span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl lg:text-2xl text-white/80 max-w-xl leading-relaxed font-medium"
                >
                  Connect with <span className="text-brand-peach font-bold">top brands</span>, broaden your audience, and turn your <span className="text-brand-magenta font-bold">influence into earnings</span>. Join a strong platform made for creators who think big, grow quickly, and push boundaries.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-6 pt-4"
              >
                <a href="/contact.html" className="group px-10 py-5 bg-brand-peach text-[#2D060F] font-black rounded-2xl transition-all shadow-[0_20px_40px_rgba(255,180,120,0.3)] hover:shadow-[0_20px_60px_rgba(255,180,120,0.5)] hover:scale-105 flex items-center space-x-3 text-lg uppercase tracking-tight">
                  <span>I am Brand</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/contact.html" className="group px-10 py-5 bg-white/5 border-2 border-white/20 text-white font-black rounded-2xl transition-all hover:bg-white/10 hover:scale-105 flex items-center space-x-3 text-lg uppercase tracking-tight">
                  <span>I am an Influencer</span>
                  <Rocket className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-10"
              >
                <a 
                  href="/growth-services.html" 
                  className="inline-flex items-center space-x-2 text-brand-peach font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-8"
                >
                  <TrendingUp className="h-4 w-4" />
                  <span>Explore Our Premium Services</span>
                </a>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-brand-magenta/40 blur-[100px] animate-pulse rounded-full" />
              <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-[4rem] p-16 border border-white/20 relative z-10 shadow-3xl">
                <div className="space-y-10">
                   <div className="text-brand-peach/80 font-bold uppercase tracking-[0.2em] text-sm">Performance Index</div>
                   <div className="text-7xl lg:text-9xl font-bold text-white tracking-tighter">+350%</div>
                   <p className="text-2xl font-medium text-white/70 leading-relaxed">
                     Average growth seen by our full-agency partners in the first 12 months.
                   </p>
                   <div className="pt-10 grid grid-cols-2 gap-8 border-t border-white/10">
                      <div>
                        <div className="text-3xl font-bold text-white">1,200+</div>
                        <div className="text-[10px] text-brand-peach uppercase font-black tracking-widest">Creators</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">45+</div>
                        <div className="text-[10px] text-brand-peach uppercase font-black tracking-widest">Global Brands</div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Insights Wrapper to maintain "Separate World" feel */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-navy-violet tracking-tight">The Growth Ecosystem</h2>
            <p className="text-gray-500 font-medium text-lg italic">"Scaling isn't just about more; it's about better."</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Global Reach", text: "Targeted expansion into international markets with localized precision." },
              { icon: Zap, title: "Velocity", text: "Rapid campaign deployment that keeps you ahead of market trends." },
              { icon: CheckCircle, title: "Quality", text: "Hand-picked partnerships that ensure brand alignment and integrity." }
            ].map((item, idx) => (
              <div key={idx} className="p-12 bg-white rounded-3xl border-2 border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-brand-navy-violet/5 rounded-2xl flex items-center justify-center text-brand-navy-violet mb-6">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy-violet mb-4">{item.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
