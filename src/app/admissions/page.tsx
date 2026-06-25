"use client";

import { useState } from "react";
import { ClipboardList, CheckCircle, FileText, UserPlus, Info, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    gradeApplied: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    address: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const gradesList = [
    "Nursery", "LKG", "UKG", 
    "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5",
    "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10",
    "Grade 11 (Science)", "Grade 11 (Commerce)", "Grade 12"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.parentPhone || !formData.gradeApplied) {
      alert("Please fill in all mandatory fields.");
      return;
    }
    // Simulate submission
    setIsSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#0a2540] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">Admissions</h1>
            <p className="text-slate-300 text-sm mt-3 max-w-2xl font-sans leading-relaxed">
              Enroll your child at Bright Future Public School. Read our guidelines, eligibility metrics, required documents, and submit an inquiry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content: Steps and Guidelines */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Guidelines & Criteria */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Steps to Apply */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-serif text-slate-900">Admission Process</h2>
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="flex gap-4 items-start">
                    <div className="bg-slate-100 text-primary font-bold p-3.5 rounded-full w-10 h-10 flex items-center justify-center shrink-0 text-sm border border-slate-200">
                      1
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif font-bold text-slate-900 text-sm">Admission Inquiry</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Submit the inquiry form on this page or visit the school reception to collect the prospectus and registration form.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4 items-start">
                    <div className="bg-slate-100 text-primary font-bold p-3.5 rounded-full w-10 h-10 flex items-center justify-center shrink-0 text-sm border border-slate-200">
                      2
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif font-bold text-slate-900 text-sm">Interaction / Assessment</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        An interaction session is scheduled for Kindergarten. For Grades 1 and above, a basic diagnostic assessment test is conducted in English, Math, and Science.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4 items-start">
                    <div className="bg-slate-100 text-primary font-bold p-3.5 rounded-full w-10 h-10 flex items-center justify-center shrink-0 text-sm border border-slate-200">
                      3
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif font-bold text-slate-900 text-sm">Document Submission</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Once cleared, submit the filled application form along with verified academic records and mandatory personal documents.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4 items-start">
                    <div className="bg-slate-100 text-primary font-bold p-3.5 rounded-full w-10 h-10 flex items-center justify-center shrink-0 text-sm border border-slate-200">
                      4
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif font-bold text-slate-900 text-sm">Fee Payment & Confirmation</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Secure the seat by paying the term admission fee within the stipulated dates. Class section details will be shared subsequently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Age Criteria Table */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-serif text-slate-900">Age Eligibility Criteria</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Calculated as of June 1st of the academic year for which admission is sought.
                </p>
                <div className="overflow-hidden border border-slate-200 rounded-lg shadow-sm">
                  <table className="w-full text-left text-xs font-sans">
                    <thead className="bg-[#0a2540] text-white">
                      <tr>
                        <th className="px-4 py-3 font-serif font-semibold">Grade</th>
                        <th className="px-4 py-3 font-serif font-semibold">Eligible Age Bracket</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-900">Nursery</td>
                        <td className="px-4 py-3">2 Years and 6 Months +</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-900">LKG</td>
                        <td className="px-4 py-3">3 Years and 6 Months +</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-900">UKG</td>
                        <td className="px-4 py-3">4 Years and 6 Months +</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-900">Grade 1</td>
                        <td className="px-4 py-3">5 Years and 6 Months +</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mandatory Documents Checklist */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-serif text-slate-900">Required Documents Checklist</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="flex gap-2 items-center">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Copy of Birth Certificate (Original for verification)</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Copy of Student Aadhaar Card</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Original Transfer Certificate (Grades II & above)</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Previous Academic Progress Report card</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>4 Recent passport-size photographs of Student</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>2 Passport-size photographs of Father & Mother</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Inquiry Form */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-lg shadow-sm">
                  {isSubmitted ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="bg-emerald-50 text-emerald-600 p-4 rounded-full w-fit mx-auto border border-emerald-200">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-slate-900">Inquiry Received!</h3>
                      <p className="text-slate-600 text-xs leading-relaxed font-sans max-w-sm mx-auto">
                        Thank you for your interest in Bright Future Public School. Our admissions coordinator will review your inquiry and contact you via phone (+91) or email within 2 business days.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            studentName: "",
                            dateOfBirth: "",
                            gradeApplied: "",
                            parentName: "",
                            parentEmail: "",
                            parentPhone: "",
                            address: "",
                            message: ""
                          });
                        }}
                        className="text-accent hover:underline text-xs font-semibold"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-1">
                        <h3 className="font-serif text-lg font-bold text-slate-900">Admission Inquiry Form</h3>
                        <p className="text-slate-500 text-[10px] leading-relaxed">
                          Fill out the details below to check seat availability and arrange assessment dates.
                        </p>
                      </div>

                      <div className="space-y-3 font-sans text-xs">
                        {/* Student Name */}
                        <div className="space-y-1">
                          <label className="block font-semibold text-slate-700">Student Full Name *</label>
                          <input
                            type="text"
                            name="studentName"
                            required
                            value={formData.studentName}
                            onChange={handleInputChange}
                            placeholder="Enter student's name"
                            className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-accent"
                          />
                        </div>

                        {/* Date of Birth & Grade */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <label className="block font-semibold text-slate-700">Date of Birth *</label>
                            <input
                              type="date"
                              name="dateOfBirth"
                              required
                              value={formData.dateOfBirth}
                              onChange={handleInputChange}
                              className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-accent"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="block font-semibold text-slate-700">Grade Applied *</label>
                            <select
                              name="gradeApplied"
                              required
                              value={formData.gradeApplied}
                              onChange={handleInputChange}
                              className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-accent"
                            >
                              <option value="">Select Grade</option>
                              {gradesList.map(g => (
                                <option key={g} value={g}>{g}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Parent Name */}
                        <div className="space-y-1">
                          <label className="block font-semibold text-slate-700">Father / Mother / Guardian Name *</label>
                          <input
                            type="text"
                            name="parentName"
                            required
                            value={formData.parentName}
                            onChange={handleInputChange}
                            placeholder="Enter parent's name"
                            className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-accent"
                          />
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <label className="block font-semibold text-slate-700">Email Address</label>
                            <input
                              type="email"
                              name="parentEmail"
                              value={formData.parentEmail}
                              onChange={handleInputChange}
                              placeholder="email@example.com"
                              className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-accent"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="block font-semibold text-slate-700">Contact Number *</label>
                            <input
                              type="tel"
                              name="parentPhone"
                              required
                              value={formData.parentPhone}
                              onChange={handleInputChange}
                              placeholder="10-digit number"
                              className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-accent"
                            />
                          </div>
                        </div>

                        {/* Address */}
                        <div className="space-y-1">
                          <label className="block font-semibold text-slate-700">Residential Address</label>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="Area, Bengaluru"
                            className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-accent"
                          />
                        </div>

                        {/* Message */}
                        <div className="space-y-1">
                          <label className="block font-semibold text-slate-700">Specific Queries (Optional)</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={3}
                            placeholder="Enter questions regarding fees, bus transport, etc."
                            className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-accent resize-none"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-accent hover:bg-sky-600 text-white font-semibold py-2.5 rounded shadow text-xs transition-colors font-sans mt-2"
                      >
                        Submit Admission Inquiry
                      </button>

                      <div className="flex gap-1.5 items-start text-[10px] text-slate-500 mt-2 bg-slate-100 p-2.5 rounded">
                        <Info className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>* Submission of this inquiry does not guarantee admission. Seat allocations depend on interaction and assessment clearing.</span>
                      </div>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
