import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";
import SchoolHeader from "@/components/SchoolHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bright Future Public School - CBSE Board Bengaluru",
  description: "Welcome to Bright Future Public School, a modern CBSE school in Bengaluru. Providing quality education, state-of-the-art facilities, and a supportive environment for kids to learn and grow.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800">
        <SchoolHeader />
        <Navbar />
        <main className="flex-grow flex flex-col bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
