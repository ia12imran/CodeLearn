"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { QAQuestion } from "@/data/types";
import { ChevronLeft, ChevronRight, Eye, EyeOff, ArrowRight, CornerDownLeft } from "lucide-react";

const CodeEditor = dynamic(() => import("@/components/CodeEditor"), { ssr: false });

function AnswerBlock({ answer }: { answer: string }) {
  const lines = answer.split("\n");
  const nodes: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const trimmed = lines[i].trim();

    if (trimmed === "code:" || trimmed === "real example:") {
      const label = trimmed === "code:" ? "Code Example" : "Real-World Example";
      i++;
      const block: string[] = [];
      while (i < lines.length) {
        const t = lines[i].trim();
        if (t === "code:" || t === "real example:") break;
        block.push(lines[i]);
        i++;
      }
      const content = block.join("\n").trim();
      if (trimmed === "code:") {
        nodes.push(
          <div key={key++} className="mt-3">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 mb-1">
              {label}
            </div>
            <pre className="bg-slate-900 text-emerald-100 text-[12.5px] leading-relaxed rounded-lg p-3 overflow-x-auto whitespace-pre-wrap break-words font-mono">
              {content}
            </pre>
          </div>
        );
      } else {
        nodes.push(
          <div key={key++} className="mt-3">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 mb-1">
              {label}
            </div>
            <p className="text-emerald-800">{content}</p>
          </div>
        );
      }
    } else {
      if (trimmed.length > 0) {
        nodes.push(<p key={key++} className="text-emerald-800">{lines[i]}</p>);
      } else {
        nodes.push(<div key={key++} className="h-2" />);
      }
      i++;
    }
  }

  return <div>{nodes}</div>;
}

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

interface PracticeQAProps {
  questions: QAQuestion[];
}

function QuestionEditor({ q }: { q: QAQuestion }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount code editor only on the client
    setMounted(true);
  }, []);

  const initialCode = `# Question ${q.id}\n# Write and run your Python code below\n`;

  if (!mounted) return <EditorPlaceholder height={210} />;
  return <CodeEditor key={q.id} initialCode={initialCode} height="160px" />;
}

export default function PracticeQA({ questions }: PracticeQAProps) {
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [jumpInput, setJumpInput] = useState("");
  const topRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const total = questions.length;
  const q = questions[current];
  if (!q) return null;

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goTo = (index: number) => {
    setCurrent(Math.min(Math.max(0, index), total - 1));
    setRevealed(false);
    scrollToTop();
  };

  const handlePrev = () => {
    if (current > 0) {
      goTo(current - 1);
    }
  };

  const handleNext = () => {
    if (current < total - 1) {
      goTo(current + 1);
    } else {
      router.push("/practice");
    }
  };

  const handleJump = () => {
    const parsed = parseFloat(jumpInput);
    if (Number.isFinite(parsed) && parsed >= 1 && parsed <= total) {
      goTo(Math.round(parsed) - 1);
      setJumpInput("");
    }
  };

  return (
    <div ref={topRef}>
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-500">
          Question {current + 1} of {total}
        </span>
        <span className="text-xs text-gray-400">
          {Math.round(((current + 1) / total) * 100)}% complete
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div
          className="h-2 bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      {/* Question card */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-white flex flex-col">
        <div className="text-xs text-slate-400 mb-3 uppercase tracking-wider">Question #{q.id}</div>
        <p className="text-lg sm:text-xl font-medium leading-relaxed">{q.question}</p>
      </div>

      {/* Code editor to write and run code */}
      <div className="mt-4">
        <QuestionEditor q={q} />
      </div>

      {/* Answer */}
      <div className="mt-4 flex items-center justify-between">
        {revealed ? (
          <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex-1 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <div className="text-xs text-emerald-600 font-semibold mb-1 uppercase tracking-wider">Answer</div>
              <AnswerBlock answer={q.answer} />
            </div>
            <button
              type="button"
              onClick={() => setRevealed(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition cursor-pointer"
            >
              <EyeOff size={18} /> Hide Answer
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition cursor-pointer"
          >
            <Eye size={18} /> Show Answer
          </button>
        )}
      </div>

      {/* Previous / Next navigation */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-200 pt-6">
        <button
          type="button"
          onClick={handlePrev}
          disabled={current === 0}
          className={`flex items-center gap-2 px-5 py-3 font-medium rounded-xl transition cursor-pointer ${
            current === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          <ChevronLeft size={18} /> Previous
        </button>

        {/* Jump to question */}
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={1}
            max={total}
            value={jumpInput}
            onChange={(e) => setJumpInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleJump();
            }}
            placeholder="Question #"
            className="w-28 px-3 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={handleJump}
            className="flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition cursor-pointer"
          >
            Jump <CornerDownLeft size={18} />
          </button>
          <span className="text-sm text-gray-400 hidden lg:inline">
            {current + 1} / {total}
          </span>
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="flex items-center gap-2 px-5 py-3 font-medium rounded-xl transition cursor-pointer bg-blue-600 hover:bg-blue-700 text-white"
        >
          {current === total - 1 ? <>Go to Practice <ArrowRight size={18} /></> : <>Next <ChevronRight size={18} /></>}
        </button>
      </div>
    </div>
  );
}