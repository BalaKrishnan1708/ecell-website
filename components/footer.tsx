import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, MessageCircle } from "lucide-react"

const Footer = () => {
  return (
  <footer className="bg-gradient-to-r from-black via-gray-900 to-indigo-900 border-t border-indigo-800/50 transition-colors duration-500 text-indigo-400 relative z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          {/* Logo & Social */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <Image
                src="/logo.png"
                alt="E-cell SVCE Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="font-poppins font-bold text-xl text-indigo-400">E-cell SVCE</span>
            </Link>
            <p className="text-indigo-300 mb-2">Grow your Skills in Entrepreneurship</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link href="https://www.instagram.com/ecell.svce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-indigo-400/70 hover:text-indigo-500 transition-colors">
                <Instagram size={20} className="text-indigo-400" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.linkedin.com/company/e-cell-svce/" target="_blank" rel="noopener noreferrer" className="text-indigo-400/70 hover:text-indigo-500 transition-colors">
                <Linkedin size={20} className="text-indigo-400" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://chat.whatsapp.com/Gf3tw3YTHLwLpiOtGofj1Q" target="_blank" rel="noopener noreferrer" className="text-indigo-400/70 hover:text-green-500 transition-colors">
                <MessageCircle size={20} className="text-green-400" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 flex flex-col items-center md:items-start">
           
            <h3 className="font-bold text-lg mb-4 text-indigo-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-indigo-300 hover:text-indigo-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-indigo-300 hover:text-indigo-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/events" className="text-indigo-300 hover:text-indigo-500 transition-colors">Events</Link>
              </li>
              <li>
                <Link href="/team" className="text-indigo-300 hover:text-indigo-500 transition-colors">Team</Link>
              </li>
              <li>
                <Link href="/builders-guild" className="text-indigo-300 hover:text-indigo-500 transition-colors">Builders Guild</Link>
              </li>
              <li>
                <Link href="/contact" className="text-indigo-300 hover:text-indigo-500 transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/blog" className="text-indigo-300 hover:text-indigo-500 transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg mb-4 text-indigo-400">Contact Us</h3>
            <address className="not-italic text-indigo-300 space-y-2 text-center md:text-left">
              <p>Sri Venkateswara College of Engineering</p>
              <p>Post Bag No.1, Pennalur Village</p>
              <p>Chennai - Bengaluru High Road</p>
              <p>Sriperumbudur Tk, Tamil Nadu 602117</p>
              <p className="mt-2 text-indigo-200">Email: ecell@svce.ac.in</p>
            </address>
          </div>
        </div>

  <div className="mt-6 pt-2 border-t border-indigo-800/50 text-center text-xs text-indigo-500">
          <p className="text-indigo-500">© {new Date().getFullYear()} E-cell SVCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
