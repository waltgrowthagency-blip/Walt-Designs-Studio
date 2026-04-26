import { Eye, Target, Award, Users, ChevronDown, ChevronUp, Briefcase, Zap, Globe, Heart, TrendingUp } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import HiringBanner from '../components/HiringBanner';
import { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left transition-all"
      >
        <span className="text-lg font-bold text-brand-navy-violet">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-brand-peach" /> : <ChevronDown className="h-5 w-5 text-brand-peach" />}
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 leading-relaxed animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function About() {
  return (
    <PageWrapper>
      <HiringBanner />
      {/* Our Story Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-peach/20 rounded-full blur-3xl animate-pulse" />
              <div className="aspect-square bg-teal-50 rounded-[4rem] transform -rotate-3 absolute inset-0 -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-[4rem] shadow-2xl w-full h-full object-cover transform rotate-2 hover:rotate-0 transition-transform duration-700"
                alt="Walt Team Collaboration"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-brand-purple font-bold uppercase tracking-widest text-xs flex items-center">
                   <Heart className="h-4 w-4 mr-2 fill-brand-purple" />
                   The Journey
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy-violet leading-tight tracking-tight">Our Story</h1>
                <p className="text-xl text-brand-navy-violet/80 leading-relaxed font-bold italic border-l-4 border-brand-peach pl-6">
                  Founded in 2026, Walt Growth Agency emerged with a vision to redefine how brands and creators coexist. 
                </p>
                <div className="space-y-6 text-brand-navy-violet/70 leading-relaxed">
                  <p>
                    What started as a small design studio in India quickly evolved into a powerhouse of digital transformation. We noticed a major gap in the market: brands were struggling to find authentic voices, and talented creators were struggling to find sustainable brand partnerships.
                  </p>
                  <p>
                    We decided to build that bridge. Today, Walt Growth Agency is not just a service provider; we are a partner in growth for over a thousand creators and hundreds of businesses worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Works Section */}
      <section className="py-24 bg-brand-purple text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">How We Do It</h2>
            <p className="text-white/60 font-medium tracking-widest uppercase text-xs">Our Growth Process</p>
            <div className="h-1.5 w-24 bg-brand-peach mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="space-y-6 bg-white/10 p-10 rounded-[3rem] border border-white/10 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 bg-white text-brand-purple rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl">1</div>
              <h3 className="text-2xl font-bold">1000+ Creators Network</h3>
              <p className="text-white/70 leading-relaxed">
                We actively collaborate with a network of 1000+ creators across niches. Every partnership is built on trust, professionalism, and mutual growth. We select creators whose audience and values align genuinely with the brands we work with.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-6 bg-white/10 p-10 rounded-[3rem] border border-white/10 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 bg-white text-brand-purple rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl">2</div>
              <h3 className="text-2xl font-bold">Identifying Right Brands</h3>
              <p className="text-white/70 leading-relaxed">
                We focus on identifying brands looking for serious growth and genuine audience connection. We choose brands that are serious about building a long-term presence, ensuring every collaboration is purposeful and effective.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-6 bg-white/10 p-10 rounded-[3rem] border border-white/10 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 bg-white text-brand-purple rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl">3</div>
              <h3 className="text-2xl font-bold">Strategic Connection</h3>
              <p className="text-white/70 leading-relaxed">
                Once matched, we build a strong connection. Creators present the brand in a relatable way, building trust and driving real engagement. We ensure the process is smooth, respectful, and beneficial for everyone involved.
              </p>
            </div>
          </div>

          <div className="mt-20 p-12 bg-white rounded-[4rem] text-brand-navy-violet border-8 border-brand-peach/30 shadow-2xl max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center text-left">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold tracking-tight">Our Simple Approach</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600"><Zap className="h-5 w-5" /></div>
                    <p className="font-bold">Smart Partnerships over aggressive marketing</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Globe className="h-5 w-5" /></div>
                    <p className="font-bold">Authentic Promotion through genuine creators</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><TrendingUp className="h-5 w-5" /></div>
                    <p className="font-bold">Sustainable Growth for long-term impact</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl border-2 border-gray-100">
                <p className="text-lg italic leading-relaxed text-gray-600">
                  "At Walt Growth Agency, our working model is simple, respectful, and focused on creating real value for both brands and creators. We act as a bridge that connects the right people in the right way."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-brand-navy-violet tracking-tight">Frequently Asked Questions</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Everything you need to know</p>
          </div>
          
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100">
            <FAQItem 
              question="What is the reach of Walt Growth Agency's creator network?"
              answer="Our network spans over 1,000+ vetted creators across major platforms including Instagram, YouTube, and LinkedIn. We cover various niches from tech and lifestyle to business and creative arts, ensuring we can find the perfect match for any brand's target audience."
            />
            <FAQItem 
              question="How do you ensure the quality of brand-creator collaborations?"
              answer="We use a multi-step vetting process. First, we analyze the brand's goals. Then, we manually select creators whose content quality, audience engagement rates, and personal values align with those goals. We facilitate the entire communication to ensure a professional and smooth campaign execution."
            />
            <FAQItem 
              question="Can Walt help small businesses or startups?"
              answer="Absolutely! We have dedicated strategies for startups and early-stage businesses. Our 'Business Growth' service is specifically designed to help smaller entities build their visual identity and initial market presence without unnecessary marketing waste."
            />
            <FAQItem 
              question="What sets Walt apart from traditional marketing agencies?"
              answer="Unlike traditional agencies that focus purely on ad-spend or cookie-cutter designs, we prioritize authentic storytelling and relational bridge-building. We connect real people (creators) with real businesses in a way that feels organic and non-intrusive."
            />
            <FAQItem 
              question="How long does it typically take to see results?"
              answer="For design projects, we typically deliver initial concepts within 1-2 weeks. For growth and marketing campaigns, while initial movement can be seen in the first month, we focus on sustainable growth that yields significant compounding results over a 3-6 month period."
            />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
