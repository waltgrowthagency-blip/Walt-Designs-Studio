import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

export default function Contact() {
  return (
    <PageWrapper>
      <section className="py-20 lg:py-32 bg-brand-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Info Side */}
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-brand-peach font-bold uppercase tracking-widest text-xs">Contact Us</span>
                <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight tracking-tighter uppercase">Let's Build Something <span className="text-brand-peach italic">Legendary</span> Together</h1>
                <p className="text-xl text-white/80 leading-relaxed max-w-lg font-medium">
                  Whether you have a question about services, pricing, or anything else, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-8">
                {/* Founders Info */}
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border-2 border-white/20 space-y-3">
                    <div className="text-[10px] font-bold text-brand-peach uppercase tracking-widest">Founder</div>
                    <div className="font-bold text-white text-lg">Priyanshu Kumar</div>
                    <div className="flex items-center text-white/70 text-sm">
                      <Phone className="h-4 w-4 mr-2 text-brand-peach" />
                      +91 7303942175
                    </div>
                  </div>
                  <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border-2 border-white/20 space-y-3">
                    <div className="text-[10px] font-bold text-brand-peach uppercase tracking-widest">Co-Founder</div>
                    <div className="font-bold text-white text-lg">Sahil Kumar</div>
                    <div className="flex items-center text-white/70 text-sm">
                      <Phone className="h-4 w-4 mr-2 text-brand-peach" />
                      +91 9818900077
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 hover:bg-brand-navy-violet/20 rounded-2xl transition-colors group border border-white/10">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-navy-violet">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email Us</div>
                      <div className="font-bold text-white uppercase tracking-tight">waltdesignsstudio@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 hover:bg-brand-navy-violet/20 rounded-2xl transition-colors group border border-white/10">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-navy-violet">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Head Office</div>
                      <div className="font-bold text-white uppercase tracking-tight">Delhi, India</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white rounded-[40px] p-8 lg:p-12 shadow-2xl border-8 border-brand-navy-violet/10 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-navy-violet rounded-3xl flex items-center justify-center text-white shadow-xl transform rotate-12">
                 <MessageSquare className="h-10 w-10 text-brand-peach" />
              </div>
              
              <form className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-brand-navy-violet uppercase tracking-widest">Full Name</label>
                       <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-brand-navy-violet/5 border-2 border-brand-navy-violet/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-peach/50 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-brand-navy-violet uppercase tracking-widest">Email Address</label>
                       <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-brand-navy-violet/5 border-2 border-brand-navy-violet/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-peach/50 focus:bg-white transition-all" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-brand-navy-violet uppercase tracking-widest">Service Interested In</label>
                    <select className="w-full px-6 py-4 bg-brand-navy-violet/5 border-2 border-brand-navy-violet/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-peach/50 focus:bg-white transition-all">
                       <option>Select a service</option>
                       <option>Web & Graphic Design</option>
                       <option>Digital Marketing</option>
                       <option>Business Growth</option>
                       <option>Other</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-brand-navy-violet uppercase tracking-widest">Your Message</label>
                    <textarea rows={5} placeholder="Tell us about your project..." className="w-full px-6 py-4 bg-brand-navy-violet/5 border-2 border-brand-navy-violet/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-peach/50 focus:bg-white transition-all resize-none" />
                 </div>
                 <button className="w-full py-6 bg-brand-navy-violet hover:bg-brand-purple text-white font-bold rounded-2xl transition-all shadow-xl flex items-center justify-center group text-lg uppercase tracking-widest">
                    Send Message
                    <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </button>
                 <p className="text-center text-[10px] text-brand-navy-violet/40 font-bold uppercase tracking-widest">
                    Your information is secure. We usually respond within 24 hours.
                 </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
