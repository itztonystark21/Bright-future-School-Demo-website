"use client";

import Image from "next/image";
import { Check, ShieldCheck, Bus, HeartPulse, RefreshCw, Cpu } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Facilities() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#0a2540] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">School Facilities</h1>
            <p className="text-slate-300 text-sm mt-3 max-w-2xl font-sans leading-relaxed">
              Explore our state-of-the-art campus, laboratories, resources, safety systems, and school buses designed to support student safety and comfort.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Facility 1: Smart Classrooms */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <div className="relative h-64 sm:h-72 rounded-lg overflow-hidden shadow border border-slate-200 bg-slate-50">
                  <Image src="/images/classroom.jpg" alt="Smart Classrooms" fill className="object-cover" />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                <span className="text-accent text-[10px] uppercase tracking-wider font-bold font-sans">Learning Spaces</span>
                <h2 className="text-2xl font-bold font-serif text-slate-900">Smart Interactive Classrooms</h2>
                <p className="text-slate-600 text-sm leading-relaxed font-sans">
                  Our spacious and well-ventilated classrooms are designed to sit 35 students comfortably. Each classroom is equipped with a digital smart whiteboard, a visual projector, and high-speed Wi-Fi connectivity. 
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-sans">
                  <div className="flex gap-1.5 items-center"><Check className="w-4 h-4 text-accent" /> Ergonomic tables & seats</div>
                  <div className="flex gap-1.5 items-center"><Check className="w-4 h-4 text-accent" /> Digital textbook projections</div>
                  <div className="flex gap-1.5 items-center"><Check className="w-4 h-4 text-accent" /> Storage lockers for bags</div>
                  <div className="flex gap-1.5 items-center"><Check className="w-4 h-4 text-accent" /> Natural breeze & sun lighting</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Facility 2: Labs */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center lg:flex-row-reverse">
              <div className="lg:col-span-5 lg:order-last">
                <div className="relative h-64 sm:h-72 rounded-lg overflow-hidden shadow border border-slate-200 bg-slate-50">
                  <Image src="/images/science_lab.jpg" alt="Science Laboratory" fill className="object-cover" />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                <span className="text-accent text-[10px] uppercase tracking-wider font-bold font-sans">Scientific Inquiry</span>
                <h2 className="text-2xl font-bold font-serif text-slate-900">Advanced Laboratories</h2>
                <p className="text-slate-600 text-sm leading-relaxed font-sans">
                  We house three distinct, spacious science laboratories (Physics, Chemistry, and Biology) that conform to CBSE board specifications. In addition, our Computer Lab contains 40 modern desktop units, where students learn programming, web design, and office utilities.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-sans">
                  <div className="flex gap-1.5 items-center"><Check className="w-4 h-4 text-accent" /> Individual experiment stations</div>
                  <div className="flex gap-1.5 items-center"><Check className="w-4 h-4 text-accent" /> Advanced microscopes & test sets</div>
                  <div className="flex gap-1.5 items-center"><Check className="w-4 h-4 text-accent" /> Smart coding & AI fundamentals</div>
                  <div className="flex gap-1.5 items-center"><Check className="w-4 h-4 text-accent" /> Strict laboratory safety rules</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Facility 3: Library */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <div className="relative h-64 sm:h-72 rounded-lg overflow-hidden shadow border border-slate-200 bg-slate-50">
                  <Image src="/images/library.jpg" alt="Central Library" fill className="object-cover" />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                <span className="text-accent text-[10px] uppercase tracking-wider font-bold font-sans">Resource Hub</span>
                <h2 className="text-2xl font-bold font-serif text-slate-900">The Central Library</h2>
                <p className="text-slate-600 text-sm leading-relaxed font-sans">
                  The central school library maintains a catalog of over 8,000 books, including national educational journals, global encyclopedias, competitive exam prep series, and children's fiction. A quiet study room is available for secondary and senior secondary research.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-sans">
                  <div className="flex gap-1.5 items-center"><Check className="w-4 h-4 text-accent" /> Weekly library research slots</div>
                  <div className="flex gap-1.5 items-center"><Check className="w-4 h-4 text-accent" /> Digital catalog indexing</div>
                  <div className="flex gap-1.5 items-center"><Check className="w-4 h-4 text-accent" /> Comfortable reading tables</div>
                  <div className="flex gap-1.5 items-center"><Check className="w-4 h-4 text-accent" /> Subscription to national dailies</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Facility 4: Sports */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center lg:flex-row-reverse">
              <div className="lg:col-span-5 lg:order-last">
                <div className="relative h-64 sm:h-72 rounded-lg overflow-hidden shadow border border-slate-200 bg-slate-50">
                  <Image src="/images/sports.jpg" alt="Sports Grounds" fill className="object-cover" />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                <span className="text-accent text-[10px] uppercase tracking-wider font-bold font-sans">Athletics</span>
                <h2 className="text-2xl font-bold font-serif text-slate-900">Physical Education & Sports</h2>
                <p className="text-slate-600 text-sm leading-relaxed font-sans">
                  We believe in healthy bodies alongside healthy minds. The school offers professional physical education instructors for soccer, basketball, cricket, badminton, and athletics. An indoor sports arena is dedicated to chess, table tennis, and yoga.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-sans">
                  <div className="flex gap-1.5 items-center"><Check className="w-4 h-4 text-accent" /> Lush green grass soccer field</div>
                  <div className="flex gap-1.5 items-center"><Check className="w-4 h-4 text-accent" /> Cricket practice net pitches</div>
                  <div className="flex gap-1.5 items-center"><Check className="w-4 h-4 text-accent" /> Concrete basketball courts</div>
                  <div className="flex gap-1.5 items-center"><Check className="w-4 h-4 text-accent" /> Annual inter-school sports events</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Safety, Medical and Transport details */}
      <section className="py-16 bg-supporting border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-xs font-bold uppercase tracking-wider font-sans">Services</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">Student Safety & Services</h2>
            <p className="text-slate-600 text-sm mt-3">We implement strict guidelines to ensure a safe experience on and off campus.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bus Services */}
            <div className="bg-white p-6 rounded-lg border border-slate-200/80 shadow-sm space-y-3">
              <div className="bg-slate-100 text-primary p-3 rounded-full w-fit">
                <Bus className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">Transport & School Buses</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-sans">
                Our fleet of 12 yellow school buses covers key residential areas of Bengaluru. Every bus features verified drivers, a lady conductor, first-aid kits, speed governors, and GPS tracking.
              </p>
            </div>

            {/* Medical Care */}
            <div className="bg-white p-6 rounded-lg border border-slate-200/80 shadow-sm space-y-3">
              <div className="bg-slate-100 text-primary p-3 rounded-full w-fit">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">Campus Infirmary</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-sans">
                Our medical room is staffed by a full-time certified nurse. We maintain files for general checkups and have arrangements with nearby multi-specialty hospitals for emergency needs.
              </p>
            </div>

            {/* Safety CCTV */}
            <div className="bg-white p-6 rounded-lg border border-slate-200/80 shadow-sm space-y-3">
              <div className="bg-slate-100 text-primary p-3 rounded-full w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">Security & CCTV Monitoring</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-sans">
                Our campus features a boundary wall with guarded entry/exit gates. 96 CCTV cameras cover common corridors, gates, and play spaces to ensure complete surveillance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
