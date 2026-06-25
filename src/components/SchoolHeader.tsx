"use client";

import { Phone, Mail, GraduationCap, MapPin } from "lucide-react";
import Link from "next/link";

export default function SchoolHeader() {
  return (
    <div className="w-full bg-[#07162c] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Side: Contact Details */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span>+91 80 2345 6789</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-accent" />
            <span>admissions@brightfuture.edu.in</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span className="hidden sm:inline">Green Glen Layout, Bengaluru, KA 560103</span>
            <span className="sm:hidden">Bengaluru, India</span>
          </div>
        </div>

        {/* Right Side: Quick Links & CBSE Info */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-1.5 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700/50">
            <GraduationCap className="w-3.5 h-3.5 text-yellow-500" />
            <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-200">Affiliated to CBSE (Aff. No: 830123)</span>
          </div>
          <div className="flex items-center gap-3">
            <Link 
              href="/admissions" 
              className="text-[11px] font-semibold text-yellow-400 hover:text-yellow-300 transition-colors animate-pulse"
            >
              Admissions Open 2026-27
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <span className="text-slate-600">|</span>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); alert("Parent Portal Login system will be active during the academic term."); }}
              className="hover:text-white transition-colors"
            >
              Parent Portal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
