import { Layout, FileText, Landmark, TrendingUp, Megaphone, Video, Image, AppWindow, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const services = [
  {
    title: 'Web & Graphic Designing',
    icon: Layout,
    desc: 'Crafting stunning, responsive websites and captivating graphic elements that define your brand identity.',
    color: 'bg-emerald-walt/10 text-emerald-walt',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Digital Marketing',
    icon: Megaphone,
    desc: 'Strategic online campaigns across SEO, SEM, and social media to maximize your brand reach and engagement.',
    trending: true,
    color: 'bg-bubblegum/10 text-bubblegum',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Business & Licence Registration',
    icon: Landmark,
    desc: 'Hassle-free legal support for your business formation, licensing, and compliance requirements in India.',
    color: 'bg-ocean/10 text-ocean',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Business Growth',
    icon: TrendingUp,
    desc: 'Data-driven strategies and operational consulting designed to scale your business models effectively.',
    color: 'bg-royalgold/10 text-royalgold',
    image: 'https://images.unsplash.com/photo-1543286386-7a3950335ce4?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Resume & CV Making',
    icon: FileText,
    desc: 'Professional career documentation designed to help you stand out and land your dream professional roles.',
    color: 'bg-emerald-50 text-emerald-600',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Video Editing',
    icon: Video,
    desc: 'High-quality cinematic editing for commercials, social media content, and corporate presentations.',
    color: 'bg-rose-50 text-rose-600',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Poster & Thumbnail Making',
    icon: Image,
    desc: 'Click-worthy thumbnails and eye-catching posters that drive immediate attention to your content.',
    color: 'bg-amber-50 text-amber-600',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Software & App Development',
    icon: AppWindow,
    desc: 'Custom software solutions and mobile applications built with the latest technologies for performance.',
    color: 'bg-indigo-50 text-indigo-600',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Services() {
  return (
    <PageWrapper>
      <section className="bg-brand-purple py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">Our Professional Services</h1>
            <p className="text-xl text-white/80 font-medium">Empowering your business with high-quality creative and strategic solutions under one roof.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-[2rem] border-4 border-brand-navy-violet/10 shadow-sm hover:shadow-2xl hover:border-brand-navy-violet transition-all duration-500 relative overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="p-8">
                  {service.trending && (
                    <div className="absolute top-6 right-6 bg-brand-navy-violet text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg animate-pulse">
                      Trending 🔥
                    </div>
                  )}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-brand-peach/20 text-brand-navy-violet group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy-violet mb-4 transition-colors">{service.title}</h3>
                  <p className="text-brand-navy-violet/60 text-sm leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <a href="/contact" className="text-xs font-bold text-brand-navy-violet/40 group-hover:text-brand-navy-violet flex items-center transition-colors uppercase tracking-widest">
                    Request Quote <ArrowRight className="ml-2 h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy-violet rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <TrendingUp className="h-64 w-64" />
            </div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">Ready to scale?</h2>
              <p className="text-white/70 text-xl max-w-2xl mx-auto font-medium">Contact us today for a free consultation and let's discuss how we can help you grow.</p>
              <div className="flex justify-center">
                <a href="/contact" className="px-10 py-5 bg-brand-peach text-brand-navy-violet font-bold rounded-2xl hover:bg-white transition-all shadow-lg text-lg">
                  Contact Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
