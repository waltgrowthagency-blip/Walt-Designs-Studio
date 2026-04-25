import { Star, CheckCircle2, Quote, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const allTestimonials = [
  { name: 'Mithila Catering', role: 'Event Management', text: 'Amazing service and growth strategies. They handled our digital presence with extreme care and professionalism.' },
  { name: 'Kaushalyan Consulting', role: 'Business Consulting', text: 'Professionalism at its best. The team is dedicated and their results speak louder than words.' },
  { name: 'Kaushik Caterers', role: 'Hospitality', text: 'Exceeded our expectations in every way. From branding to digital reach, everything was top-notch.' },
  { name: 'Aakash Digital', role: 'Tech SaaS', text: 'Walt Designs helped us scale our user base by 300% in just 6 months. Highly recommended!' },
  { name: 'Royal Interiors', role: 'Real Estate', text: 'The visual identity they created for us is simply stunning. We get compliments from every client.' },
  { name: 'Green Valley', role: 'Agriculture', text: 'Professional team with a deep understanding of market dynamics. Their growth strategies are game-changers.' },
  { name: 'Global Logistics', role: 'Shipping', text: 'Efficient, creative, and reliable. They are our go-to partners for all things design and marketing.' },
  { name: 'FitLife Gym', role: 'Fitness', text: 'Their social media marketing campaigns brought in more members than we ever expected.' },
];

export default function Testimonials() {
  return (
    <PageWrapper>
      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
             <div className="flex justify-center mb-4">
                <div className="flex text-orange-400">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-8 w-8 fill-current" />)}
                </div>
             </div>
             <h1 className="text-4xl lg:text-6xl font-black text-dark-teal tracking-tight">Voices of <span className="text-emerald-walt">Trust</span></h1>
             <p className="text-xl text-gray-600">A collection of success stories and feedback from our esteemed partners.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((t, idx) => (
              <div key={idx} className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl hover:bg-white transition-all duration-500 group relative overflow-hidden">
                <Quote className="absolute top-6 right-8 h-12 w-12 text-emerald-walt/10 group-hover:text-emerald-walt transition-colors opacity-40" />
                <p className="text-gray-700 italic mb-8 leading-relaxed relative z-10">"{t.text}"</p>
                <div className="flex items-center space-x-4">
                   <div className="w-12 h-12 bg-emerald-walt/10 rounded-full flex items-center justify-center font-bold text-emerald-walt">
                      {t.name.charAt(0)}
                   </div>
                   <div>
                      <div className="font-bold text-dark-teal">{t.name}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest">{t.role}</div>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hidden/Exclusive Feel */}
          <div className="mt-20 p-12 bg-dark-teal rounded-[3rem] text-center text-white">
             <h2 className="text-3xl font-bold mb-6 italic uppercase tracking-tight">Ready to be our next success story?</h2>
             <a href="/contact.html" className="inline-flex items-center space-x-2 text-emerald-walt font-bold hover:text-royalgold transition-colors text-lg">
                <span>Start Your Brand Evolution</span>
                <ArrowRight className="h-5 w-5" />
             </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
