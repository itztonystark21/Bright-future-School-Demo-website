"use client";

import { useState } from "react";
import Image from "next/image";
import { Grid, Eye } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface GalleryItem {
  id: number;
  title: string;
  category: "campus" | "academics" | "labs" | "sports";
  src: string;
  desc: string;
}

export default function Gallery() {
  const [filter, setFilter] = useState<"all" | "campus" | "academics" | "labs" | "sports">("all");

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Main Campus Entrance",
      category: "campus",
      src: "/images/campus_hero.jpg",
      desc: "Beautiful brick and glass main administrative building with manicured front lawns."
    },
    {
      id: 2,
      title: "Interactive Classroom",
      category: "academics",
      src: "/images/classroom.jpg",
      desc: "A group of middle-school students learning using interactive smart whiteboards."
    },
    {
      id: 3,
      title: "Science Experiments",
      category: "labs",
      src: "/images/science_lab.jpg",
      desc: "Senior students carrying out volumetric titrations and physics experiments."
    },
    {
      id: 4,
      title: "Inter-House Football Match",
      category: "sports",
      src: "/images/sports.jpg",
      desc: "Newton House playing sports during the school's annual athletic meet."
    },
    {
      id: 5,
      title: "Central Library Study Session",
      category: "academics",
      src: "/images/library.jpg",
      desc: "Quiet study hours for research, catalog search, and general reading."
    }
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#0a2540] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">Photo Gallery</h1>
            <p className="text-slate-300 text-sm mt-3 max-w-2xl font-sans leading-relaxed">
              Explore school life, physical infra, classroom learning, and sports field competitive sprints.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Filter & Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-6 font-sans text-xs">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full border transition-all font-semibold ${
                filter === "all"
                  ? "bg-accent border-accent text-white"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              All Images
            </button>
            <button
              onClick={() => setFilter("campus")}
              className={`px-4 py-2 rounded-full border transition-all font-semibold ${
                filter === "campus"
                  ? "bg-accent border-accent text-white"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              Campus & Buildings
            </button>
            <button
              onClick={() => setFilter("academics")}
              className={`px-4 py-2 rounded-full border transition-all font-semibold ${
                filter === "academics"
                  ? "bg-accent border-accent text-white"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              Academics & Library
            </button>
            <button
              onClick={() => setFilter("labs")}
              className={`px-4 py-2 rounded-full border transition-all font-semibold ${
                filter === "labs"
                  ? "bg-accent border-accent text-white"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              Science & Tech Labs
            </button>
            <button
              onClick={() => setFilter("sports")}
              className={`px-4 py-2 rounded-full border transition-all font-semibold ${
                filter === "sports"
                  ? "bg-accent border-accent text-white"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              Sports & Athletics
            </button>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <ScrollReveal key={item.id}>
                <div className="group bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <Image 
                      src={item.src} 
                      alt={item.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 text-primary p-2.5 rounded-full shadow">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-serif font-bold text-slate-900 text-base">{item.title}</h3>
                      <span className="text-[9px] uppercase tracking-wider font-bold bg-slate-100 text-primary border border-slate-200 px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed font-sans">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Callout */}
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-lg text-center max-w-xl mx-auto space-y-3 font-sans text-xs text-slate-600">
            <h4 className="font-serif font-bold text-sm text-slate-900">Are you a parent searching for academic albums?</h4>
            <p>
              Due to privacy rules, daily class group photos and athletic achievements are maintained behind the secure Parent Portal. Please log in with your admission number to view weekly class updates.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
