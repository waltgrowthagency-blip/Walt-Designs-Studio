import { Rocket, BarChart3, Globe, Zap, CheckCircle, TrendingUp, Search, Share2 } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'motion/react';

export default function Growth() {
  return (
    <PageWrapper>
      {/* Premium Hero */}
      <section className="bg-brand-navy-violet py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-purple rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-peach rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-brand-peach text-[10px] font-bold uppercase tracking-widest"
            >
              <Rocket className="h-3 w-3" />
              <span>Walt Growth Agency</span>
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-8xl font-black text-white leading-tight uppercase tracking-tighter"
            >
              Scale Your Business <span className="text-brand-peach">Beyond Limits</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
            >
              We don't just market products; we build ecosystems of growth. Our premium agency model focuses on aggressive scaling, high-ROI marketing, and global brand dominance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-brand-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl lg:text-6xl font-bold text-white uppercase tracking-tighter">What We Do</h2>
            <p className="text-white/80 font-medium">The intersection of data, creativity, and explosive growth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Market Penetration',
                icon: Globe,
                desc: 'Identifying and securing market share through aggressive digital dominance and competitor analysis.'
              },
              {
                title: 'Growth Marketing',
                icon: TrendingUp,
                desc: 'High-speed experimentation across marketing channels to find the most efficient path to scale.'
              },
              {
                title: 'Conversion Optimization',
                icon: Zap,
                desc: 'Turning every visitor into a loyal customer with psychology-driven UI/UX and persuasive copy.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-10 bg-white rounded-[3rem] border-4 border-brand-navy-violet/10 hover:border-brand-navy-violet transition-all group">
                <div className="w-16 h-16 bg-brand-peach/10 rounded-2xl flex items-center justify-center text-brand-navy-violet mb-8 group-hover:bg-brand-navy-violet group-hover:text-white transition-all">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy-violet mb-4">{item.title}</h3>
                <p className="text-brand-navy-violet/70 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-10">
              <h2 className="text-4xl lg:text-6xl font-bold text-brand-navy-violet uppercase tracking-tighter">Our Strategic Approach</h2>
              <div className="space-y-8">
                {[
                  { title: 'Data Analysis', icon: BarChart3, text: 'We start with deep-dives into your current metrics and market position.' },
                  { title: 'Strategic Roadmap', icon: Search, text: 'A custom-built calendar of growth milestones and performance markers.' },
                  { title: 'Omnichannel Execution', icon: Share2, text: 'Simultaneous deployment across social, search, and content layers.' },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-brand-peach/20 rounded-xl shadow-sm flex items-center justify-center text-brand-navy-violet">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-navy-violet mb-2">{step.title}</h4>
                      <p className="text-brand-navy-violet/60 font-medium">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="bg-brand-navy-violet rounded-[50px] p-8 lg:p-16 text-white space-y-8 shadow-2xl">
                 <div className="text-brand-peach font-bold uppercase tracking-widest text-sm">Real-Time Impact</div>
                 <div className="text-5xl lg:text-9xl font-black tracking-tighter">+350%</div>
                 <div className="text-2xl font-medium opacity-80 leading-snug">Average growth seen by our full-agency clients in the first 12 months.</div>
                 <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                    <div className="flex -space-x-2">
                       {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-4 border-brand-navy-violet bg-white/20" />)}
                    </div>
                    <span className="text-sm font-medium">Trusted by leading brands</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-brand-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy-violet rounded-[4rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl">
             <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8">
                   <h2 className="text-4xl lg:text-7xl font-bold text-white leading-tight uppercase tracking-tighter">Ready for Hyper-Growth?</h2>
                   <p className="text-xl text-white/70 font-medium">Accepting only 3 new core agency clients this quarter. Apply for a growth audit today.</p>
                   <a href="/contact" className="inline-block px-12 py-6 bg-brand-peach text-brand-navy-violet font-bold rounded-2xl transition-all shadow-xl text-lg uppercase tracking-widest hover:bg-white">
                     Apply For Audit
                   </a>
                </div>
                <div className="grid grid-cols-2 gap-6">
                   {[
                     { label: 'Market Reach', val: '10M+' },
                     { label: 'Ad ROI', val: '4.8x' },
                     { label: 'Leads Generated', val: '100k+' },
                     { label: 'Client Retention', val: '98%' },
                   ].map((stat, idx) => (
                     <div key={idx} className="p-8 bg-white/10 border border-white/10 rounded-3xl backdrop-blur-sm">
                        <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                        <div className="text-[10px] font-bold text-brand-peach uppercase tracking-widest">{stat.label}</div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
