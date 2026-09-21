"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { EditorView, keymap, lineNumbers, highlightActiveLine, highlightActiveLineGutter } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { bracketMatching, foldGutter, indentOnInput } from "@codemirror/language";
import { autocompletion, closeBrackets, closeBracketsKeymap } from "@codemirror/autocomplete";
import { searchKeymap, highlightSelectionMatches } from "@codemirror/search";
import { lintKeymap } from "@codemirror/lint";
import { Play, Loader2, RotateCcw, Copy, Check } from "lucide-react";
import { Language } from "@/data/index";

interface CodeEditorProps {
  initialCode: string;
  height?: string;
  onRun?: (code: string) => void;
  readOnly?: boolean;
  autoFocus?: boolean;
  language?: Language;
}

function formatValue(value: unknown): string {
  if (value === undefined) return "undefined";
  if (value === null) return "null";
  if (typeof value === "string") return value;
  if (typeof value === "object") {
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }
  if (typeof value === "symbol") return value.toString();
  return String(value);
}

export default function CodeEditor({ initialCode, height = "300px", onRun, readOnly = false, autoFocus = false, language = "python" }: CodeEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const initialCodeRef = useRef(initialCode);
  const languageRef = useRef(language);

  useEffect(() => {
    initialCodeRef.current = initialCode;
  }, [initialCode]);

  useEffect(() => {
    languageRef.current = language;
  }, [language]);

  // Create editor once
  useEffect(() => {
    if (!editorRef.current) return;

    const langExtension = languageRef.current === "javascript" ? javascript() : python();

    const state = EditorState.create({
      doc: initialCodeRef.current,
      extensions: [
        lineNumbers(),
        highlightActiveLineGutter(),
        history(),
        foldGutter(),
        indentOnInput(),
        bracketMatching(),
        closeBrackets(),
        autocompletion(),
        highlightActiveLine(),
        highlightSelectionMatches(),
        keymap.of([...closeBracketsKeymap, ...defaultKeymap, ...searchKeymap, ...historyKeymap, ...lintKeymap]),
        langExtension,
        oneDark,
        EditorView.theme({
          "&": { height },
          ".cm-scroller": { overflow: "auto", fontFamily: "var(--font-mono), monospace", fontSize: "13.5px", lineHeight: "1.6" },
          ".cm-content": { caretColor: "#fff", padding: "8px 0", minHeight: height },
          "&.cm-focused": { outline: "none" },
          ".cm-cursor, .cm-dropCursor": { borderLeftColor: "#fff", borderLeftWidth: "2px" },
          ".cm-activeLine": { backgroundColor: "rgba(255,255,255,0.04)" },
        }),
        EditorView.editable.of(!readOnly),
      ],
    });

    const view = new EditorView({ state, parent: editorRef.current });
    viewRef.current = view;

    if (autoFocus) {
      requestAnimationFrame(() => view.focus());
    }

    return () => {
      view.destroy();
      viewRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- editor should initialize exactly once on mount
  }, []); // empty deps - create once

  const getCode = useCallback(() => viewRef.current?.state.doc.toString() || "", []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getCode());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const handleReset = () => {
    if (viewRef.current) {
      viewRef.current.dispatch({
        changes: { from: 0, to: viewRef.current.state.doc.length, insert: initialCodeRef.current },
      });
    }
    setOutput("");
  };

  const runJavaScript = async () => {
    const logs: string[] = [];
    const original = {
      log: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error,
    };

    const push = (...args: unknown[]) => logs.push(args.map(formatValue).join(" "));
    console.log = push;
    console.info = push;
    console.warn = push;
    console.error = push;

    try {
      const code = getCode();
      // Run inside an async function so top-level `await` works (fetch/async examples).
      const wrapped = new Function('"use strict"; return (async () => {\n' + code + "\n})();");
      await wrapped();
      setOutput(logs.join("\n") || "(no output)");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      const lastLine = msg.split("\n").filter(Boolean).slice(-1)[0] || msg;
      setOutput(logs.length > 0 ? logs.join("\n") + `\n\n⚠️ ${lastLine}` : `⚠️ ${lastLine}`);
    } finally {
      console.log = original.log;
      console.info = original.info;
      console.warn = original.warn;
      console.error = original.error;
    }
  };

  const runPython = async () => {
    setOutput("Loading Python runtime...");

    try {
      const win = window as unknown as { __pyodideLoaded?: boolean };
      if (!win.__pyodideLoaded) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js";
        document.head.appendChild(script);

        await new Promise<void>((resolve, reject) => {
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Failed to load Python runtime"));
        });

        const runtime = window as unknown as {
          loadPyodide: (config: { indexURL: string }) => Promise<unknown>;
          __pyodide?: unknown;
          __pyodideLoaded?: boolean;
        };
        const pyodideInstance = await runtime.loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/" });
        runtime.__pyodide = pyodideInstance;
        runtime.__pyodideLoaded = true;
      }

      setOutput("Running...");

      const runtime = window as unknown as { __pyodide: { runPython: (code: string) => unknown } };

      const code = getCode();
      const wrappedCode = `
import sys, io
__capture = io.StringIO()
sys.stdout = __capture
__result = None
try:
    exec(compile(${JSON.stringify(code)}, '<editor>', 'exec'))
    __result = __capture.getvalue()
except Exception as e:
    sys.stdout = sys.__stdout__
    raise e
sys.stdout = sys.__stdout__
__result
`;

      const result = runtime.__pyodide.runPython(wrappedCode);
      setOutput(String(result) || "(no output)");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      const pythonError = msg.includes("Traceback") ? msg.split("\n").slice(-3).join("\n") : msg;
      setOutput(pythonError);
    }
  };

  const handleRun = async () => {
    if (onRun) {
      onRun(getCode());
      return;
    }

    setIsRunning(true);

    try {
      if (languageRef.current === "javascript") {
        await runJavaScript();
      } else {
        await runPython();
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setOutput(msg);
    } finally {
      setIsRunning(false);
    }
  };

  const fileName = language === "javascript" ? "main.js" : "main.py";

  return (
    <div className="rounded-xl border border-gray-700 overflow-hidden bg-[#282c34] relative z-0">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#1e2127] border-b border-gray-700 relative z-10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/90 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/90 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/90 inline-block" />
          </div>
          <span className="text-xs text-gray-400 ml-2 font-mono">{fileName}</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleCopy}
            className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition cursor-pointer"
            title="Copy code"
          >
            {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition cursor-pointer"
            title="Reset code"
          >
            <RotateCcw size={16} />
          </button>
          <button
            type="button"
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition disabled:opacity-50 cursor-pointer"
          >
            {isRunning ? <Loader2 size={14} className="animate-spin" /> : <Play size={14} />}
            Run
          </button>
        </div>
      </div>

      {/* Editor container - fixed height, CodeMirror fills it */}
      <div
        ref={editorRef}
        className="relative w-full cursor-text z-0"
        style={{ height, overflow: "hidden" }}
        onClick={() => viewRef.current?.focus()}
      />

      {/* Output */}
      {output !== "" && (
        <div className="border-t border-gray-700 relative z-10">
          <div className="px-4 py-1.5 bg-[#1e2127] text-xs text-gray-400 font-mono">Output</div>
          <pre className="px-4 py-3 bg-black text-green-400 font-mono text-sm overflow-auto max-h-48 whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );
}