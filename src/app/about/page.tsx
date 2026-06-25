"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ShieldCheck, Target, Award, Milestone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#0a2540] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">About Our School</h1>
            <p className="text-slate-300 text-sm mt-3 max-w-2xl font-sans leading-relaxed">
              Bright Future Public School has been nurturing scholars, building characters, and fostering excellence in Bengaluru since 2012.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content: History & Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative h-[380px] rounded-lg overflow-hidden shadow border border-slate-200 bg-slate-50">
                <Image 
                  src="/images/campus_hero.jpg" 
                  alt="School Campus Front View" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-accent text-xs font-bold uppercase tracking-wider font-sans">Our Journey</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-1">History & Heritage</h2>
              <div className="text-slate-600 text-sm leading-relaxed font-sans space-y-4">
                <p>
                  Bright Future Public School was founded in 2012 by the Bright Future Educational Trust with a vision to make quality education accessible to families in the developing eastern corridors of Bengaluru. We started with only 120 students in a modest facility, under the core principle of value-based learning.
                </p>
                <p>
                  Over the past decade, our dedication to high academic standards, teacher development, and robust infrastructure led to full CBSE accreditation (Nursery to Class XII). Today, the school is home to over 1,400 students and 85 qualified teachers, recognized as a premier destination for holistic learning.
                </p>
                <p>
                  We aim to equip students with critical analysis, problem-solving skills, and a global outlook, while ensuring they remain deeply rooted in moral and civic values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, and Values Grid */}
      <section className="py-16 bg-supporting border-t border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Panel */}
            <ScrollReveal>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 h-full space-y-4">
                <div className="bg-slate-100 text-primary p-3.5 rounded-full w-fit">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-sans">
                  To be an exemplary center of learning that nurtures intellectually curious, emotionally resilient, and morally upright global citizens who are prepared to contribute positively to society.
                </p>
              </div>
            </ScrollReveal>

            {/* Mission Panel */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 h-full space-y-4">
                <div className="bg-slate-100 text-primary p-3.5 rounded-full w-fit">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900">Our Mission</h3>
                <div className="text-slate-600 text-sm font-sans space-y-2">
                  <p>• Deliver a balanced, child-centric CBSE academic curriculum that prioritizes concept comprehension.</p>
                  <p>• Offer extensive sports, science, arts, and technology resources to promote holistic development.</p>
                  <p>• Cultivate values of empathy, integrity, self-discipline, and civic consciousness in daily life.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-accent text-xs font-bold uppercase tracking-wider font-sans">Guiding Principles</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">Our Core Values</h2>
              <p className="text-slate-600 text-sm mt-3">These values define the character of our school community and guide our decisions.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Value 1 */}
              <div className="p-6 border border-slate-100 rounded-lg hover:border-slate-200 transition-colors space-y-3 text-center">
                <div className="text-accent bg-sky-50 rounded-full p-2.5 w-fit mx-auto">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-slate-900">Integrity</h4>
                <p className="text-slate-500 text-xs font-sans leading-relaxed">
                  We emphasize honesty, moral consistency, and taking responsibility for one's actions.
                </p>
              </div>

              {/* Value 2 */}
              <div className="p-6 border border-slate-100 rounded-lg hover:border-slate-200 transition-colors space-y-3 text-center">
                <div className="text-accent bg-sky-50 rounded-full p-2.5 w-fit mx-auto">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-slate-900">Excellence</h4>
                <p className="text-slate-500 text-xs font-sans leading-relaxed">
                  We encourage students to achieve their personal best in academics, athletics, and the arts.
                </p>
              </div>

              {/* Value 3 */}
              <div className="p-6 border border-slate-100 rounded-lg hover:border-slate-200 transition-colors space-y-3 text-center">
                <div className="text-accent bg-sky-50 rounded-full p-2.5 w-fit mx-auto">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-slate-900">Community</h4>
                <p className="text-slate-500 text-xs font-sans leading-relaxed">
                  Fostering teamwork, collaborative parent relationships, and active local community engagement.
                </p>
              </div>

              {/* Value 4 */}
              <div className="p-6 border border-slate-100 rounded-lg hover:border-slate-200 transition-colors space-y-3 text-center">
                <div className="text-accent bg-sky-50 rounded-full p-2.5 w-fit mx-auto">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-slate-900">Respect</h4>
                <p className="text-slate-500 text-xs font-sans leading-relaxed">
                  Nurturing deep mutual respect for differences in ideas, cultures, backgrounds, and talents.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Affiliation Details and Disclosures */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 text-slate-600 text-xs font-sans">
          <h4 className="font-serif font-semibold text-sm text-slate-900">Affiliation & Board Recognition</h4>
          <p>
            Bright Future Public School is a private, un-aided co-educational school. Affiliated to the Central Board of Secondary Education (CBSE), New Delhi. Affiliation Number: <strong>830123</strong>. School Code: <strong>45678</strong>.
          </p>
          <div className="flex justify-center gap-6 pt-2 text-primary font-semibold">
            <Link href="/admissions" className="hover:underline">Admissions Policy</Link>
            <span>•</span>
            <Link href="/facilities" className="hover:underline">Infrastructure Details</Link>
            <span>•</span>
            <Link href="/contact" className="hover:underline">Office Location Map</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
