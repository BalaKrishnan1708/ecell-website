import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Brand and Mission */}
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="E-cell SVCE Logo"
                  fill
                  className="object-contain brightness-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-white">E-CELL <span className="text-indigo-500">SVCE</span></span>
              </div>
            </Link>
            <p className="text-lg text-gray-400 font-medium leading-relaxed max-w-md">
              Empowering the next generation of visionary founders through 
              innovation, mentorship, and world-class incubation.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <MessageCircle className="w-5 h-5 text-green-500" />, href: "https://chat.whatsapp.com/Gf3tw3YTHLwLpiOtGofj1Q" },
                { icon: <Instagram className="w-5 h-5 text-pink-500" />, href: "https://www.instagram.com/ecell.svce?igshid=YmMyMTA2M2Y%3D" },
                { icon: <Linkedin className="w-5 h-5 text-blue-500" />, href: "https://www.linkedin.com/company/e-cell-svce/" },
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-8">
            <h3 className="font-bold text-lg text-indigo-500">Navigation</h3>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Events", href: "/events" },
                { label: "Our Team", href: "/team" },
                { label: "Builders Guild", href: "/builders-guild" },
                { label: "Join Community", href: "/contact" }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white text-sm font-bold transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-8">
            <h3 className="font-bold text-lg text-indigo-500">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 transition-all">
                  <MapPin className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                </div>
                <p className="text-sm font-bold text-gray-400 leading-relaxed">
                  Sri Venkateswara College of Engineering<br />
                  Pennalur Village, Sriperumbudur Tk<br />
                  Tamil Nadu, India 602117
                </p>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 transition-all">
                  <Mail className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                </div>
                <p className="text-sm font-bold text-white">
                  ecell@svce.ac.in
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Cleaned */}
        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} E-CELL SVCE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
