"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import automationQuestions from "@/data/automation-questions.json";
import automationEssentialsQuestions from "@/data/automation-essentials-questions.json";
import type { AutomationQuestion } from "@/data/types";
import { Bot, Eye, EyeOff, Sparkles, Lightbulb, Search } from "lucide-react";

const CodeEditor = dynamic(() => import("@/components/CodeEditor"), { ssr: false });

const questions: AutomationQuestion[] = [
  ...(automationQuestions.automation_testing_python_questions as AutomationQuestion[]),
  ...(automationEssentialsQuestions.automation_python_essentials as AutomationQuestion[]),
];
const priorities = ["All", "MUST KNOW", "HIGH VALUE", "MEDIUM", "LOW"] as const;

function EditorPlaceholder() {
  return (
    <div className="rounded-xl border border-gray-700 bg-[#282c34] flex items-center justify-center text-gray-400 text-sm" style={{ height: 160 }}>
      Loading code editor...
    </div>
  );
}

function QuestionCard({ q }: { q: AutomationQuestion }) {
  const [revealed, setRevealed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount code editor only on the client
    setMounted(true);
  }, []);

  const priorityStyles =
    q.priority === "MUST KNOW"
      ? "bg-rose-100 text-rose-700"
      : q.priority === "HIGH VALUE"
        ? "bg-amber-100 text-amber-700"
        : q.priority === "MEDIUM"
          ? "bg-sky-100 text-sky-700"
          : "bg-gray-200 text-gray-600";

  return (
    <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      {/* Card header */}
      <div className="border-b border-gray-100 px-6 py-4 flex flex-wrap items-center gap-2">
        <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 text-xs font-bold shrink-0">
          {q.id}
        </span>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${priorityStyles}`}>
          <Sparkles size={11} className="mr-1" />
          {q.priority}
        </span>
        <span className="inline-flex px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[11px] font-medium">
          {q.topic}
        </span>
      </div>

      <div className="px-6 py-5 space-y-4">
        {/* Question */}
        <div>
          <pre className="whitespace-pre-wrap break-words font-sans text-[15px] leading-relaxed text-gray-900">
            {q.question}
          </pre>
        </div>

        {/* Code editor */}
        <div>
          {mounted ? (
            <CodeEditor key={q.id} initialCode={`# Question ${q.id}: ${q.topic}\n# Write and run your Python code below\n`} height="160px" />
          ) : (
            <EditorPlaceholder />
          )}
        </div>

        {/* Show / Hide Answer */}
        {revealed ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xs text-emerald-600 font-semibold uppercase tracking-wider">Answer</div>
              <button
                type="button"
                onClick={() => setRevealed(false)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-xl transition cursor-pointer"
              >
                <EyeOff size={16} /> Hide Answer
              </button>
            </div>

            {/* Solution */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 mb-2">Solution</div>
              <pre className="bg-slate-900 text-emerald-100 text-[12.5px] leading-relaxed rounded-lg p-4 overflow-x-auto whitespace-pre-wrap break-words font-mono">
                {q.simple_solution}
              </pre>
            </div>

            {/* Why for automation */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
                <Sparkles size={12} /> Why it matters for automation
              </div>
              <p className="text-sm text-emerald-900 leading-relaxed">{q.why_for_automation}</p>
            </div>

            {/* Key takeaway */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 mb-2 flex items-center gap-1.5">
                <Lightbulb size={12} /> Key takeaway
              </div>
              <p className="text-sm text-blue-900 leading-relaxed">{q.key_takeaway}</p>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-xl transition cursor-pointer"
          >
            <Eye size={18} /> Show Answer
          </button>
        )}
      </div>
    </article>
  );
}

export default function AutomationPage() {
  const [filter, setFilter] = useState<(typeof priorities)[number]>("All");
  const [search, setSearch] = useState("");

  const mustKnow = questions.filter((q) => q.priority === "MUST KNOW").length;
  const highValue = questions.filter((q) => q.priority === "HIGH VALUE").length;
  const medium = questions.filter((q) => q.priority === "MEDIUM").length;
  const low = questions.filter((q) => q.priority === "LOW").length;

  const filtered = questions.filter((q) => {
    const priorityMatch = filter === "All" || q.priority === filter;
    const searchMatch =
      q.question.toLowerCase().includes(search.toLowerCase()) ||
      q.topic.toLowerCase().includes(search.toLowerCase());
    return priorityMatch && searchMatch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
          <Bot size={20} className="text-cyan-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Python for Automation Testing</h1>
          <p className="text-sm text-gray-500">
            {questions.length} interview-style Q&amp;A on the Python concepts every automation tester must know.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-cyan-600">{questions.length}</div>
          <div className="text-xs text-gray-500">Total</div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-rose-600">{mustKnow}</div>
          <div className="text-xs text-gray-500">MUST KNOW</div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-amber-600">{highValue}</div>
          <div className="text-xs text-gray-500">HIGH VALUE</div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-sky-600">{medium}</div>
          <div className="text-xs text-gray-500">MEDIUM</div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-gray-600">{low}</div>
          <div className="text-xs text-gray-500">LOW</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-500">Priority:</span>
            <div className="flex gap-1.5">
              {priorities.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setFilter(p)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                    filter === p
                      ? "bg-cyan-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions or topics..."
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {filtered.length === 0 && (
          <div className="text-center text-sm text-gray-400 py-10">
            No questions match your filters.
          </div>
        )}
        {filtered.map((q) => (
          <QuestionCard key={`${q.id}-${q.topic}`} q={q} />
        ))}
      </div>
    </div>
  );
}