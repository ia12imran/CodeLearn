"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Code2, Search, Lightbulb, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { getPracticeExercises, LANG_META, Language } from "@/data/index";
import ClientOnly from "@/components/ClientOnly";

const CodeEditor = dynamic(() => import("@/components/CodeEditor"), { ssr: false });

export default function PracticeClient({ lang }: { lang: Language }) {
  const practiceExercises = getPracticeExercises(lang);
  const label = LANG_META[lang].label;

  const topics = ["All", ...Array.from(new Set(practiceExercises.map((e) => e.topic)))];
  const levels = ["All", "Easy", "Medium", "Hard"] as const;

  const [selected, setSelected] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [search, setSearch] = useState("");
  const [showSolution, setShowSolution] = useState(false);

  const filtered = practiceExercises.filter((ex) => {
    const topicMatch = selectedTopic === "All" || ex.topic === selectedTopic;
    const levelMatch = selectedLevel === "All" || ex.level === selectedLevel;
    const searchMatch = ex.title.toLowerCase().includes(search.toLowerCase()) || ex.description.toLowerCase().includes(search.toLowerCase());
    return topicMatch && levelMatch && searchMatch;
  });

  const exercise = filtered[Math.min(selected, filtered.length - 1)];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
          <Code2 size={20} className="text-green-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Practice Code</h1>
          <p className="text-sm text-gray-500">
            {practiceExercises.length} coding challenges to strengthen your {label} skills.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-6">
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Topic</label>
            <select
              value={selectedTopic}
              onChange={(e) => { setSelectedTopic(e.target.value); setSelected(0); }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {topics.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Difficulty</label>
            <select
              value={selectedLevel}
              onChange={(e) => { setSelectedLevel(e.target.value); setSelected(0); }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {levels.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Search</label>
            <div className="relative">
              <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setSelected(0); }}
                placeholder="Search exercises..."
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Exercise list */}
        <div className="lg:w-80 shrink-0">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Exercises ({filtered.length})
              </h3>
            </div>
            <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 22rem)" }}>
              {filtered.length === 0 && (
                <div className="p-6 text-center text-sm text-gray-400">
                  No exercises match your filters.
                </div>
              )}
              <div className="space-y-0.5 p-2">
                {filtered.map((ex, idx) => (
                  <button
                    key={`${ex.topic}-${ex.title}`}
                    type="button"
                    onClick={() => { setSelected(idx); setShowSolution(false); }}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition cursor-pointer ${
                      selected === idx
                        ? "bg-green-50 text-green-700 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-100 text-xs font-medium shrink-0">
                        {idx + 1}
                      </span>
                      <span className="truncate">{ex.title}</span>
                    </span>
                    <span className="flex items-center gap-2 mt-1 ml-7">
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        ex.level === "Easy"
                          ? "bg-green-100 text-green-700"
                          : ex.level === "Medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}>
                        {ex.level}
                      </span>
                      <span className="text-[10px] text-gray-400">{ex.topic}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Editor panel */}
        <div className="flex-1 min-w-0">
          {filtered.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center text-gray-500">
              No exercises found. Try adjusting your filters.
            </div>
          ) : exercise && (
            <>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-gray-900">{exercise.title}</h2>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    exercise.level === "Easy"
                      ? "bg-green-100 text-green-700"
                      : exercise.level === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}>
                    {exercise.level}
                  </span>
                </div>
                <p className="text-gray-500 mb-4 whitespace-pre-line">{exercise.description}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="px-2 py-0.5 bg-gray-100 rounded-full">{exercise.topic}</span>
                </div>
              </div>

              <ClientOnly
                fallback={
                  <div className="rounded-xl border border-gray-700 bg-[#282c34] flex items-center justify-center text-gray-400 text-sm" style={{ height: 450 }}>
                    Loading code editor...
                  </div>
                }
              >
                <CodeEditor key={`${lang}-${exercise.title}`} initialCode={exercise.starter} height="450px" language={lang} />
              </ClientOnly>

              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => setShowSolution(!showSolution)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 text-sm font-medium rounded-lg transition cursor-pointer"
                >
                  <Lightbulb size={16} />
                  {showSolution ? "Hide Solution" : "Show Solution"}
                  <ChevronDown size={14} className={`transition-transform ${showSolution ? "rotate-180" : ""}`} />
                </button>
                {showSolution && (
                  <pre className="mt-3 bg-slate-50 border border-amber-200 rounded-xl p-4 text-sm font-mono overflow-x-auto">
                    {exercise.solution}
                  </pre>
                )}
              </div>

              {/* Prev/Next */}
              <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-200">
                <button
                  type="button"
                  disabled={selected === 0}
                  onClick={() => { setSelected((s) => Math.max(0, s - 1)); setShowSolution(false); }}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 disabled:opacity-30 disabled:hover:text-gray-600 transition cursor-pointer disabled:cursor-default"
                >
                  <ChevronLeft size={16} /> Previous
                </button>
                <span className="text-xs text-gray-400">
                  Exercise {selected + 1} of {filtered.length}
                </span>
                <button
                  type="button"
                  disabled={selected >= filtered.length - 1}
                  onClick={() => { setSelected((s) => Math.min(filtered.length - 1, s + 1)); setShowSolution(false); }}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 disabled:opacity-30 disabled:hover:text-gray-600 transition cursor-pointer disabled:cursor-default"
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}