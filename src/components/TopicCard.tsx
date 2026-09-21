"use client";

import Link from "next/link";
import { Topic } from "@/data/types";
import { Language } from "@/data/index";
import {
  Rocket, Code, Type, Calculator, GitBranch, List,
  FunctionSquare, BookOpen, Box, AlertTriangle, FileText, Puzzle,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  rocket: Rocket,
  code: Code,
  type: Type,
  calculator: Calculator,
  "git-branch": GitBranch,
  list: List,
  "function-square": FunctionSquare,
  "book-open": BookOpen,
  box: Box,
  "alert-triangle": AlertTriangle,
  "file-text": FileText,
  puzzle: Puzzle,
  "layout-grid": Sparkles,
  sparkles: Sparkles,
};

const levelBadge: Record<string, { bg: string; text: string }> = {
  beginner: { bg: "bg-emerald-100", text: "text-emerald-700" },
  intermediate: { bg: "bg-amber-100", text: "text-amber-700" },
  advanced: { bg: "bg-rose-100", text: "text-rose-700" },
};

export default function TopicCard({ topic, language = "python" }: { topic: Topic; language?: Language }) {
  const Icon = iconMap[topic.icon] || Code;
  const badge = levelBadge[topic.level] || levelBadge.beginner;

  return (
    <Link
      href={`/${language}/learn/${topic.slug}/${topic.lessons[0].slug}`}
      className="block group border border-gray-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-200 bg-white"
    >
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition">
          <Icon size={22} className="text-blue-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-[15px] font-semibold text-gray-900 group-hover:text-blue-600 transition truncate">
              {topic.title}
            </h3>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${badge.bg} ${badge.text}`}>
              {topic.level}
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-2 line-clamp-2">{topic.description}</p>
          <p className="text-[11px] font-medium text-gray-400">{topic.lessons.length} lessons</p>
        </div>
      </div>
    </Link>
  );
}