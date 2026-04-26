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
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/waltdesignsstudio?igsh=MTB0a3VsaDhqdzc0bQ==' },
                { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61573315777763' },
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' }
              ].map((item, idx) => (
                <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-peach hover:text-brand-brown transition-all">
                  <item.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm border-b border-white/20 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Walt Growth Agency', path: '/growth' },
                { name: 'Lime Green Specials💚', path: '/special-guests' },
                { name: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.path} className="text-[11px] font-medium hover:text-brand-peach transition-colors flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-peach" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm border-b border-white/20 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4 text-[10px] tracking-tight">
              <li className="space-y-1">
                <div className="text-brand-peach font-black">Founder</div>
                <div className="font-bold text-white">Priyanshu Kumar</div>
                <div className="text-white/70 tracking-widest">+91 7303942175</div>
              </li>
              <li className="space-y-1">
                <div className="text-brand-peach font-black">Co-Founder</div>
                <div className="font-bold text-white">Sahil Kumar</div>
                <div className="text-white/70 tracking-widest">+91 9818900077</div>
              </li>
              <li className="pt-2 italic">
                <div className="text-white/40 mb-1">Work with us</div>
                <div className="text-white font-bold break-all">waltdesignsstudio@gmail.com</div>
              </li>
              <li className="italic">
                <div className="text-white/40 mb-1">Growth Agency</div>
                <div className="text-white font-bold break-all">waltgrowthagency@gmail.com</div>
              </li>
              <li className="pt-4 flex items-center">
                <MapPin className="h-4 w-4 text-brand-peach mr-2" />
                <span className="text-white font-bold">Delhi, India</span>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6 text-sm border-b border-white/20 pb-2 inline-block">Find Us</h4>
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
