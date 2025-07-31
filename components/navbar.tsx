"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          
          <span className="font-poppins font-bold text-xl">E-cell SVCE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/events" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            Events
          </Link>
          <Link href="/team" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            Team
          </Link>
          <Link href="/builders-guild" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            Builders Guild
          </Link>
          <Link href="/contact" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground p-2" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          <Link href="/" className="font-medium py-2 border-b border-border" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="font-medium py-2 border-b border-border" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link href="/events" className="font-medium py-2 border-b border-border" onClick={() => setIsOpen(false)}>
            Events
          </Link>
          <Link href="/team" className="font-medium py-2 border-b border-border" onClick={() => setIsOpen(false)}>
            Team
          </Link>
          <Link href="/contact" className="font-medium py-2 border-b border-border" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Button variant="default" size="sm" className="mt-2">
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
