import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import BirthdayMarquee from '../components/BirthdayMarquee';
import HiringBanner from '../components/HiringBanner';

export default function Contact() {
  return (
    <PageWrapper>
      <HiringBanner />
      <BirthdayMarquee />
      <section className="py-20 lg:py-32 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Info Side */}
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-brand-peach font-bold uppercase tracking-widest text-xs">Contact Us</span>
                <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight tracking-tight">Let's Build Something <span className="text-brand-peach italic">Legendary</span> Together</h1>
                <p className="text-xl text-white/80 leading-relaxed max-w-lg font-medium">
                  Whether you have a question about services, pricing, or anything else, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-8">
                {/* Founders Info */}
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border-2 border-white/20 space-y-3 hover:bg-white/20 transition-all">
                    <div className="text-[10px] font-bold text-brand-peach uppercase tracking-widest">Founder</div>
                    <div className="font-bold text-white text-lg">Priyanshu Kumar</div>
                    <div className="flex items-center text-white text-base font-black">
                      <Phone className="h-5 w-5 mr-2 text-brand-peach" />
                      +91 7303942175
                    </div>
                  </div>
                  <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border-2 border-white/20 space-y-3 hover:bg-white/20 transition-all">
                    <div className="text-[10px] font-bold text-brand-peach uppercase tracking-widest">Co-Founder</div>
                    <div className="font-bold text-white text-lg">Sahil Kumar</div>
                    <div className="flex items-center text-white text-base font-black">
                      <Phone className="h-5 w-5 mr-2 text-brand-peach" />
                      +91 9818900077
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-5 bg-white/5 rounded-2xl border border-white/10 group">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-navy-violet group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Work with us</div>
                      <div className="font-black text-white text-sm lg:text-base tracking-tight">waltdesignsstudio@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-5 bg-white/5 rounded-2xl border border-white/10 group">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-navy-violet group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Growth Agency</div>
                      <div className="font-black text-white text-sm lg:text-base tracking-tight">waltgrowthagency@gmail.com</div>
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
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-brand-navy-violet tracking-tight">Enquiry Us</h3>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">We'll get back to you within 24h</p>
              </div>

              <form action="https://formspree.io/f/xreylalq" method="POST" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                       <label className="text-[10px] font-bold text-brand-navy-violet uppercase tracking-widest ml-2">Full Name</label>
                       <input type="text" name="name" required placeholder="Name" className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-peach/30 transition-all" />
                    </div>
                    <div className="space-y-1.5">
                       <label className="text-[10px] font-bold text-brand-navy-violet uppercase tracking-widest ml-2">Phone Number</label>
                       <input type="tel" name="phone" required placeholder="Number" className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-peach/30 transition-all" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                       <label className="text-[10px] font-bold text-brand-navy-violet uppercase tracking-widest ml-2">Email Address</label>
                       <input type="email" name="email" required placeholder="Email" className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-peach/30 transition-all" />
                    </div>
                    <div className="space-y-1.5">
                       <label className="text-[10px] font-bold text-brand-navy-violet uppercase tracking-widest ml-2">City</label>
                       <input type="text" name="city" required placeholder="City" className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-peach/30 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-brand-navy-violet uppercase tracking-widest ml-2">Requirement</label>
                    <select name="requirement" className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-peach/30 transition-all">
                       <option>Web & Graphic Design</option>
                       <option>Digital Marketing</option>
                       <option>Business Growth</option>
                       <option>Others/Custom (Specify below)</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-brand-navy-violet uppercase tracking-widest ml-2">Description / Specific Requirement</label>
                    <textarea name="description" rows={4} required placeholder="Briefly describe your needs..." className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-peach/30 transition-all resize-none" />
                  </div>
                  <button type="submit" className="w-full py-5 bg-brand-navy-violet hover:bg-brand-purple text-white font-bold rounded-2xl transition-all shadow-xl flex items-center justify-center group text-lg uppercase tracking-widest">
                     Submit Enquiry
                     <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
