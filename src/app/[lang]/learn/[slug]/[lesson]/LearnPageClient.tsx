"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  getTopics,
  getTopicBySlug,
  getLessonBySlug,
  getNextLesson,
  getExtraQuiz,
  getQuestionSectionModule,
  getLessonPractice,
  getLessonCoding,
  isLanguage,
  Language,
} from "@/data/index";
import { markLessonComplete, isLessonComplete } from "@/lib/progress";
import Sidebar from "@/components/Sidebar";
import Quiz from "@/components/Quiz";
import PracticeQA from "@/components/PracticeQA";
import CodingQuiz from "@/components/CodingQuiz";
import ClientOnly from "@/components/ClientOnly";
import { QAQuestion, CodingQuestion } from "@/data/types";
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, BookOpen, FlaskConical } from "lucide-react";

const CodeEditor = dynamic(() => import("@/components/CodeEditor"), { ssr: false });

function EditorPlaceholder({ height }: { height: number }) {
  return (
    <div
      className="rounded-xl border border-gray-700 bg-[#282c34] flex items-center justify-center text-gray-400 text-sm"
      style={{ height }}
    >
      Loading code editor...
    </div>
  );
}

/**
 * Python only. JavaScript uses the per-lesson banks in
 * src/data/javascript/questions + src/data/javascript/coding instead.
 */
const pythonQaSectionKeyMap: Record<string, string> = {
    "syntax/basic-syntax": "basic_syntax",
    "syntax/variables": "variables",
    "syntax/data-types": "data_types",
    "strings/string-basics": "string_basics",
    "strings/string-methods": "string_methods",
    "strings/string-formatting": "string_formatting",
    "operators/arithmetic-operators": "operator_arithmetic",
    "operators/comparison-operators": "operator_comparison",
    "operators/logical-operators": "operator_logical",
    "control-flow/if-else": "control_flow_if_else",
    "control-flow/for-loops": "control_flow_for_loops",
    "control-flow/while-loops": "control_flow_while_loops",
    "lists/list-basics": "list_basics",
    "lists/list-comprehension": "list_comprehension",
    "functions/function-basics": "function_basics",
    "functions/lambda": "function_lambda",
    "dictionaries/dict-basics": "dictionaries",
    "oop/classes-basics": "oop_classes_basics",
    "oop/inheritance": "oop_inheritance",
    "error-handling/try-except": "error_handling",
    "file-handling/file-operations": "file_handling",
};

export default function LearnPageClient({ lang, slug, lesson }: { lang: string; slug: string; lesson: string }) {
  const language: Language = isLanguage(lang) ? lang : "python";

  const topic = getTopicBySlug(language, slug);
  const foundLesson = getLessonBySlug(language, slug, lesson);

  if (!topic || !foundLesson) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Lesson not found</h2>
          <Link href={`/${language}`} className="text-blue-600 hover:underline">
            Go home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <LessonView
      key={`${language}/${slug}/${lesson}`}
      language={language}
      topicSlug={slug}
      lessonSlug={lesson}
    />
  );
}

function LessonView({ language, topicSlug, lessonSlug }: { language: Language; topicSlug: string; lessonSlug: string }) {
  const topics = getTopics(language);
  const topic = getTopicBySlug(language, topicSlug)!;
  const lesson = getLessonBySlug(language, topicSlug, lessonSlug)!;
  const [activeTab, setActiveTab] = useState<"learn" | "practice" | "quiz">("learn");
  const [completed, setCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read persisted progress from localStorage once on mount
    setCompleted(isLessonComplete(language, topicSlug, lessonSlug));
  }, [language, topicSlug, lessonSlug]);

  const next = getNextLesson(language, topicSlug, lessonSlug);
  const nextHref = next ? `/${language}/learn/${next.topicSlug}/${next.lessonSlug}` : null;
  const lessonQuiz = [...(lesson.quiz || []), ...(getExtraQuiz(language)[`${topicSlug}/${lessonSlug}`] || [])];

  const isJs = language === "javascript";
  const lessonKey = `${topicSlug}/${lessonSlug}`;

  // Python keeps the shared per-section banks. JavaScript has one bank per lesson.
  const qaSectionKey = isJs ? null : pythonQaSectionKeyMap[lessonKey] || null;

  const [qaQuestions, setQaQuestions] = useState<QAQuestion[]>([]);
  const [qaLoading, setQaLoading] = useState(true);
  const [codingQuestions, setCodingQuestions] = useState<CodingQuestion[]>([]);
  const [codingLoading, setCodingLoading] = useState(isJs);

  useEffect(() => {
    let cancelled = false;

    if (isJs) {
      setQaLoading(true);
      getLessonPractice(language, topicSlug, lessonSlug)
        .then((qs) => !cancelled && setQaQuestions(qs))
        .catch(() => !cancelled && setQaQuestions([]))
        .finally(() => !cancelled && setQaLoading(false));
    } else if (qaSectionKey) {
      getQuestionSectionModule(language)()
        .then((m) => {
          const section = m.getSection(qaSectionKey);
          if (!cancelled) setQaQuestions(section?.questions ?? []);
        })
        .catch(() => {
          if (!cancelled) setQaQuestions([]);
        })
        .finally(() => {
          if (!cancelled) setQaLoading(false);
        });
    } else {
      setQaLoading(false);
    }

    if (isJs) {
      getLessonCoding(language, topicSlug, lessonSlug)
        .then((qs) => !cancelled && setCodingQuestions(qs))
        .catch(() => !cancelled && setCodingQuestions([]))
        .finally(() => !cancelled && setCodingLoading(false));
    }

    return () => {
      cancelled = true;
    };
  }, [language, topicSlug, lessonSlug, isJs, qaSectionKey]);

  const handleMarkComplete = () => {
    markLessonComplete(language, topicSlug, lessonSlug);
    setCompleted(true);
  };

  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
    if (score >= 70) {
      markLessonComplete(language, topicSlug, lessonSlug);
      setCompleted(true);
    }
  };

  const lessonIndex = topic.lessons.findIndex((l) => l.slug === lessonSlug);
  const prevLesson = lessonIndex > 0 ? topic.lessons[lessonIndex - 1] : null;
  const prevHref = prevLesson ? `/${language}/learn/${topicSlug}/${prevLesson.slug}` : null;

  const renderedContent = lesson.content
    .replace(/```(\w+)?\n/g, "")
    .replace(/```/g, "")
    .split("\n");

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <Sidebar currentTopic={topicSlug} currentLesson={lessonSlug} language={language} />

      <div className="flex-1 min-w-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <span>{topic.title}</span>
            <ChevronRight size={14} />
            <span className="text-gray-900 font-medium">{lesson.title}</span>
            {completed && <CheckCircle2 size={16} className="text-green-500 ml-1" />}
          </div>

          {/* Tabs */}
          <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-8">
            {[
              { id: "learn" as const, label: "Learn", icon: BookOpen },
              { id: "practice" as const, label: "Practice", icon: ArrowRight },
              { id: "quiz" as const, label: "Quiz", icon: FlaskConical },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition cursor-pointer ${
                  activeTab === tab.id ? "bg-white text-blue-700 shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Learn tab */}
          {activeTab === "learn" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
              <p className="text-gray-500 mb-6">{lesson.description}</p>

              {/* Content */}
              <div className="prose max-w-none mb-8">
                {(() => {
                  const nodes: React.ReactNode[] = [];
                  let key = 0;
                  let bullets: string[] = [];
                  const flushBullets = () => {
                    if (bullets.length > 0) {
                      nodes.push(
                        <ul key={key++} className="list-disc pl-5 my-2 space-y-1">
                          {bullets.map((b, bi) => (
                            <li key={bi}>{b}</li>
                          ))}
                        </ul>
                      );
                      bullets = [];
                    }
                  };
                  renderedContent.forEach((line) => {
                    if (line.startsWith("- ")) {
                      bullets.push(line.slice(2));
                      return;
                    }
                    flushBullets();
                    if (line.startsWith("| ")) return;
                    if (line.startsWith("**") && line.endsWith("**")) {
                      nodes.push(<h2 key={key++}>{line.replace(/\*\*/g, "")}</h2>);
                      return;
                    }
                    if (line.startsWith("**")) {
                      const parts = line.split("**");
                      nodes.push(
                        <p key={key++}>
                          <strong>{parts[1]}</strong>
                          {parts.slice(2).join("**")}
                        </p>
                      );
                      return;
                    }
                    if (line.trim() === "") {
                      nodes.push(<div key={key++} className="h-4" />);
                      return;
                    }
                    nodes.push(<p key={key++}>{line}</p>);
                  });
                  flushBullets();
                  return nodes;
                })()}
              </div>

              {/* Code example */}
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Try It Yourself</h2>
              <ClientOnly fallback={<EditorPlaceholder height={350} />}>
                <CodeEditor key={`learn-${lessonSlug}`} initialCode={lesson.codeExample} height="350px" language={language} />
              </ClientOnly>

              {/* Mark complete */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {!completed ? (
                  <button
                    type="button"
                    onClick={handleMarkComplete}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition cursor-pointer"
                  >
                    <CheckCircle2 size={18} />
                    Mark as Complete
                  </button>
                ) : (
                  <div className="flex items-center gap-2 text-green-600 font-medium">
                    <CheckCircle2 size={18} />
                    Completed!
                  </div>
                )}
                {nextHref && (
                  <Link
                    href={nextHref}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition"
                  >
                    Next Lesson
                    <ChevronRight size={18} />
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* Practice tab */}
          {activeTab === "practice" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice: {lesson.title}</h1>

              <div className="mb-10">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  {isJs ? "Top Interview Questions for This Topic" : "Practice Questions & Answers"}
                </h2>
                <p className="text-gray-500 mb-6">
                  {isJs
                    ? `The ${qaQuestions.length || 30}+ questions interviewers actually ask on ${lesson.title}. Write your answer in the editor, run it, then compare it with the reference solution.`
                    : "Answer each question by writing and running your code. Use Previous/Next to navigate."}
                </p>
                {qaLoading ? (
                  <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center text-gray-500">
                    Loading questions...
                  </div>
                ) : qaQuestions.length > 0 ? (
                  <PracticeQA questions={qaQuestions} language={language} />
                ) : (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-700 text-sm">
                    Practice questions are temporarily unavailable. Please try again later.
                  </div>
                )}
              </div>

              <div className="mt-8 flex space-x-4">
                <button
                  type="button"
                  onClick={() => setActiveTab("quiz")}
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition cursor-pointer"
                >
                  <FlaskConical size={18} />
                  {isJs ? "Go to Coding Quiz" : "Take the Quiz"}
                </button>
              </div>
            </div>
          )}

          {/* Quiz tab */}
          {activeTab === "quiz" && (
            <div>
              {isJs ? (
                <>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Coding Quiz: {lesson.title}</h1>
                  <p className="text-gray-500 mb-6">
                    {codingQuestions.length || 30} pure coding challenges. Try to solve each one on your own before
                    opening the reference solution.
                  </p>
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
                    {codingLoading ? (
                      <div className="p-10 text-center text-gray-500">Loading challenges...</div>
                    ) : codingQuestions.length > 0 ? (
                      <CodingQuiz questions={codingQuestions} onComplete={handleQuizComplete} />
                    ) : (
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-700 text-sm">
                        Coding challenges for this lesson are on the way. Please check back soon.
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Quick Quiz: {lesson.title}</h1>
                  <p className="text-gray-500 mb-6">Test your understanding of this lesson.</p>
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
                    <Quiz questions={lessonQuiz} onComplete={handleQuizComplete} />
                  </div>
                </>
              )}
              {quizScore !== null && nextHref && (
                <div className="mt-6 text-center">
                  <Link
                    href={nextHref}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition"
                  >
                    Continue to Next Lesson <ChevronRight size={18} />
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Prev/Next navigation */}
          <div className="flex justify-between mt-12 pt-6 border-t border-gray-200">
            {prevHref ? (
              <Link href={prevHref} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition">
                <ChevronLeft size={18} />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Previous</div>
                  <div className="text-sm font-medium">{prevLesson?.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextHref ? (
              <Link href={nextHref} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition text-right">
                <div>
                  <div className="text-xs text-gray-400">Next</div>
                  <div className="text-sm font-medium">
                    {lessonIndex + 1 < topic.lessons.length
                      ? topic.lessons[lessonIndex + 1].title
                      : next
                      ? topics.find((t) => t.slug === next.topicSlug)?.lessons[0].title
                      : "Complete"}
                  </div>
                </div>
                <ChevronRight size={18} />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}