"use client";

import Link from "next/link";
import { topics } from "@/data/topics";
import { getProgress } from "@/lib/progress";
import { useEffect, useState } from "react";
import { ChevronRight, ChevronDown, CheckCircle2, FlaskConical, Code2, Bot } from "lucide-react";

export default function Sidebar({ currentTopic, currentLesson }: { currentTopic: string; currentLesson: string }) {
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ [currentTopic]: true });

  useEffect(() => {
    const p = getProgress();
    const map: Record<string, boolean> = {};
    p.completedLessons.forEach((key) => {
      map[key] = true;
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync client-side progress from localStorage on mount
    setProgress(map);
  }, []);

  return (
    <aside
      className="w-72 shrink-0 border-r border-gray-200 bg-gray-50 overflow-y-auto hidden lg:block"
      style={{ maxHeight: "calc(100vh - 4rem)" }}
    >
      <div className="p-4">
        <div className="mb-4 space-y-2">
          <Link
            href="/practice"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-green-700 hover:bg-green-50 rounded-lg transition"
          >
            <Code2 size={16} />
            Practice Exercises
          </Link>
          <Link
            href="/automation"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-cyan-700 hover:bg-cyan-50 rounded-lg transition"
          >
            <Bot size={16} />
            Python Automation
          </Link>
          <Link
            href="/quiz"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-purple-700 hover:bg-purple-50 rounded-lg transition"
          >
            <FlaskConical size={16} />
            Quick Tests
          </Link>
        </div>

        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Topics</h3>
        <nav className="space-y-1">
          {topics.map((topic) => (
            <div key={topic.slug}>
              {/* Clickable topic header toggles expand/collapse */}
              <button
                type="button"
                onClick={() => setExpanded((prev) => ({ ...prev, [topic.slug]: !(prev[topic.slug] ?? topic.slug === currentTopic) }))}
                className={`w-full flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-lg mb-1 cursor-pointer transition ${
                  topic.slug === currentTopic ? "text-blue-700 bg-blue-50" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {(expanded[topic.slug] ?? topic.slug === currentTopic) ? <ChevronDown size={14} className="shrink-0" /> : <ChevronRight size={14} className="shrink-0" />}
                <span className="flex-1 text-left truncate">{topic.title}</span>
                <span className="text-xs font-normal text-gray-400">
                  {topic.lessons.filter((l) => progress[`${topic.slug}/${l.slug}`]).length}/{topic.lessons.length}
                </span>
              </button>
              {(expanded[topic.slug] ?? topic.slug === currentTopic) && (
                <div className="ml-3 pl-2 border-l border-gray-200 space-y-0.5 mb-1">
                  {topic.lessons.map((lesson) => {
                    const isActive = topic.slug === currentTopic && lesson.slug === currentLesson;
                    const isComplete = progress[`${topic.slug}/${lesson.slug}`];
                    return (
                      <Link
                        key={lesson.slug}
                        href={`/learn/${topic.slug}/${lesson.slug}`}
                        className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition ${
                          isActive
                            ? "bg-blue-100 text-blue-700 font-medium"
                            : isComplete
                              ? "text-green-600 hover:bg-gray-100"
                              : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {isComplete ? (
                          <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                        ) : (
                          <ChevronRight size={14} className="shrink-0 opacity-50" />
                        )}
                        <span className="truncate">{lesson.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}