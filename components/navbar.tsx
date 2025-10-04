"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/builders-guild", label: "Builders Guild" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black transition-all duration-500 ${
        scrolled 
          ? "py-4 shadow-lg border-b border-indigo-700/50" 
          : "py-2"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="E - Cell SVCE Logo"
              width={scrolled ? 170 : 100}
              height={scrolled ? 50 : 30}
              className={`object-contain transition-all duration-500 ${
                scrolled ? "w-10 h-10 md:w-12 md:h-12" : "w-6 h-6 md:w-8 md:h-8"
              }`}
            />
            <span className={`font-poppins font-extrabold text-indigo-400 drop-shadow-sm hidden sm:block transition-all duration-500 ${
              scrolled ? "text-xl" : "text-sm"
            }`}>
              E - Cell
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-2 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-bold rounded transition-all duration-500 ${
                scrolled ? "text-sm px-4 py-2" : "text-xs px-2 py-1"
              } ${
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  ? "text-brand-primary bg-indigo-900/50"
                  : "text-gray-300 hover:text-brand-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className={`md:hidden text-brand-primary z-50 transition-all duration-500 ${
            scrolled ? "p-2" : "p-1"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={scrolled ? 24 : 18} /> : <Menu size={scrolled ? 24 : 18} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black border-b border-indigo-700/50 shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className={`container mx-auto px-4 flex flex-col transition-all duration-500 ${
          scrolled ? "py-3 gap-2" : "py-2 gap-1"
        }`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-bold rounded transition-all duration-500 ${
                scrolled ? "text-sm px-4 py-2" : "text-xs px-2 py-1"
              } ${
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  ? "text-brand-primary bg-indigo-900/50"
                  : "text-gray-300 hover:text-brand-primary"
              }`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;