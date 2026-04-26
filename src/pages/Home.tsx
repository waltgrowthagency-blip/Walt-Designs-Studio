import { ArrowRight, Star, CheckCircle2, Layout, Zap, TrendingUp, Globe } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import BirthdayMarquee from '../components/BirthdayMarquee';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect } from 'react';

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return () => controls.stop();
  }, [count, value]);

  return <motion.span>{rounded}</motion.span>;
}

export default function Home() {
  return (
    <PageWrapper>
      <BirthdayMarquee />
      {/* Hero Section - Magenta Background */}
      <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-28 overflow-hidden bg-brand-magenta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-center lg:text-left mt-[-20px]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div 
                animate={{ 
                  y: [0, -5, 0],
                  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="inline-flex items-center space-x-3 px-4 py-2 bg-brand-navy-violet text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span>Professional Creative Studio since 2026</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight"
              >
                We Design, Build & <span className="text-brand-peach italic">Grow</span> Your Brand
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg lg:text-xl text-white/80 font-medium max-w-2xl mx-auto lg:mx-0"
              >
                Premium digital solutions tailored for your business. From stunning web design to strategic marketing, we help you dominate your market.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              >
                <a href="/contact.html" className="px-10 py-5 bg-brand-navy-violet text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center group">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/special-guests.html" className="px-10 py-5 bg-yellow-400 text-brand-navy-violet border-2 border-brand-navy-violet/10 rounded-2xl font-bold text-lg hover:bg-brand-navy-violet hover:text-white transition-all flex items-center justify-center shadow-xl animate-bounce-slow">
                  Lime Green Specials💚
                </a>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotateY: 10,
                y: [0, -20, 0]
              }}
              whileHover={{ 
                rotateY: 20, 
                rotateX: -15, 
                scale: 1.08,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative hidden lg:block cursor-pointer perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute -inset-4 bg-brand-peach/20 blur-3xl rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000" 
                alt="Creative Design Showcase" 
                className="rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative z-10 border-8 border-white/10"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-peach rounded-2xl rotate-12 -z-10 shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Page Area - Purple Background */}
      <div className="bg-brand-purple">
        {/* Stats Section - STRICT 2x2 Mobile / 4 Desktop */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {[
                { icon: Layout, label: 'Projects Completed', value: 12, suffix: '+' },
                { icon: Star, label: 'Happy Clients', value: 150, suffix: '+' },
                { icon: Globe, label: 'Available over world', value: 100, suffix: '%', isSpecial: 'Global' },
                { icon: Zap, label: 'Fast Delivery & On-Time', value: 100, suffix: '%' },
              ].map((stat, idx) => (
                <div key={idx} className="p-8 md:p-12 bg-white/10 backdrop-blur-md rounded-[2rem] border border-white/20 flex flex-col items-center justify-center text-center space-y-4 hover:bg-white group transition-all duration-300">
                  <div className="p-4 bg-white/20 rounded-2xl group-hover:bg-brand-purple/10 group-hover:text-brand-purple text-white transition-colors">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-3xl md:text-5xl font-bold text-white group-hover:text-brand-purple mb-1">
                      {stat.isSpecial === 'Global' ? 'Global' : <><Counter value={stat.value} />{stat.suffix}</>}
                    </div>
                    <div className="text-[10px] md:text-xs font-bold text-white/70 group-hover:text-brand-purple/60 uppercase tracking-widest leading-tight">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Service Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Premium Solutions For Modern Brands</h2>
            <p className="text-white/80 text-lg">We provide end-to-end digital services to help your business reach new heights in the digital landscape.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Web & Graphic Designing',
                desc: 'Stunning visual identities and high-performing websites built for conversions.',
                icon: Layout,
              },
              {
                title: 'Digital Marketing',
                desc: 'Strategic campaigns that drive traffic, leads, and sales for your business.',
                icon: TrendingUp,
                isTrending: true,
              },
              {
                title: 'Business Growth',
                desc: 'Comprehensive structural strategies to scale your business exponentially.',
                icon: TrendingUp,
              }
            ].map((service, idx) => (
              <div key={idx} className="group p-8 bg-white rounded-3xl border-4 border-brand-navy-violet/20 hover:border-brand-navy-violet hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                {service.isTrending && (
                  <div className="absolute top-4 right-4 bg-brand-navy-violet text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">Trending 🔥</div>
                )}
                <div className="w-14 h-14 bg-brand-peach/20 text-brand-navy-violet rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-navy-violet group-hover:text-white transition-colors">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy-violet mb-4">{service.title}</h3>
                <p className="text-brand-navy-violet/70 mb-6 leading-relaxed">{service.desc}</p>
                <a href="/services.html" className="text-brand-navy-violet font-bold flex items-center hover:opacity-70 text-sm italic">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

      {/* Testimonials */}
      <section className="py-16 bg-brand-pink-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex -space-x-2">
                {[
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/85.jpg"
                ].map((img, i) => (
                  <img key={i} src={img} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="Indian Client" />
                ))}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Our Clients Say It Best</h2>
              <p className="text-gray-600 leading-relaxed font-medium">Join the growing list of successful businesses powered by Walt Designs & Studio.</p>
              <div className="flex items-center space-x-2">
                <div className="flex text-orange-400">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <span className="text-gray-900 font-bold">4.3 / 5.0 Rating</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:gap-8">
              {[
                { name: 'RANJAN KUMAR', role: 'MITHILA CATERING', text: 'Amazing service and growth strategies. They handled our digital presence with extreme care and professionalism.' },
                { name: 'VIKASH KUMAR', role: 'KAUSHALAYAN CONSULTING', text: 'Professionalism at its best. The team is dedicated and their results speak louder than words.' },
                { name: 'RAHUL KAUSHIK', role: 'KAUSHIK CATERERS', text: 'Exceeded our expectations in every way. From branding to digital reach, everything was top-notch.' },
                { name: 'RAHUL DOGRA', role: 'LALAJI CATERERS', text: 'The visual identity they created for us is simply stunning. We get compliments from every client.' }
              ].map((t, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl border-4 border-brand-magenta/20 relative group hover:border-brand-magenta hover:shadow-2xl transition-all h-full flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-brand-magenta/5 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <p className="text-gray-700 italic text-[11px] lg:text-xs mb-4 leading-relaxed line-clamp-4 relative z-10">"{t.text}"</p>
                  <div className="relative z-10">
                    <div className="font-bold text-gray-900 text-xs">{t.name}</div>
                    <div className="text-[8px] text-gray-500 italic uppercase tracking-widest mt-0.5">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
