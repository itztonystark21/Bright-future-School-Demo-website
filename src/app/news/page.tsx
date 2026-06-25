"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, FileText, Bell, MapPin, Clock, Search, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface Circular {
  id: number;
  date: string;
  title: string;
  reference: string;
  category: "academic" | "general" | "exams";
}

interface EventItem {
  id: number;
  date: string;
  month: string;
  title: string;
  time: string;
  location: string;
  desc: string;
}

export default function NewsAndEvents() {
  const [activeTab, setActiveTab] = useState<"all" | "circulars" | "events">("all");
  const [searchTerm, setSearchTerm] = useState("");

  const circularsList: Circular[] = [
    {
      id: 1,
      date: "June 18, 2026",
      title: "Revised CBSE Uniform Guidelines for Senior Secondary (Grades XI-XII)",
      reference: "Ref: BFPS/ADMIN/2026/045",
      category: "general"
    },
    {
      id: 2,
      date: "June 14, 2026",
      title: "Diagnostic Assessment Test Schedule for Mid-Term Registrations",
      reference: "Ref: BFPS/ACAD/2026/039",
      category: "academic"
    },
    {
      id: 3,
      date: "June 05, 2026",
      title: "Class X & XII Board Examination Marks Card collection register open",
      reference: "Ref: BFPS/EXAM/2026/012",
      category: "exams"
    },
    {
      id: 4,
      date: "May 28, 2026",
      title: "First Term School Fees installment notice & payment portal instructions",
      reference: "Ref: BFPS/FEE/2026/008",
      category: "general"
    }
  ];

  const eventsList: EventItem[] = [
    {
      id: 1,
      date: "24",
      month: "JUN",
      title: "Investiture Ceremony 2026",
      time: "9:00 AM – 11:30 AM",
      location: "Main School Auditorium",
      desc: "Swearing-in ceremony for student captains, vice-captains, and house leaders with Mr. R. Prasad presiding."
    },
    {
      id: 2,
      date: "15",
      month: "JUL",
      title: "Parent-Teacher Conference (PTM 1)",
      time: "9:00 AM – 1:00 PM",
      location: "Respective Classrooms",
      desc: "Individual teacher slots will be shared to discuss performance trends, student homework logs, and term progress."
    },
    {
      id: 3,
      date: "08",
      month: "AUG",
      title: "Inter-School Science Spark Fest",
      time: "8:30 AM – 4:00 PM",
      location: "Physics and Chemistry Lab Blocks",
      desc: "Annual science model contest inviting over 20 schools. Theme: Solar innovation and green transport systems."
    },
    {
      id: 4,
      date: "29",
      month: "AUG",
      title: "National Sports Day Athletics Meet",
      time: "8:00 AM – 2:00 PM",
      location: "Main Campus Green Field",
      desc: "Inter-house track sprints, high jump, shot put, and parent-teacher tug-of-war contests."
    }
  ];

  // Filtering logic
  const filteredCirculars = circularsList.filter(circ => 
    circ.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    circ.reference.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredEvents = eventsList.filter(evt =>
    evt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    evt.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#0a2540] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">News, Notice Board & Events</h1>
            <p className="text-slate-300 text-sm mt-3 max-w-2xl font-sans leading-relaxed">
              Read current academic notices, administrative circulars, and view our calendar dates.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Notice Board Area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Navigation Tabs and Search */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center border-b border-slate-200 pb-6">
            <div className="flex gap-2 font-sans text-xs shrink-0">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2.5 rounded font-semibold border ${
                  activeTab === "all"
                    ? "bg-[#0a2540] border-[#0a2540] text-white shadow-sm"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                All Announcements
              </button>
              <button
                onClick={() => setActiveTab("circulars")}
                className={`px-4 py-2.5 rounded font-semibold border ${
                  activeTab === "circulars"
                    ? "bg-[#0a2540] border-[#0a2540] text-white shadow-sm"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                Official Circulars
              </button>
              <button
                onClick={() => setActiveTab("events")}
                className={`px-4 py-2.5 rounded font-semibold border ${
                  activeTab === "events"
                    ? "bg-[#0a2540] border-[#0a2540] text-white shadow-sm"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                Upcoming Events
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:max-w-xs font-sans text-xs">
              <input
                type="text"
                placeholder="Search notice board..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-md pl-9 pr-3 py-2 text-slate-800 focus:outline-none focus:border-accent"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Notice Board Column (Circulars) */}
            {(activeTab === "all" || activeTab === "circulars") && (
              <div className={`${activeTab === "circulars" ? "lg:col-span-12" : "lg:col-span-6"} space-y-6`}>
                <div className="flex items-center gap-2 border-l-4 border-yellow-500 pl-3">
                  <Bell className="w-5 h-5 text-yellow-600" />
                  <h2 className="font-serif text-xl font-bold text-slate-900">Administrative Notice Board</h2>
                </div>

                <div className="divide-y divide-slate-100 border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
                  {filteredCirculars.length > 0 ? (
                    filteredCirculars.map((circ) => (
                      <div key={circ.id} className="p-5 hover:bg-slate-50 transition-colors space-y-2">
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="text-slate-400 font-sans">{circ.date}</span>
                          <span className="font-sans font-bold uppercase tracking-wider text-slate-400">{circ.reference}</span>
                        </div>
                        <h3 className="font-serif font-bold text-sm text-slate-900 hover:text-accent cursor-pointer">
                          {circ.title}
                        </h3>
                        <div className="flex justify-between items-center pt-1.5">
                          <span className="text-[9px] uppercase tracking-wider font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                            {circ.category}
                          </span>
                          <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); alert("File download requested. Standard PDF notice is being fetched from servers."); }}
                            className="text-accent hover:underline text-xs flex items-center gap-1 font-sans"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            Download PDF
                          </a>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="p-6 text-slate-500 text-xs text-center font-sans">No matching circulars found.</p>
                  )}
                </div>
              </div>
            )}

            {/* Events Column */}
            {(activeTab === "all" || activeTab === "events") && (
              <div className={`${activeTab === "events" ? "lg:col-span-12" : "lg:col-span-6"} space-y-6`}>
                <div className="flex items-center gap-2 border-l-4 border-accent pl-3">
                  <Calendar className="w-5 h-5 text-accent" />
                  <h2 className="font-serif text-xl font-bold text-slate-900">Academic & Activity Calendar</h2>
                </div>

                <div className="space-y-4">
                  {filteredEvents.length > 0 ? (
                    filteredEvents.map((evt) => (
                      <div key={evt.id} className="flex gap-4 p-4 border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all bg-white shadow-sm">
                        {/* Date badge */}
                        <div className="bg-[#0a2540] text-white rounded w-16 h-16 flex flex-col justify-center items-center shrink-0 border-b-4 border-accent font-sans">
                          <span className="text-xl font-bold leading-none">{evt.date}</span>
                          <span className="text-[9px] uppercase font-semibold mt-0.5 text-sky-200 tracking-wider">{evt.month}</span>
                        </div>
                        {/* Event Details */}
                        <div className="space-y-1.5">
                          <h3 className="font-serif font-bold text-sm text-slate-900 leading-tight">{evt.title}</h3>
                          <p className="text-slate-500 text-[11px] font-sans leading-relaxed">{evt.desc}</p>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-slate-400 font-sans pt-1">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-accent" /> {evt.time}</span>
                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-accent" /> {evt.location}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="p-6 text-slate-500 text-xs text-center border border-slate-100 rounded bg-slate-50 font-sans">No matching events scheduled.</p>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
