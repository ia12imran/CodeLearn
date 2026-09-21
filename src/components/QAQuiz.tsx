"use client";

import { useEffect, useState } from "react";
import { QAQuestion } from "@/data/types";
import { ChevronRight, Eye, CheckCircle2, XCircle, Trophy } from "lucide-react";

interface QAQuizProps {
  sectionLabel: string;
  questions: QAQuestion[];
  onBack: () => void;
}

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function QAQuiz({ sectionLabel, questions, onBack }: QAQuizProps) {
  const [order, setOrder] = useState<QAQuestion[]>([]);
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [known, setKnown] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- shuffle on client only to avoid SSR hydration mismatch
    setOrder(shuffle(questions));
    setMounted(true);
  }, [questions]);

  if (!mounted || order.length === 0) return null;

  const total = order.length;
  const q = order[current];
  if (!q) return null;

  const handleReveal = () => setRevealed(true);

  const handleNext = (correct: boolean) => {
    if (correct) setKnown((k) => k + 1);
    if (current + 1 >= total) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setRevealed(false);
    }
  };

  if (finished) {
    return (
      <div className="text-center py-8">
        <Trophy size={48} className={`mx-auto mb-4 ${known >= total * 0.7 ? "text-yellow-500" : "text-gray-400"}`} />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Challenge Complete!</h3>
        <p className="text-gray-600 mb-4">
          You knew <span className="font-bold text-green-600">{known}</span> of {total} questions.
        </p>
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-6">
          <div
            className="h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-700"
            style={{ width: `${(known / total) * 100}%` }}
          />
        </div>
        <div className="flex justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setFinished(false);
              setCurrent(0);
              setKnown(0);
              setRevealed(false);
              setOrder(shuffle(questions));
            }}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition cursor-pointer"
          >
            Restart (same order)
          </button>
          <button
            type="button"
            onClick={onBack}
            className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition cursor-pointer"
          >
            Choose Another Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-500">
          Question {current + 1} of {total} &middot; <span className="font-medium text-blue-600">{sectionLabel}</span>
        </span>
        <span className="text-sm font-medium text-green-600">Known: {known}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div
          className="h-2 bg-blue-600 rounded-full transition-all"
          style={{ width: `${((current + (revealed ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      {/* Question card */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-white min-h-[220px] flex flex-col">
        <div className="text-xs text-slate-400 mb-3 uppercase tracking-wider">Question #{q.id}</div>
        <p className="text-lg sm:text-xl font-medium leading-relaxed flex-1">{q.question}</p>

        {revealed ? (
          <div className="mt-6 space-y-4">
            <div className="bg-emerald-500/10 border border-emerald-400/40 rounded-xl p-4">
              <div className="text-xs text-emerald-300 font-semibold mb-1 uppercase tracking-wider">Answer</div>
              <p className="text-emerald-100 leading-relaxed">{q.answer}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => handleNext(true)}
                className="flex items-center justify-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition cursor-pointer"
              >
                <CheckCircle2 size={18} /> I knew it
              </button>
              <button
                type="button"
                onClick={() => handleNext(false)}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition cursor-pointer"
              >
                {current + 1 >= total ? "Finish" : "Next Question"}
                {current + 1 >= total ? <Trophy size={16} /> : <ChevronRight size={16} />}
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleReveal}
            className="mt-6 flex items-center justify-center gap-2 px-5 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition cursor-pointer"
          >
            <Eye size={18} /> Show Answer
          </button>
        )}
      </div>

      {/* Footer actions */}
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-gray-500 hover:text-gray-800 transition cursor-pointer"
        >
          &larr; Exit challenge
        </button>
        <span className="text-xs text-gray-400 inline-flex items-center gap-1">
          <XCircle size={12} /> Skip = mark as not known
        </span>
      </div>
    </div>
  );
}