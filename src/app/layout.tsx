import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeLearn - Learn Python & JavaScript",
  description: "Learn Python and JavaScript with interactive lessons, live code editors, hands-on practice, and quick quizzes. Free and beginner-friendly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-screen flex flex-col bg-slate-50 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200 bg-white py-6 text-center text-xs text-gray-400">
          <div className="max-w-7xl mx-auto px-4">
            Built for Python &amp; JavaScript learners. Inspired by W3Schools &amp; SoloLearn.
          </div>
        </footer>
      </body>
    </html>
  );
}