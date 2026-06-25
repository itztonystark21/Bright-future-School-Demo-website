"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, CheckCircle, Clock, Award, ShieldAlert, GraduationCap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Academics() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#0a2540] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">Academics & Pedagogy</h1>
            <p className="text-slate-300 text-sm mt-3 max-w-2xl font-sans leading-relaxed">
              Discover our structured CBSE curriculum, active learning approach, streams, and physical timings designed to support healthy growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 1: Learning Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-accent text-xs font-bold uppercase tracking-wider font-sans">Pedagogy</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-1">Our Learning Philosophy</h2>
              <div className="text-slate-600 text-sm leading-relaxed font-sans space-y-4">
                <p>
                  At Bright Future Public School, we prioritize concept understanding over rote learning. Following the National Education Policy (NEP) guidelines within the CBSE framework, our pedagogical methods are designed to build curiosity, critical thinking, and real-life connections.
                </p>
                <p>
                  We utilize smart interactive whiteboards to integrate high-quality visual content. Our lesson plans include regular diagnostic worksheets, classroom presentations, laboratory experiments, and peer learning sessions to ensure no student is left behind.
                </p>
              </div>

              {/* Core Academic Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-2 items-start text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Experiential Science & Computer lab projects</span>
                </div>
                <div className="flex gap-2 items-start text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Regular Formative & Summative Assessments</span>
                </div>
                <div className="flex gap-2 items-start text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Remedial coaching for board-bound classes</span>
                </div>
                <div className="flex gap-2 items-start text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Emphasis on grammar, writing, and public speaking</span>
                </div>
              </div>
            </div>

            {/* Right: Graphic / Photo */}
            <div className="lg:col-span-5">
              <div className="relative h-[340px] rounded-lg overflow-hidden shadow border border-slate-200 bg-slate-50">
                <Image 
                  src="/images/classroom.jpg" 
                  alt="Student activity in classroom" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: School Divisions & Streams */}
      <section className="py-16 bg-supporting border-t border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">Academic Structure</h2>
              <p className="text-slate-600 text-sm mt-3 font-sans">
                Our educational path is structured into distinct segments with custom academic priorities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Primary */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-slate-900 border-b border-slate-100 pb-2 mb-3">Primary School</h3>
                  <p className="text-slate-500 text-[10px] uppercase font-bold text-accent tracking-wider mb-2">Grades I - V</p>
                  <p className="text-slate-600 text-xs leading-relaxed font-sans">
                    Fosters literacy, numeracy, environment consciousness, and fundamental social behaviors. Subjects: English, Hindi/Kannada, Mathematics, EVS, Art, Computer Literacy.
                  </p>
                </div>
              </div>

              {/* Middle */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-slate-900 border-b border-slate-100 pb-2 mb-3">Middle School</h3>
                  <p className="text-slate-500 text-[10px] uppercase font-bold text-accent tracking-wider mb-2">Grades VI - VIII</p>
                  <p className="text-slate-600 text-xs leading-relaxed font-sans">
                    Transitioning to specialized disciplines. Subjects: English, Kannada, Hindi (Third Language), Physics, Chemistry, Biology, Mathematics, History, Civics, Geography, Coding.
                  </p>
                </div>
              </div>

              {/* Secondary */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-slate-900 border-b border-slate-100 pb-2 mb-3">Secondary School</h3>
                  <p className="text-slate-500 text-[10px] uppercase font-bold text-accent tracking-wider mb-2">Grades IX - X</p>
                  <p className="text-slate-600 text-xs leading-relaxed font-sans">
                    Focused CBSE Board preparation. Subjects: English Communication, Kannada/Hindi, Mathematics, Integrated Science (PC&B), Social Sciences (Hist/Civ/Geo/Econ), AI/IT.
                  </p>
                </div>
              </div>

              {/* Sr. Secondary */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-slate-900 border-b border-slate-100 pb-2 mb-3">Senior Secondary</h3>
                  <p className="text-slate-500 text-[10px] uppercase font-bold text-accent tracking-wider mb-2">Grades XI - XII</p>
                  <p className="text-slate-600 text-xs leading-relaxed font-sans">
                    Specialized career pathways:
                    <strong className="block mt-1 font-semibold text-slate-800">• Science Stream:</strong> PCMB (Physics, Chemistry, Math, Bio) or PCMC (Comp Sci)
                    <strong className="block mt-1 font-semibold text-slate-800">• Commerce Stream:</strong> Accounts, Biz Studies, Economics, Applied Math
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3: School Timings Table */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-900">School Hours & Schedule</h2>
              <p className="text-slate-600 text-sm mt-2">Timings are structured to balance study sessions with breaks and activities.</p>
            </div>

            <div className="overflow-hidden border border-slate-200 rounded-lg shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm font-sans">
                <thead className="bg-[#0a2540] text-white">
                  <tr>
                    <th className="px-6 py-4 font-serif font-semibold">Division</th>
                    <th className="px-6 py-4 font-serif font-semibold">Days</th>
                    <th className="px-6 py-4 font-serif font-semibold">Timings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-slate-900">Kindergarten (Nursery – UKG)</td>
                    <td className="px-6 py-4">Monday – Friday</td>
                    <td className="px-6 py-4">8:30 AM – 12:30 PM</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-slate-900">Primary School (Grades I – V)</td>
                    <td className="px-6 py-4">Monday – Friday <span className="block text-[10px] text-slate-400">Half day on Saturday</span></td>
                    <td className="px-6 py-4">8:30 AM – 3:00 PM <span className="block text-[10px] text-slate-400">8:30 AM – 12:30 PM (Sat)</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-slate-900">Middle & Secondary (Grades VI – X)</td>
                    <td className="px-6 py-4">Monday – Friday <span className="block text-[10px] text-slate-400">Half day on Saturday</span></td>
                    <td className="px-6 py-4">8:30 AM – 3:15 PM <span className="block text-[10px] text-slate-400">8:30 AM – 12:45 PM (Sat)</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-slate-900">Senior Secondary (Grades XI – XII)</td>
                    <td className="px-6 py-4">Monday – Friday <span className="block text-[10px] text-slate-400">Half day on Saturday</span></td>
                    <td className="px-6 py-4">8:30 AM – 3:30 PM <span className="block text-[10px] text-slate-400">8:30 AM – 1:00 PM (Sat)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 bg-amber-50 border border-amber-200 text-amber-800 text-xs p-4 rounded-lg flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold">Important Note:</strong> Second and Fourth Saturdays of every month are declared holidays for all grade levels. Visiting hours for meeting the Principal are strictly between 2:30 PM and 3:30 PM (on prior appointment only).
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4: Co-Curricular & House System */}
      <section className="py-16 bg-supporting border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-accent text-xs font-bold uppercase tracking-wider font-sans">Student Integration</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">The House System</h2>
              <p className="text-slate-600 text-sm mt-3">
                To foster healthy competition, collaboration, and sportsmanship, students are divided into four houses, named after historical visionaries.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* House 1: Vinci */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 text-center space-y-3 shadow-sm">
                <div className="w-12 h-12 bg-red-600 rounded-full mx-auto flex items-center justify-center text-white font-bold font-serif text-sm">V</div>
                <h4 className="font-serif font-bold text-slate-900">Vinci House</h4>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider text-red-600">Red House • Innovation</p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Focuses on creativity, arts, writing, and design, inspired by Leonardo da Vinci.
                </p>
              </div>

              {/* House 2: Newton */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 text-center space-y-3 shadow-sm">
                <div className="w-12 h-12 bg-blue-700 rounded-full mx-auto flex items-center justify-center text-white font-bold font-serif text-sm">N</div>
                <h4 className="font-serif font-bold text-slate-900">Newton House</h4>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider text-blue-700">Blue House • Logic</p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Focuses on mathematical reasoning, coding, physics, and chess, inspired by Isaac Newton.
                </p>
              </div>

              {/* House 3: Tagore */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 text-center space-y-3 shadow-sm">
                <div className="w-12 h-12 bg-emerald-700 rounded-full mx-auto flex items-center justify-center text-white font-bold font-serif text-sm">T</div>
                <h4 className="font-serif font-bold text-slate-900">Tagore House</h4>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider text-emerald-700">Green House • Expression</p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Focuses on literature, debates, drama, music, and humanities, inspired by Rabindranath Tagore.
                </p>
              </div>

              {/* House 4: Raman */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 text-center space-y-3 shadow-sm">
                <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto flex items-center justify-center text-white font-bold font-serif text-sm">R</div>
                <h4 className="font-serif font-bold text-slate-900">Raman House</h4>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider text-yellow-600">Yellow House • Inquiry</p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Focuses on active laboratory investigations, environmental studies, and geography, inspired by C.V. Raman.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
