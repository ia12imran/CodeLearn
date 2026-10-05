"use client";

import { useState } from "react";
import type { CodingQuestion } from "@/data/types";
import { CheckCircle2, Eye, EyeOff, Trophy, ChevronRight, XCircle } from "lucide-react";
import AnswerBlock from "@/components/AnswerBlock";

interface CodingQuizProps {
  questions: CodingQuestion[];
  onComplete: (score: number) => void;
}

/**
 * The Quiz tab for JavaScript: 30+ pure coding challenges per lesson, each with
 * a verified answer. A challenge counts as "solved" once the learner has run
 * their own attempt in the editor, then opened the reference answer.
 */
export default function CodingQuiz({ questions, onComplete }: CodingQuizProps) {
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [solved, setSolved] = useState<Set<number>>(new Set());
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const q = questions[current];
  if (!q) return null;

  const goTo = (index: number) => {
    setCurrent(Math.min(Math.max(0, index), total - 1));
    setRevealed(false);
  };

  const handleReveal = () => {
    setRevealed(true);
    setSolved((prev) => (prev.has(q.id) ? prev : new Set(prev).add(q.id)));
  };

  const handleNext = () => {
    if (current < total - 1) {
      goTo(current + 1);
    } else {
      const score = Math.round((solved.size / total) * 100);
      onComplete(score);
      setFinished(true);
    }
  };

  if (finished) {
    const score = Math.round((solved.size / total) * 100);
    return (
      <div className="text-center py-8">
        <Trophy size={48} className={`mx-auto mb-4 ${score >= 70 ? "text-yellow-500" : "text-gray-400"}`} />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Coding Quiz Complete!</h3>
        <div className="text-5xl font-bold mb-2">
          <span className={score >= 70 ? "text-green-600" : "text-red-500"}>{score}%</span>
        </div>
        <p className="text-gray-600 mb-1">
          {solved.size} of {total} solutions reviewed
        </p>
        <p className="text-sm text-gray-500">
          {score >= 70 ? "Solid work. Try the Practice tab for the deeper interview questions." : "Reveal every answer, then retry the ones that tripped you up."}
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500">
          Challenge {current + 1} of {total}
        </span>
        <span className="text-sm font-medium text-purple-600">
          {solved.size} reviewed
        </span>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div
          className="h-2 bg-purple-600 rounded-full transition-all duration-300"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      {/* Prompt */}
      <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-2xl p-6 sm:p-8 text-white">
        <div className="text-xs text-purple-300 mb-3 uppercase tracking-wider">
          Coding challenge #{q.id}
        </div>
        <p className="text-lg sm:text-xl font-medium leading-relaxed whitespace-pre-line">{q.question}</p>
      </div>

      {/* Answer */}
      <div className="mt-4 flex items-center justify-between">
        {revealed ? (
          <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex-1 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <div className="text-xs text-emerald-600 font-semibold mb-1 uppercase tracking-wider">
                Reference Solution
              </div>
              <AnswerBlock answer={q.answer} />
            </div>
            <button
              type="button"
              onClick={() => setRevealed(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition cursor-pointer"
            >
              <EyeOff size={18} /> Hide
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleReveal}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition cursor-pointer"
          >
            <Eye size={18} /> Show Solution
          </button>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-gray-200 pt-6">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className={`px-5 py-3 font-medium rounded-xl transition cursor-pointer ${
            current === 0 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          Previous
        </button>

        <div className="flex items-center gap-1.5">
          {questions.map((item, idx) => {
            const state =
              idx === current ? "current" : solved.has(item.id) ? "solved" : "todo";
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(idx)}
                title={`Challenge ${idx + 1}`}
                aria-label={`Go to challenge ${idx + 1}`}
                className={`w-6 h-6 rounded-md text-[10px] font-medium transition cursor-pointer flex items-center justify-center ${
                  state === "current"
                    ? "bg-purple-600 text-white"
                    : state === "solved"
                      ? "bg-green-100 text-green-700 hover:bg-green-200"
                      : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }`}
              >
                {state === "solved" ? <CheckCircle2 size={13} /> : state === "current" ? <ChevronRight size={13} /> : idx + 1}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="flex items-center justify-center gap-2 px-5 py-3 font-medium rounded-xl transition cursor-pointer bg-purple-600 hover:bg-purple-700 text-white"
        >
          {current === total - 1 ? <>Finish <Trophy size={18} /></> : <>Next <ChevronRight size={18} /></>}
        </button>
      </div>

      {solved.size < total && (
        <p className="mt-4 text-xs text-gray-400 flex items-center gap-1.5">
          <XCircle size={12} />
          Finish early if you like — unreviewed challenges are simply not counted.
        </p>
      )}
    </div>
  );
}
