"use client";

/**
 * Renders a QA answer written in the house convention:
 *
 *   <plain-language explanation>
 *   code:
 *   <runnable snippet>
 *   real example:        (practice banks)
 *   <real-world tie-in>
 *   output:             (coding banks)
 *   <exact console output>
 */
export default function AnswerBlock({ answer }: { answer: string }) {
  const lines = answer.split("\n");
  const nodes: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  const LABEL: Record<string, { text: string; tone: string }> = {
    "code:": { text: "Code Example", tone: "text-emerald-600" },
    "real example:": { text: "Real-World Example", tone: "text-emerald-600" },
    "output:": { text: "Output", tone: "text-sky-600" },
  };

  while (i < lines.length) {
    const trimmed = lines[i].trim();
    const label = LABEL[trimmed];

    if (label) {
      i++;
      const block: string[] = [];
      while (i < lines.length && !LABEL[lines[i].trim()]) {
        block.push(lines[i]);
        i++;
      }
      const content = block.join("\n").trim();
      if (trimmed === "code:") {
        nodes.push(
          <div key={key++} className="mt-3">
            <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${label.tone}`}>{label.text}</div>
            <pre className="bg-slate-900 text-emerald-100 text-[12.5px] leading-relaxed rounded-lg p-3 overflow-x-auto whitespace-pre-wrap break-words font-mono">
              {content}
            </pre>
          </div>
        );
      } else {
        nodes.push(
          <div key={key++} className="mt-3">
            <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${label.tone}`}>{label.text}</div>
            <pre
              className={`text-[12.5px] leading-relaxed rounded-lg p-3 overflow-x-auto whitespace-pre-wrap break-words font-mono ${
                trimmed === "output:" ? "bg-sky-50 text-sky-900 border border-sky-200" : "text-emerald-800"
              }`}
            >
              {content}
            </pre>
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
