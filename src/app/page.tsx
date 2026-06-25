"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Calendar, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Users, 
  Trophy, 
  ShieldCheck,
  CheckCircle,
  FileText,
  School
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* ========================================================================= */}
      {/* SECTION 1: HERO                                                          */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[550px] lg:h-[620px] bg-slate-900 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/campus_hero.jpg"
            alt="Bright Future Public School Campus"
            fill
            priority
            className="object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/40 px-3 py-1 rounded-full text-xs font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              Admissions Open for Academic Year 2026-27
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Empowering Minds, <br />
              <span className="text-accent">Shaping Tomorrow</span>
            </h1>
            
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl font-sans leading-relaxed">
              Bright Future Public School offers a nurturing, CBSE-aligned academic environment in Bengaluru. We inspire students to achieve excellence through active learning, values, and all-round growth.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                href="/admissions"
                className="bg-accent hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded shadow transition-all flex items-center gap-2 group text-sm md:text-base"
              >
                Apply for Admission
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded border border-white/30 backdrop-blur-sm transition-all text-sm md:text-base"
              >
                Visit Campus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: PRINCIPAL'S MESSAGE                                            */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Portrait */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-[280px] h-[370px] rounded-lg overflow-hidden shadow-lg border-4 border-slate-100 bg-slate-50">
                  <Image 
                    src="/images/principal.jpg"
                    alt="Dr. Elena Vance, Principal"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4 text-white">
                    <p className="font-serif text-sm font-semibold">Dr. Elena Vance</p>
                    <p className="text-[10px] text-slate-300">M.A., Ph.D. in Education • Principal</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Message */}
              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-1">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest font-sans">Leadership & Vision</span>
                  <h2 className="text-3xl font-bold font-serif text-slate-900">Message from the Principal</h2>
                </div>
                
                <div className="text-slate-600 space-y-4 text-sm md:text-base leading-relaxed font-sans">
                  <p className="italic font-serif text-slate-800 text-lg leading-relaxed border-l-4 border-accent pl-4">
                    "At Bright Future Public School, we believe that education is not merely the acquisition of knowledge, but a lifelong journey of character development, intellectual inquiry, and social responsibility."
                  </p>
                  <p>
                    Dear Parents and Students, it is my privilege to welcome you to our community. Our goal is to provide a balanced and rigorous academic foundation that fosters critical thinking, problem-solving, and a genuine love for learning. We implement child-centric methodologies that enable each child to reach their full potential.
                  </p>
                  <p>
                    Together with our dedicated faculty, cooperative parents, and supportive school board, we strive to create an atmosphere where children feel safe, respected, and motivated. We look forward to partnering with you to help our children build a bright, values-driven future.
                  </p>
                </div>

                <div className="pt-2">
                  <Link 
                    href="/about" 
                    className="text-primary hover:text-accent font-semibold text-sm flex items-center gap-1 group"
                  >
                    Read More About Our Leadership
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: ABOUT THE SCHOOL                                               */}
      {/* ========================================================================= */}
      <section className="py-16 bg-supporting">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent text-xs font-bold uppercase tracking-widest font-sans">Overview</span>
              <h2 className="text-3xl font-bold font-serif text-slate-900 mt-1">About Our Institution</h2>
              <p className="text-slate-600 text-sm mt-3 font-sans leading-relaxed">
                Founded in 2012, Bright Future Public School is a leading CBSE co-educational institution. We merge academic discipline with modern, child-centered teaching methods.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Core Vision */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200/80 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="bg-slate-100 text-primary p-3 rounded-full w-fit">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">Academic Excellence</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    A comprehensive CBSE curriculum supported by structured lesson plans, diagnostic testing, and individualized academic assistance for every student.
                  </p>
                </div>
                <Link href="/about" className="text-accent hover:text-primary font-semibold text-xs mt-6 flex items-center gap-1">
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 2: Holistic Growth */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200/80 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="bg-slate-100 text-primary p-3 rounded-full w-fit">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">Student Development</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Focus on life-skills, values, emotional resilience, leadership, and public speaking through active student clubs, house systems, and assemblies.
                  </p>
                </div>
                <Link href="/academics" className="text-accent hover:text-primary font-semibold text-xs mt-6 flex items-center gap-1">
                  Read about Approach <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 3: Credibility & Values */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200/80 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="bg-slate-100 text-primary p-3 rounded-full w-fit">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">Values & Safety</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Safe environment with active CCTV monitoring, verified school transport systems, and a value-based ethos that fosters respect and kindness.
                  </p>
                </div>
                <Link href="/admissions" className="text-accent hover:text-primary font-semibold text-xs mt-6 flex items-center gap-1">
                  View Safety Standards <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 bg-[#0a2540] text-white p-8 rounded-xl shadow-md">
              <div className="text-center space-y-1">
                <p className="text-3xl md:text-4xl font-serif font-bold text-accent">1400+</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Active Students</p>
              </div>
              <div className="text-center space-y-1 border-l border-slate-800">
                <p className="text-3xl md:text-4xl font-serif font-bold text-accent">85+</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Expert Teachers</p>
              </div>
              <div className="text-center space-y-1 border-l border-slate-800">
                <p className="text-3xl md:text-4xl font-serif font-bold text-accent">1:18</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Teacher-Student Ratio</p>
              </div>
              <div className="text-center space-y-1 border-l border-slate-800">
                <p className="text-3xl md:text-4xl font-serif font-bold text-accent">100%</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">CBSE Board Success</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: ACADEMICS                                                      */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Academics Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-1">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest font-sans">Curriculum</span>
                  <h2 className="text-3xl font-bold font-serif text-slate-900">Academic Programs</h2>
                  <p className="text-slate-600 text-sm mt-3 font-sans leading-relaxed">
                    We offer a comprehensive educational pathway affiliated to the Central Board of Secondary Education (CBSE), focusing on deep concept clarity and continuous internal evaluation.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-4 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100">
                    <div className="bg-slate-100 text-primary p-2 rounded-lg shrink-0 mt-1">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-slate-900">Primary School (Grades I - V)</h4>
                      <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                        Strong emphasis on reading comprehension, communicative English, foundational mathematics, and experiential environmental studies.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100">
                    <div className="bg-slate-100 text-primary p-2 rounded-lg shrink-0 mt-1">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-slate-900">Middle School (Grades VI - VIII)</h4>
                      <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                        Transitioning to advanced science topics, secondary language options, computer programming fundamentals, and project-based assignments.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100">
                    <div className="bg-slate-100 text-primary p-2 rounded-lg shrink-0 mt-1">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-slate-900">Secondary & Sr. Secondary (Grades IX - XII)</h4>
                      <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                        Focused board examination preparation under CBSE guidelines, offering Science, Commerce, and Humanities streams with skilled faculty mentorship.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link 
                    href="/academics" 
                    className="bg-[#0a2540] hover:bg-slate-800 text-white text-sm font-semibold px-6 py-3 rounded shadow transition-all inline-flex items-center gap-1.5"
                  >
                    View Academic Calendar
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Callout (Classroom Image) */}
              <div className="lg:col-span-5">
                <div className="relative h-[360px] rounded-lg overflow-hidden shadow-lg border border-slate-200">
                  <Image 
                    src="/images/classroom.jpg"
                    alt="Classroom learning"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/10" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: FACILITIES                                                     */}
      {/* ========================================================================= */}
      <section className="py-16 bg-supporting border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div className="space-y-1">
                <span className="text-accent text-xs font-bold uppercase tracking-widest font-sans">Infrastructure</span>
                <h2 className="text-3xl font-bold font-serif text-slate-900 mt-1">Campus Facilities</h2>
                <p className="text-slate-600 text-sm font-sans max-w-xl">
                  Bright Future is equipped with modern and clean facilities that support high-standard learning, scientific investigation, and healthy sports activities.
                </p>
              </div>
              <Link 
                href="/facilities" 
                className="text-accent hover:text-primary font-semibold text-sm mt-4 md:mt-0 flex items-center gap-1 group whitespace-nowrap"
              >
                Explore Facilities
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Facility 1: Classrooms */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image src="/images/classroom.jpg" alt="Smart Classrooms" fill className="object-cover" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-serif font-bold text-lg text-slate-900">Smart Classrooms</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Every classroom features interactive whiteboards, high-speed internet connectivity, ergonomic desks, and natural lighting to maximize student comfort.
                  </p>
                </div>
              </div>

              {/* Facility 2: Science Labs */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image src="/images/science_lab.jpg" alt="Science Labs" fill className="object-cover" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-serif font-bold text-lg text-slate-900">Modern Science Labs</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Dedicated physics, chemistry, and biology laboratories equipped with high-grade testing equipment, ventilation hoods, and safety systems.
                  </p>
                </div>
              </div>

              {/* Facility 3: Sports Field */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image src="/images/sports.jpg" alt="Sports Grounds" fill className="object-cover" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-serif font-bold text-lg text-slate-900">Sports & Athletics</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    A spacious green sports field for soccer, cricket nets, basketball courts, and indoor facilities for table tennis, chess, and yoga training.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: ACHIEVEMENTS                                                   */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent text-xs font-bold uppercase tracking-widest font-sans">Honors & Accolades</span>
              <h2 className="text-3xl font-bold font-serif text-slate-900 mt-1">Our Recent Achievements</h2>
              <p className="text-slate-600 text-sm mt-3 font-sans">
                Our students continuously stand out in regional and national-level competitions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Achievement 1 */}
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200/60 flex items-start gap-4">
                <div className="bg-yellow-50 text-yellow-600 p-3 rounded-full shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-base text-slate-900">100% Board Pass Rate</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Bright Future recorded a 100% pass rate in CBSE Class X and XII exams, with 42% of students scoring above 90% marks.
                  </p>
                </div>
              </div>

              {/* Achievement 2 */}
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200/60 flex items-start gap-4">
                <div className="bg-slate-100 text-blue-700 p-3 rounded-full shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-base text-slate-900">Science Exhibition Winners</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Our Senior Science Club won 1st Place in the South-Zone CBSE Science Exhibition with their solar-powered water filtration prototype.
                  </p>
                </div>
              </div>

              {/* Achievement 3 */}
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200/60 flex items-start gap-4">
                <div className="bg-green-50 text-green-600 p-3 rounded-full shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-base text-slate-900">Under-16 Sports Gold</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    The boys' football squad clinched Gold at the Bengaluru Inter-School Athletic Meet, showcasing sportsmanship and tactical skills.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: NEWS & EVENTS                                                  */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div className="space-y-1">
                <span className="text-accent text-xs font-bold uppercase tracking-widest font-sans">Updates</span>
                <h2 className="text-3xl font-bold font-serif text-slate-900 mt-1">News & Announcements</h2>
                <p className="text-slate-600 text-sm font-sans max-w-xl">
                  Stay updated with our upcoming events, school terms, holidays, and student celebrations.
                </p>
              </div>
              <Link 
                href="/news" 
                className="text-accent hover:text-primary font-semibold text-sm mt-4 md:mt-0 flex items-center gap-1 group whitespace-nowrap"
              >
                View All News
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Event 1 */}
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>June 24, 2026</span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-slate-900 hover:text-accent transition-colors">
                    <Link href="/news">Investiture Ceremony 2026</Link>
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Our student council cabinet will be sworn in on Monday in the main auditorium. Chief Guest IPS Officer Mr. R. Prasad will preside.
                  </p>
                </div>
                <div className="border-t border-slate-100 px-6 py-3 bg-slate-50 text-xs">
                  <span className="font-semibold text-primary">Location: School Auditorium</span>
                </div>
              </div>

              {/* Event 2 */}
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>July 15, 2026</span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-slate-900 hover:text-accent transition-colors">
                    <Link href="/news">Parent-Teacher Conference (PTM 1)</Link>
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    First mandatory parent-teacher meet for Term 1 progress analysis. Grade booklets will be distributed. Individual timing slots will be emailed.
                  </p>
                </div>
                <div className="border-t border-slate-100 px-6 py-3 bg-slate-50 text-xs">
                  <span className="font-semibold text-primary">Time: 9:00 AM – 1:00 PM</span>
                </div>
              </div>

              {/* Event 3 */}
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>August 08, 2026</span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-slate-900 hover:text-accent transition-colors">
                    <Link href="/news">Inter-School Science Spark Fest</Link>
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    We are hosting 20 regional schools for our annual tech and science showcase. Projects across AI, IoT, and green energy will be featured.
                  </p>
                </div>
                <div className="border-t border-slate-100 px-6 py-3 bg-slate-50 text-xs">
                  <span className="font-semibold text-primary">Registration Deadline: July 28</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: GALLERY PREVIEW                                                */}
      {/* ========================================================================= */}
      <section className="py-16 bg-supporting">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div className="space-y-1">
                <span className="text-accent text-xs font-bold uppercase tracking-widest font-sans">Photos</span>
                <h2 className="text-3xl font-bold font-serif text-slate-900 mt-1">Gallery Highlights</h2>
                <p className="text-slate-600 text-sm font-sans max-w-xl">
                  Glimpses of daily academic life, assemblies, scientific activities, and athletic programs.
                </p>
              </div>
              <Link 
                href="/gallery" 
                className="text-accent hover:text-primary font-semibold text-sm mt-4 md:mt-0 flex items-center gap-1 group whitespace-nowrap"
              >
                View Full Gallery
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pic 1 */}
              <div className="relative h-60 rounded-lg overflow-hidden group shadow border border-slate-200 bg-slate-50">
                <Image src="/images/campus_hero.jpg" alt="Campus Building" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs text-white font-semibold">Campus Main Building</span>
                </div>
              </div>

              {/* Pic 2 */}
              <div className="relative h-60 rounded-lg overflow-hidden group shadow border border-slate-200 bg-slate-50">
                <Image src="/images/classroom.jpg" alt="Modern Classrooms" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs text-white font-semibold">Interactive Smart Classroom</span>
                </div>
              </div>

              {/* Pic 3 */}
              <div className="relative h-60 rounded-lg overflow-hidden group shadow border border-slate-200 bg-slate-50">
                <Image src="/images/science_lab.jpg" alt="Science Laboratory" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs text-white font-semibold">Students in Biology Lab</span>
                </div>
              </div>

              {/* Pic 4 */}
              <div className="relative h-60 rounded-lg overflow-hidden group shadow border border-slate-200 bg-slate-50">
                <Image src="/images/library.jpg" alt="Central Library" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs text-white font-semibold">Quiet Study Hours (Central Library)</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: ADMISSIONS CTA                                                 */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#0a2540] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ScrollReveal>
            <div className="bg-white/20 border border-white/30 w-fit mx-auto px-4 py-1 rounded-full text-xs font-semibold text-white mb-2">
              Registration Open: Grades Nursery to XI
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold font-serif">
              Begin Your Child’s Learning Journey
            </h2>
            
            <p className="text-slate-300 text-sm max-w-xl mx-auto font-sans leading-relaxed">
              Plan a physical tour to view our classrooms and laboratory blocks. Online registration for academic assessments is open. Download our school prospectus below.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                href="/admissions"
                className="bg-accent hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded shadow transition-all text-sm"
              >
                Apply Online Now
              </Link>
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); alert("The prospectus PDF is being prepared for the current academic session. Please request a physical brochure at the reception."); }}
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded border border-slate-700 transition-all text-sm flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4 text-accent" />
                Download Prospectus
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
