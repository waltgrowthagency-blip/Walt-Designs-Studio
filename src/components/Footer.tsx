import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-white pt-20 pb-10 border-t-8 border-brand-peach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.ibb.co/ymwt8N0m/IMG-20260425-040622.jpg" 
                alt="Walt Designs & Studio" 
                className="h-12 w-12 rounded-full border-2 border-white shadow-xl"
              />
              <span className="text-xl font-bold tracking-widest uppercase flex flex-col">
                <span>Walt Designs & Studio</span>
                <span className="text-brand-peach text-[10px] leading-none">(With Growth Agency)</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/70 italic">
              "Empowering brands through innovative design, strategic marketing, and comprehensive growth solutions."
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-peach hover:text-brand-brown transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs border-b border-white/20 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Walt Growth Agency', path: '/growth' },
                { name: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.path} className="text-xs uppercase tracking-widest hover:text-brand-peach transition-colors flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-peach" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs border-b border-white/20 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-peach mr-3 shrink-0" />
                <span className="leading-relaxed text-white/70">
                  Flat No. 402, Building A1, Near Metro Pillar 125,<br />
                  Laxmi Nagar, New Delhi - 110092, India<br />
                  <span className="opacity-50 italic text-[10px]">Head Office</span>
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-peach mr-3 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-white/70">+91 7303942175</span>
                  <span className="text-white/50 text-[10px]">Mon-Sat, 10AM - 7PM</span>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-peach mr-3 shrink-0" />
                <div className="flex flex-col">
                  <span className="break-all italic hover:text-white cursor-pointer transition-colors text-white/70">waltdesignsstudio@gmail.com</span>
                  <span className="text-white/50 text-[10px]">Support Response: 24h</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs border-b border-white/20 pb-2 inline-block">Find Us</h4>
            <div className="rounded-2xl overflow-hidden hover:opacity-100 transition-all duration-700 h-40 shadow-inner border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923508492!2d77.06889969131664!3d28.52721314115162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204d!2sDelhi!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs text-white/80 font-medium">
          &copy; 2026 Walt Designs & Studio (With Growth Agency) & bull; Est. 2026
        </div>
      </div>
    </footer>
  );
}
