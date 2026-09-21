"use client";

import { useState } from "react";
import { topics } from "@/data/topics";
import { extraQuiz } from "@/data/extra-quiz";
import { QuizQuestion, QAQuestion } from "@/data/types";
import Quiz from "@/components/Quiz";
import QAQuiz from "@/components/QAQuiz";
import { FlaskConical, Shuffle, Target, HelpCircle, Loader2, AlertTriangle } from "lucide-react";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getQuizByTopic(topicSlug: string): QuizQuestion[] {
  const topic = topics.find((t) => t.slug === topicSlug);
  if (!topic) return [];
  return topic.lessons.flatMap((l) => [...l.quiz, ...(extraQuiz[`${topicSlug}/${l.slug}`] || [])]);
}

function getMixedQuiz(count: number): QuizQuestion[] {
  const allQuestions = topics.flatMap((t) =>
    t.lessons.flatMap((l) => [...l.quiz, ...(extraQuiz[`${t.slug}/${l.slug}`] || [])])
  );
  return shuffleArray(allQuestions).slice(0, count);
}

const qaSections = [
  { key: "basic_syntax", label: "1. Syntax", count: 100, gradient: "from-blue-500 to-indigo-600" },
  { key: "variables", label: "2. Variables", count: 100, gradient: "from-emerald-500 to-teal-600" },
  { key: "data_types", label: "3. Data Types", count: 150, gradient: "from-orange-500 to-amber-600" },
  { key: "string_basics", label: "4. String Basics", count: 200, gradient: "from-pink-500 to-rose-600" },
  { key: "string_methods", label: "5. String Methods", count: 200, gradient: "from-fuchsia-500 to-purple-600" },
  { key: "string_formatting", label: "6. String Formatting", count: 100, gradient: "from-cyan-500 to-blue-600" },
  { key: "operator_arithmetic", label: "7. Arithmetic Operators", count: 200, gradient: "from-amber-500 to-yellow-600" },
  { key: "operator_comparison", label: "8. Comparison Operators", count: 200, gradient: "from-red-500 to-orange-600" },
  { key: "operator_logical", label: "9. Logical Operators", count: 100, gradient: "from-slate-500 to-gray-700" },
  { key: "dictionaries", label: "10. Dictionaries", count: 500, gradient: "from-violet-500 to-purple-700" },
  { key: "oop_classes_basics", label: "11. Classes & Objects", count: 100, gradient: "from-indigo-500 to-violet-700" },
  { key: "oop_inheritance", label: "12. Inheritance", count: 100, gradient: "from-teal-500 to-cyan-700" },
  { key: "error_handling", label: "13. Error Handling", count: 100, gradient: "from-red-500 to-rose-600" },
  { key: "file_handling", label: "14. File Handling", count: 300, gradient: "from-amber-600 to-orange-700" },
];

export default function QuizPage() {
  const [mode, setMode] = useState<"select" | "quiz" | "qa">("select");
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [quizKey, setQuizKey] = useState(0);
  const [qaQuestions, setQaQuestions] = useState<QAQuestion[]>([]);
  const [qaLabel, setQaLabel] = useState("");
  const [loadingSection, setLoadingSection] = useState<string | null>(null);
  const [qaError, setQaError] = useState<string | null>(null);

  const startQuiz = (questions: QuizQuestion[]) => {
    setQuizQuestions(shuffleArray(questions));
    setQuizKey((k) => k + 1);
    setMode("quiz");
  };

  const startQaQuiz = async (sectionKey: string, label: string) => {
    setLoadingSection(sectionKey);
    setQaError(null);
    try {
      const m = await import("@/data/question-sections");
      const section = m.getSection(sectionKey);
      const questions = section?.questions ?? [];
      if (questions.length === 0) throw new Error("Section not found");
      setQaQuestions(questions);
      setQaLabel(label);
      setMode("qa");
    } catch (err) {
      setQaError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoadingSection(null);
    }
  };

  const totalQuestions =
    topics.reduce(
      (a, t) => a + t.lessons.reduce((b, l) => b + l.quiz.length + (extraQuiz[`${t.slug}/${l.slug}`]?.length || 0), 0),
      0
    ) + qaSections.reduce((a, s) => a + s.count, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
          <FlaskConical size={20} className="text-purple-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quick Test</h1>
          <p className="text-sm text-gray-500">
            {totalQuestions} quiz &amp; Q&amp;A questions. Test your Python knowledge.
          </p>
        </div>
      </div>

      {mode === "select" && (
        <div>
          {/* Mixed quiz option */}
          <button
            type="button"
            onClick={() => startQuiz(getMixedQuiz(20))}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 sm:p-8 mb-8 text-white cursor-pointer hover:shadow-lg transition text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                <Shuffle size={28} />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-1">Mixed Python Quiz</h2>
                <p className="text-purple-100">20 random questions from all topics. The ultimate challenge!</p>
              </div>
            </div>
          </button>

          {/* Python Syntax Q&A */}
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Python Syntax Q&amp;A</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {qaSections.map((sec) => (
              <button
                key={sec.key}
                type="button"
                disabled={loadingSection !== null}
                onClick={() => startQaQuiz(sec.key, sec.label)}
                className={`relative overflow-hidden bg-gradient-to-br ${sec.gradient} rounded-2xl p-5 text-white text-left hover:shadow-xl transition group cursor-pointer disabled:opacity-60 disabled:cursor-wait`}
              >
                <HelpCircle size={24} className="mb-3 opacity-90" />
                <h3 className="font-bold mb-1">{sec.label}</h3>
                <p className="text-white/80 text-sm">{sec.count} Q&amp;A questions</p>
                {loadingSection === sec.key && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Loader2 size={22} className="animate-spin" />
                  </div>
                )}
              </button>
            ))}
          </div>
          {qaError && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl p-3 mb-10">
              <AlertTriangle size={16} />
              Failed to load questions: {qaError}
            </div>
          )}

          {/* Topic-specific quizzes */}
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quiz by Topic</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {topics.map((topic) => {
              const questionCount = topic.lessons.reduce(
                (a, l) => a + l.quiz.length + (extraQuiz[`${topic.slug}/${l.slug}`]?.length || 0),
                0
              );
              return (
                <button
                  key={topic.slug}
                  type="button"
                  onClick={() => startQuiz(getQuizByTopic(topic.slug))}
                  className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:border-purple-300 hover:shadow-md transition group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition">
                      {topic.title}
                    </h3>
                    <Target size={18} className="text-gray-400 group-hover:text-purple-500" />
                  </div>
                  <p className="text-sm text-gray-500">{questionCount} questions</p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {mode === "quiz" && (
        <div>
          <button
            type="button"
            onClick={() => setMode("select")}
            className="text-sm text-blue-600 hover:text-blue-800 mb-6 flex items-center gap-1 cursor-pointer"
          >
            &larr; Back to quiz selection
          </button>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
            <Quiz
              key={quizKey}
              questions={quizQuestions}
              onComplete={() => {
                // Score is displayed by Quiz component
              }}
            />
          </div>
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setMode("select")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition cursor-pointer"
            >
              Try Another Quiz
            </button>
          </div>
        </div>
      )}

      {mode === "qa" && (
        <div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-6">
            <QAQuiz sectionLabel={qaLabel} questions={qaQuestions} onBack={() => setMode("select")} />
          </div>
        </div>
      )}
    </div>
  );
}