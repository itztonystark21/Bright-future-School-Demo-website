"use client";

import Link from "next/link";
import { Landmark, Phone, Mail, MapPin, Clock, Calendar, CheckSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c2340] text-slate-300 font-sans border-t-4 border-accent">
      {/* Top Banner (Optional school motto) */}
      <div className="bg-[#081a30] py-4 px-4 text-center border-b border-slate-800">
        <span className="font-serif italic text-slate-400 text-sm md:text-base">
          "Nurturing Minds, Shaping Futures, and Building Character since 2012"
        </span>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: School Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-accent text-white p-2 rounded-lg">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white tracking-tight">
                  BRIGHT FUTURE
                </h3>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                  Public School
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Affiliated to CBSE, New Delhi (Affiliation No. 830123). Delivering high-quality educational experiences with a focus on academic excellence, holistic development, and character building.
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span>Office Hours: 8:30 AM – 3:30 PM (Mon-Sat)</span>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-white font-semibold text-sm tracking-wider uppercase border-b border-slate-700 pb-2 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">Vision, Mission & Values</Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-white transition-colors">Curriculum Details</Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-white transition-colors">Fee Structure & Policy</Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-white transition-colors">School Infrastructure</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">Photo & Video Gallery</Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">School Calendar & Events</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: CBSE Mandatory Disclosures */}
          <div>
            <h4 className="font-serif text-white font-semibold text-sm tracking-wider uppercase border-b border-slate-700 pb-2 mb-4">
              Mandatory Disclosures
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("CBSE Mandated OASIS and SARAS documents are maintained in the administrative records."); }} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <CheckSquare className="w-3 h-3 text-accent" />
                  <span>Mandatory Public Disclosure</span>
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("The Academic Calendar is updated in the administrative handbook."); }} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-accent" />
                  <span>Academic Calendar PDF</span>
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("PTA Executive Committee details are listed in the Parent-Teacher handbook."); }} className="hover:text-white transition-colors">Parent-Teacher Association (PTA)</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("List of active school buses and safety certificates is available at the reception."); }} className="hover:text-white transition-colors">School Transport Details</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("Mandatory Transfer Certificates register is kept inside the Admin Office."); }} className="hover:text-white transition-colors">Transfer Certificates (TC)</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="font-serif text-white font-semibold text-sm tracking-wider uppercase border-b border-slate-700 pb-2 mb-4">
              Contact Details
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Bright Future Public School,
                  Survey No. 42/1, Green Glen Layout,
                  Outer Ring Road, Bengaluru,
                  Karnataka - 560103, India
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+91 80 2345 6789 / 90</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span className="break-all">info@brightfuture.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} Bright Future Public School. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:underline">Privacy Policy</a>
            <span>•</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:underline">Terms & Conditions</a>
            <span>•</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
