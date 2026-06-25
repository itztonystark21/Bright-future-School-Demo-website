"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Landmark, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Facilities", href: "/facilities" },
    { name: "Gallery", href: "/gallery" },
    { name: "News & Events", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-200 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / School Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-primary text-white p-2 rounded-lg shadow-md group-hover:bg-accent transition-colors flex items-center justify-center">
              <Landmark className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                BRIGHT FUTURE
              </span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 font-sans">
                Public School • Bengaluru
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link text-sm font-semibold transition-colors duration-200 py-1 ${
                  isActive(link.href)
                    ? "text-accent font-bold"
                    : "text-slate-700 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/admissions"
              className="bg-accent text-white hover:bg-sky-700 transition-all font-semibold text-sm px-5 py-2.5 rounded shadow-sm hover:shadow flex items-center gap-1.5"
            >
              Apply Online
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-primary p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-slate-50 border-b border-slate-200">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-slate-200 text-primary font-semibold border-l-4 border-accent"
                    : "text-slate-700 hover:bg-slate-100 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-3">
              <Link
                href="/admissions"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-accent text-white hover:bg-sky-700 block font-semibold px-4 py-3 rounded shadow-sm"
              >
                Apply Online
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
