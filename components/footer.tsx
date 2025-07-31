import Link from "next/link"
import Image from "next/image"
import {  Instagram, Linkedin} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary/5 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Logo & Social */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <Link href="/" className="flex items-center gap-2 mb-2">
             
              <span className="font-poppins font-bold text-xl">E-cell SVCE</span>
            </Link>
            <p className="text-muted-foreground mb-2">Grow your Skills in Entrepreneurship</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-foreground/70 hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-foreground/70 hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/builders-guild" className="text-foreground/70 hover:text-primary transition-colors">
                  Builders Guild
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-foreground/70 space-y-2 text-center md:text-left">
              <p>Sri Venkateswara College of Engineering</p>
              <p>Post Bag No.1, Pennalur Village</p>
              <p>Chennai - Bengaluru High Road</p>
              <p>Sriperumbudur Tk, Tamil Nadu 602117</p>
              <p className="mt-2">Email: ecell@svce.ac.in</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} E-cell SVCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
