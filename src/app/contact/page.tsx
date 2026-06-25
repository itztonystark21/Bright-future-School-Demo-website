"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill out all required fields.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#0a2540] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="text-slate-300 text-sm mt-3 max-w-2xl font-sans leading-relaxed">
              Have questions regarding admission policies, school transport, or careers? Reach out to our administrative departments.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Contacts */}
            <div className="lg:col-span-5 space-y-8 font-sans">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold font-serif text-slate-900">Administrative Office</h2>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Please contact the reception for general queries, fee details, and application forms.
                </p>
              </div>

              {/* Address card */}
              <div className="flex gap-4 items-start border border-slate-100 p-5 rounded-lg bg-slate-50">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600 space-y-1">
                  <h4 className="font-serif font-bold text-slate-900 text-sm">School Address</h4>
                  <p className="leading-relaxed">
                    Bright Future Public School,<br />
                    Survey No. 42/1, Green Glen Layout,<br />
                    Outer Ring Road, Bengaluru,<br />
                    Karnataka - 560103, India
                  </p>
                </div>
              </div>

              {/* Contacts */}
              <div className="space-y-4">
                {/* General Query */}
                <div className="flex gap-4 items-center border border-slate-100 p-4 rounded-lg bg-slate-50">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <div className="text-xs text-slate-600">
                    <p className="font-semibold text-slate-900">Front Desk / Reception</p>
                    <p>+91 80 2345 6789 / 90</p>
                  </div>
                </div>

                {/* Admission inquiry */}
                <div className="flex gap-4 items-center border border-slate-100 p-4 rounded-lg bg-slate-50">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <div className="text-xs text-slate-600">
                    <p className="font-semibold text-slate-900">General Information</p>
                    <p className="break-all">info@brightfuture.edu.in</p>
                  </div>
                </div>

                {/* Admissions specific */}
                <div className="flex gap-4 items-center border border-slate-100 p-4 rounded-lg bg-slate-50">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <div className="text-xs text-slate-600">
                    <p className="font-semibold text-slate-900">Admissions Department</p>
                    <p className="break-all">admissions@brightfuture.edu.in</p>
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="flex gap-4 items-start border border-slate-100 p-5 rounded-lg bg-slate-50">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600 space-y-1">
                  <h4 className="font-serif font-bold text-slate-900 text-sm">Office Hours</h4>
                  <p>• Monday – Friday: 8:30 AM – 3:30 PM</p>
                  <p>• Saturday (1st & 3rd): 8:30 AM – 12:30 PM</p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact/Query Form */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-lg shadow-sm">
                  {isSubmitted ? (
                    <div className="text-center py-12 space-y-4 font-sans">
                      <div className="bg-emerald-50 text-emerald-600 p-4 rounded-full w-fit mx-auto border border-emerald-200">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-slate-900">Message Sent!</h3>
                      <p className="text-slate-600 text-xs leading-relaxed max-w-sm mx-auto">
                        Thank you for contacting us. Your query has been assigned reference ticket ID. Our administrative staff will reply to your email address or contact number within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                        }}
                        className="text-accent hover:underline text-xs font-semibold"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-1">
                        <h3 className="font-serif text-lg font-bold text-slate-900">Send an Online Message</h3>
                        <p className="text-slate-500 text-[10px] leading-relaxed font-sans">
                          Use the form below to email the administration office directly.
                        </p>
                      </div>

                      <div className="space-y-3 font-sans text-xs">
                        {/* Name */}
                        <div className="space-y-1">
                          <label className="block font-semibold text-slate-700">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-accent"
                          />
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <label className="block font-semibold text-slate-700">Email Address</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="email@example.com"
                              className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-accent"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="block font-semibold text-slate-700">Phone Number *</label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Contact number"
                              className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-accent"
                            />
                          </div>
                        </div>

                        {/* Subject */}
                        <div className="space-y-1">
                          <label className="block font-semibold text-slate-700">Subject</label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Admissions query, Careers, Transport request..."
                            className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-accent"
                          />
                        </div>

                        {/* Message */}
                        <div className="space-y-1">
                          <label className="block font-semibold text-slate-700">Your Message *</label>
                          <textarea
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            placeholder="Write your message here..."
                            className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-accent resize-none"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-accent hover:bg-sky-600 text-white font-semibold py-2.5 rounded shadow text-xs transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Map Embed Section (Mock visual overlay) */}
      <section className="h-96 w-full relative bg-slate-100 overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-[#f1f3f4] flex flex-col justify-center items-center p-4 text-center font-sans space-y-4">
          <MapPin className="w-10 h-10 text-rose-500 animate-bounce" />
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-slate-900 text-base">Bright Future Public School Campus</h3>
            <p className="text-slate-600 text-xs max-w-sm mx-auto">
              Outer Ring Road, Near Bellandur, Green Glen Layout, Bengaluru, Karnataka 560103.
            </p>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0a2540] hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded shadow transition-colors"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </div>
  );
}
