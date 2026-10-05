export interface Lesson {
  slug: string;
  title: string;
  description: string;
  content: string;
  codeExample: string;
  /** Optional multiple-choice refresher. The Quiz tab now runs coding Q&A. */
  quiz?: QuizQuestion[];
}

export interface Topic {
  slug: string;
  title: string;
  icon: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  lessons: Lesson[];
}

export interface QuizQuestion {
  question: string;
  code?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

/**
 * A coding challenge: a prompt the learner solves by writing code,
 * paired with a verified working answer.
 */
export interface CodingQuestion {
  id: number;
  question: string;
  answer: string;
}

/**
 * An interview-flavoured question with a deep, code-backed answer.
 */
export interface QAQuestion {
  id: number;
  question: string;
  answer: string;
}

/** Per-lesson question banks, keyed by "topic/lesson". */
export interface LessonQuestionBank {
  [lessonKey: string]: CodingQuestion[];
}

export interface QuestionBankSection {
  description: string;
  questions: QAQuestion[];
}

export interface AutomationQuestion {
  id: number;
  priority: "MUST KNOW" | "HIGH VALUE" | "MEDIUM" | "LOW";
  topic: string;
  question: string;
  simple_solution: string;
  why_for_automation: string;
  key_takeaway: string;
}

export interface QuestionBank {
  [key: string]: QuestionBankSection;
}

export interface ProgressData {
  completedLessons: string[];
  quizScores: Record<string, number>;
  lastVisited: string | null;
}
