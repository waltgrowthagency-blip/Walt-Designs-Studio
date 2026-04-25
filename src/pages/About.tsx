import { Eye, Target, Award, Users } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

export default function About() {
  return (
    <PageWrapper>
      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-teal-100 rounded-[60px] transform rotate-3 absolute inset-0 -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-[60px] shadow-2xl w-full h-full object-cover"
                alt="Our Studio"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-brand-purple font-bold uppercase tracking-widest text-xs">Our Story</span>
                <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy-violet leading-tight">Elevating Brands Through <span className="text-brand-peach">Innovation</span> & Strategy</h1>
                <p className="text-xl text-brand-navy-violet/80 leading-relaxed font-medium">
                  Walt Designs & Studio was founded with a singular purpose: to provide world-class design and growth solutions that help businesses thrive in an ever-evolving digital landscape. 
                </p>
                <p className="text-brand-navy-violet/70 leading-relaxed">
                  We believe that every brand has a unique story worth telling. Our mission is to amplify that story through stunning visuals, strategic marketing, and robust business support systems that deliver real, measurable results.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-brand-navy-violet mb-2">300+</div>
                  <div className="text-sm font-medium text-brand-navy-violet/40 uppercase tracking-wider">Clients Worldwide</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-navy-violet mb-2">10+</div>
                  <div className="text-sm font-medium text-brand-navy-violet/40 uppercase tracking-wider">Global Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 bg-white rounded-[3rem] border-4 border-brand-navy-violet/20 space-y-6 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-brand-peach/20 rounded-2xl flex items-center justify-center text-brand-navy-violet">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-brand-navy-violet">Our Mission</h3>
              <p className="text-brand-navy-violet/70 leading-relaxed text-lg">
                To bridge the gap between creative vision and business execution, providing innovative solutions that empower entrepreneurs to scale their dreams into reality.
              </p>
            </div>
            <div className="p-12 bg-white rounded-[3rem] border-4 border-brand-navy-violet/20 space-y-6 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-brand-peach/20 rounded-2xl flex items-center justify-center text-brand-navy-violet">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-brand-navy-violet">Our Vision</h3>
              <p className="text-brand-navy-violet/70 leading-relaxed text-lg">
                To be the world's most trusted growth partner for modern brands, setting new standards for professional excellence and creative brilliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">The Minds Behind Walt Designs</h2>
            <p className="text-gray-600 text-lg">Meet our visionary leadership dedicated to your project's success.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Founder */}
            <div className="group space-y-8">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 bg-gray-100 border border-gray-200 shadow-lg relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                  alt="PRIYANSHU KUMAR" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white pt-20">
                   <div className="text-teal-400 font-bold text-xs uppercase tracking-widest mb-1">Founder</div>
                   <h4 className="text-2xl font-bold uppercase tracking-tight">Priyanshu Kumar</h4>
                </div>
              </div>
              <div className="space-y-4 text-center">
                <p className="text-gray-600 leading-relaxed px-4">
                  A visionary strategist with a passion for disruptive design and business scaling. Priyanshu leads the creative direction of the studio.
                </p>
              </div>
            </div>

            {/* Co-Founder */}
            <div className="group space-y-8">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 bg-gray-100 border border-gray-200 shadow-lg relative">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" 
                  alt="SAHIL KUMAR" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white pt-20">
                   <div className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-1">Co-Founder & Marketing Manager</div>
                   <h4 className="text-2xl font-bold uppercase tracking-tight">Sahil Kumar</h4>
                </div>
              </div>
              <div className="space-y-4 text-center">
                <p className="text-gray-600 leading-relaxed px-4">
                  The engine behind our marketing excellence. Sahil specializes in digital transformation and growth marketing across global markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
