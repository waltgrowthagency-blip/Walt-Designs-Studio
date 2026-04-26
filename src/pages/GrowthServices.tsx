import { motion } from 'motion/react';
import PageWrapper from '../components/PageWrapper';
import { 
  Users, 
  Target, 
  BarChart3, 
  ArrowRight, 
  Megaphone, 
  Share2, 
  Star, 
  Heart, 
  Tv, 
  Search, 
  ShieldCheck, 
  Lightbulb, 
  LineChart, 
  Globe, 
  UserPlus 
} from 'lucide-react';

export default function GrowthServices() {
  const categories = [
    {
      title: 'Influencer Management',
      icon: Users,
      desc: 'Complete management of influencer relationships, from discovery to campaign execution and performance tracking.'
    },
    {
      title: 'Brand Campaigns',
      icon: Target,
      desc: 'Strategic brand campaigns that leverage influencer partnerships to increase visibility and drive conversions.'
    },
    {
      title: 'Analytics & Optimization',
      icon: BarChart3,
      desc: 'Comprehensive tracking, reporting, and optimization services to maximize campaign ROI and performance.'
    }
  ];

  const services = [
    {
      id: '01',
      title: 'Influencer Promotion & Marketing',
      icon: Megaphone,
      desc: 'We create strategic influencer campaigns, connecting brands with nano, micro, macro, and celebrity influencers. From influencer discovery and profile analysis to execution and reporting, we ensure maximum engagement and results.'
    },
    {
      id: '02',
      title: 'Social Media Management Services',
      icon: Share2,
      desc: 'Our team handles content planning, posting, community engagement, and overall social media growth to help brands maintain a strong and consistent presence across platforms.'
    },
    {
      id: '03',
      title: 'Celebrity Endorsement & Brand Collaboration',
      icon: Star,
      desc: 'We manage celebrity collaborations from identification and negotiation to execution, helping brands enhance credibility, visibility, and reach.'
    },
    {
      id: '04',
      title: 'Review & Ratings Services for eCommerce',
      icon: ShieldCheck,
      desc: 'We support eCommerce brands in building trust and credibility through genuine reviews and ratings, improving customer confidence and conversion rates.'
    },
    {
      id: '05',
      title: 'Model Promotion & Talent Marketing',
      icon: Heart,
      desc: 'We offer professional model promotion services for fashion, lifestyle, and commercial campaigns, including profile positioning, campaign alignment, and digital visibility.'
    },
    {
      id: '06',
      title: 'TV Ads Production & Promotion',
      icon: Tv,
      desc: 'From concept development and ad filming to media planning and promotion, we handle complete TV advertising solutions that maximize brand reach and recall.'
    },
    {
      id: '07',
      title: 'Influencer Discovery & Profile Analysis',
      icon: Search,
      desc: 'We carefully evaluate influencer profiles based on audience quality, engagement rates, and brand alignment, shortlisting the best creators for each campaign.'
    },
    {
      id: '08',
      title: 'Campaign Planning & Management',
      icon: Target,
      desc: 'Our team manages campaigns end-to-end, covering planning, timelines, deliverables, coordination, and quality control for seamless execution.'
    },
    {
      id: '09',
      title: 'Content Strategy & Creative Support',
      icon: Lightbulb,
      desc: 'We provide content strategy, scripting, visual guidelines, and storytelling support to ensure high-quality, engaging, and platform-optimized content.'
    },
    {
      id: '10',
      title: 'Performance Tracking & Analytics',
      icon: LineChart,
      desc: 'We monitor campaign performance, engagement, reach, and conversions, providing transparent reporting and actionable insights to optimize results.'
    },
    {
      id: '11',
      title: 'SEO, GEO & AEO Management',
      icon: Globe,
      desc: 'We enhance online visibility through search engine optimization, geographic optimization, and answer engine optimization, helping brands reach the right audience.'
    },
    {
      id: '12',
      title: 'Brand Awareness & Visibility Campaigns',
      icon: Megaphone,
      desc: 'We design campaigns focused on increasing brand recall, audience trust, and digital presence through influencer collaborations and strategic promotions.'
    },
    {
      id: '13',
      title: 'Account & Client Management',
      icon: Users,
      desc: 'Dedicated account managers provide smooth communication, campaign updates, and long-term support, ensuring successful collaborations.'
    },
    {
      id: '14',
      title: 'Creator Onboarding & Relationship Management',
      icon: UserPlus,
      desc: 'We handle influencer onboarding, compliance, and long-term relationships, maintaining consistent content quality and reliable partnerships.'
    }
  ];

  const steps = [
    { title: 'Discovery & Strategy', text: 'We analyze your goals, target audience, and market position to create a customized influencer marketing strategy.' },
    { title: 'Influencer Matching', text: 'Using our extensive database, we match you with the perfect influencers based on audience, engagement, and brand alignment.' },
    { title: 'Campaign Execution', text: 'Our team manages the entire campaign process from content creation to posting and community engagement.' },
    { title: 'Performance Tracking', text: 'We monitor all key metrics in real-time and provide comprehensive analytics throughout the campaign.' },
    { title: 'Optimization & Reporting', text: 'We optimize campaigns based on performance data and deliver detailed reports with actionable insights.' }
  ];

  return (
    <PageWrapper>
      {/* Services Header */}
      <section className="bg-[#2D060F] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-magenta rounded-full blur-[120px] animate-pulse" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-brand-peach/30 shadow-2xl p-2 bg-white">
                <img 
                  src="https://i.ibb.co/67hZnKhd/Whats-App-Image-2026-04-26-at-10-29-37.jpg" 
                  alt="Walt Growth Agency Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <h2 className="text-white font-bold text-2xl tracking-tight">Walt Growth Agency</h2>
                <div className="px-3 py-1 bg-brand-peach/20 border border-brand-peach/30 rounded-full text-brand-peach text-[10px] font-bold uppercase tracking-widest inline-block">
                  Premium Services
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
            >
              Our <span className="text-brand-peach">Services</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-2xl text-white/90 leading-relaxed font-medium border-l-4 border-brand-peach pl-8">
                At Walt Growth Agency, we provide <span className="text-brand-peach">end-to-end marketing</span> and influencer solutions designed to build brand awareness, visibility, credibility, and measurable growth.
              </p>
              <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
                From influencer discovery to campaign execution and analytics, we offer comprehensive services that drive real results for brands and creators alike.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-navy-violet tracking-tight">Service Categories</h2>
            <p className="text-gray-500 mt-4 text-lg">We offer comprehensive solutions across three key areas of influencer marketing</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-gray-50 rounded-[2.5rem] border-2 border-transparent hover:border-brand-peach/30 transition-all group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-magenta mb-8 shadow-sm group-hover:bg-brand-magenta group-hover:text-white transition-all">
                  <cat.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy-violet mb-4">{cat.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Services - Dark Wine Grid */}
      <section className="py-24 bg-[#2D060F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">Our Comprehensive Services</h2>
            <p className="text-white/60 text-lg">Explore our full range of influencer marketing and digital solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/5 group-hover:text-brand-peach/10 transition-colors">
                  {service.id}
                </div>
                <div className="w-12 h-12 bg-brand-peach/10 rounded-xl flex items-center justify-center text-brand-peach mb-6 group-hover:bg-brand-peach group-hover:text-[#2D060F] transition-all">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 relative z-10">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed relative z-10">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy-violet tracking-tight">Our 5-Step Process</h2>
            <p className="text-gray-500 italic">How we deliver exceptional results for every campaign</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-peach/20 hidden lg:block -translate-y-1/2" />
            
            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="space-y-6 text-center">
                  <div className="w-20 h-20 bg-brand-peach text-white rounded-full mx-auto flex items-center justify-center text-3xl font-black shadow-xl border-8 border-white">
                    {idx + 1}
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-brand-navy-violet">{step.title}</h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed px-4">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-brand-magenta">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">Begin Your Growth Journey Today</h2>
          <p className="text-white/80 text-xl font-medium">Ready to see how we can transform your brand or influence?</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/contact.html" className="px-12 py-6 bg-brand-peach text-brand-navy-violet font-black rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase tracking-widest">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
