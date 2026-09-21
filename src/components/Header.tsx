"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BookOpen, Bot, Code2, FlaskConical, Home, Menu, X } from "lucide-react";
import { LANGUAGES, isLanguage, getFirstLessonHref, LANG_META } from "@/data/index";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const parts = pathname.split("/");
  const rawLang = parts[1];
  const lang = isLanguage(rawLang) ? rawLang : null;
  const base = lang ?? "python";

  const navLinks = [
    { href: "/", label: "Home", icon: Home, match: (p: string) => p === "/" },
    { href: getFirstLessonHref(base), label: "Learn", icon: BookOpen, match: (p: string) => p.startsWith(`/${base}/learn`) },
    { href: `/${base}/practice`, label: "Practice", icon: Code2, match: (p: string) => p === `/${base}/practice` },
    { href: `/${base}/automation`, label: `${LANG_META[base].label} Automation`, icon: Bot, match: (p: string) => p === `/${base}/automation` },
    { href: `/${base}/quiz`, label: "Quiz", icon: FlaskConical, match: (p: string) => p === `/${base}/quiz` },
  ];

  const isActive = (match: (p: string) => boolean) => match(pathname);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 6 4 6 4v3h6v1H4s-4-.5-4 4.5S4 19 4 19h1.5v-3.5S5.5 11 10 11h2c4 0 4.5-3 4.5-3V4s-.5-2-4.5-2z" />
                <circle cx="8.5" cy="5.5" r="1" fill="white" />
              </svg>
            </div>
            <span className="text-lg font-bold text-gray-900 hidden sm:block">
              Code<span className="text-blue-600">Learn</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.match);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                    active
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={16} />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Language switcher */}
          <div className="hidden md:flex items-center gap-1 bg-gray-100 rounded-full p-1">
            {LANGUAGES.map((l) => {
              const active = lang === l;
              const color =
                l === "python"
                  ? active
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-blue-700"
                  : active
                    ? "bg-yellow-500 text-yellow-950"
                    : "text-gray-600 hover:text-yellow-700";
              return (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition ${color}`}
                >
                  {l === "python" ? "🐍 Python" : "⚡ JavaScript"}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-3 border-t border-gray-100 pt-2">
            <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1 mb-2 mx-1">
              {LANGUAGES.map((l) => {
                const active = lang === l;
                const color =
                  l === "python"
                    ? active
                      ? "bg-blue-600 text-white"
                      : "text-gray-600"
                    : active
                      ? "bg-yellow-500 text-yellow-950"
                      : "text-gray-600";
                return (
                  <Link
                    key={l}
                    href={`/${l}`}
                    onClick={() => setMobileOpen(false)}
                    className={`flex-1 text-center px-3 py-1.5 rounded-full text-xs font-semibold transition ${color}`}
                  >
                    {l === "python" ? "🐍 Python" : "⚡ JavaScript"}
                  </Link>
                );
              })}
            </div>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.match);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 text-sm rounded-lg mx-1 ${
                    active ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={18} />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}