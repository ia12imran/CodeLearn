"use client";

import { useState } from "react";
import { QuizQuestion } from "@/data/types";
import { CheckCircle2, XCircle, ChevronRight, Trophy } from "lucide-react";

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [finishedScore, setFinishedScore] = useState(0);

  const q = questions[current];
  if (!q) return null;

  const isCorrect = selected === q.correctIndex;

  const handleSelect = (idx: number) => {
    if (showAnswer) return;
    setSelected(idx);
    setShowAnswer(true);
    if (idx === q.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      const finalScore = score; // score already includes current answer
      const percentage = Math.round((finalScore / questions.length) * 100);
      setFinishedScore(percentage);
      onComplete(percentage);
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowAnswer(false);
    }
  };

  if (finished) {
    return (
      <div className="text-center py-8">
        <Trophy size={48} className={`mx-auto mb-4 ${finishedScore >= 70 ? "text-yellow-500" : "text-gray-400"}`} />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Quiz Complete!</h3>
        <div className="text-5xl font-bold mb-2">
          <span className={finishedScore >= 70 ? "text-green-600" : "text-red-500"}>
            {finishedScore}%
          </span>
        </div>
        <p className="text-gray-600 mb-1">
          {score} out of {questions.length} correct
        </p>
        <p className="text-sm text-gray-500">
          {finishedScore >= 70
            ? "Great job! Keep up the good work!"
            : "Keep practicing, you'll get there!"}
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500">
          Question {current + 1} of {questions.length}
        </span>
        <span className="text-sm font-medium text-blue-600">
          Score: {score}/{current + (showAnswer ? 1 : 0)}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div
          className="h-2 bg-blue-600 rounded-full transition-all"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      {q.code && (
        <pre className="bg-gray-900 text-green-400 font-mono text-sm p-4 rounded-lg mb-4 overflow-x-auto">
          {q.code}
        </pre>
      )}
      <h4 className="text-lg font-semibold text-gray-900 mb-4">{q.question}</h4>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {q.options.map((opt, idx) => {
          let style = "border-gray-200 hover:border-blue-300 hover:bg-blue-50";
          if (showAnswer) {
            if (idx === q.correctIndex) {
              style = "border-green-500 bg-green-50";
            } else if (idx === selected && idx !== q.correctIndex) {
              style = "border-red-500 bg-red-50";
            } else {
              style = "border-gray-200 opacity-50";
            }
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(idx)}
              disabled={showAnswer}
              className={`w-full flex items-center gap-3 p-4 border-2 rounded-xl text-left transition cursor-pointer ${style}`}
            >
              <span
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-medium shrink-0 ${
                  showAnswer && idx === q.correctIndex
                    ? "border-green-500 bg-green-500 text-white"
                    : showAnswer && idx === selected
                      ? "border-red-500 bg-red-500 text-white"
                      : "border-gray-300 text-gray-600"
                }`}
              >
                {showAnswer && idx === q.correctIndex ? (
                  <CheckCircle2 size={18} />
                ) : showAnswer && idx === selected ? (
                  <XCircle size={18} />
                ) : (
                  String.fromCharCode(65 + idx)
                )}
              </span>
              <span className="text-gray-700">{opt}</span>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showAnswer && (
        <div
          className={`p-4 rounded-lg mb-4 ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
        >
          <p className={`text-sm font-medium ${isCorrect ? "text-green-800" : "text-red-800"}`}>
            {isCorrect ? "Correct!" : "Incorrect"}
          </p>
          <p className="text-sm text-gray-600 mt-1">{q.explanation}</p>
        </div>
      )}

      {/* Next button */}
      {showAnswer && (
        <button
          type="button"
          onClick={handleNext}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition cursor-pointer"
        >
          {current + 1 >= questions.length ? "See Results" : "Next Question"}
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
}