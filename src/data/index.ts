import { Topic, Lesson, QuizQuestion } from "./types";
import { topics as pythonTopics } from "./python/topics";
import { topics as javascriptTopics } from "./javascript/topics";
import { extraQuiz as pythonExtraQuiz } from "./python/extra-quiz";
import { extraQuiz as javascriptExtraQuiz } from "./javascript/extra-quiz";
import { practiceExercises as pythonPracticeExercises } from "./python/practice-exercises";
import { practiceExercises as javascriptPracticeExercises } from "./javascript/practice-exercises";
import type { PracticeExercise } from "./python/practice-exercises";

export type Language = "python" | "javascript";

export const LANGUAGES: Language[] = ["python", "javascript"];

export const LANG_META: Record<Language, { label: string; slug: string; heroCode: string }> = {
  python: {
    label: "Python",
    slug: "python",
    heroCode: `def learn_python():
    while not done:
        practice()
        quiz()
    if success:
        print("You did it! 🎉")
    return certificate`,
  },
  javascript: {
    label: "JavaScript",
    slug: "javascript",
    heroCode: `async function learnJS() {
  while (!done) {
    await practice();
    await takeQuiz();
  }
  if (success) {
    console.log("You did it! 🎉");
  }
  return certificate;
}`,
  },
};

export function isLanguage(value: string | undefined | null): value is Language {
  return value === "python" || value === "javascript";
}

export function getTopics(lang: Language): Topic[] {
  return lang === "python" ? pythonTopics : javascriptTopics;
}

export function getExtraQuiz(lang: Language): Record<string, QuizQuestion[]> {
  return lang === "python" ? pythonExtraQuiz : javascriptExtraQuiz;
}

export function getPracticeExercises(lang: Language): PracticeExercise[] {
  return lang === "python" ? pythonPracticeExercises : javascriptPracticeExercises;
}

export function getQuestionSectionModule(lang: Language) {
  return lang === "python"
    ? () => import("./python/question-sections")
    : () => import("./javascript/question-sections");
}

export function getTopicBySlug(lang: Language, slug: string): Topic | undefined {
  return getTopics(lang).find((t) => t.slug === slug);
}

export function getLessonBySlug(lang: Language, topicSlug: string, lessonSlug: string): Lesson | undefined {
  return getTopicBySlug(lang, topicSlug)?.lessons.find((l) => l.slug === lessonSlug);
}

export function getTotalLessons(lang: Language): number {
  return getTopics(lang).reduce((acc, t) => acc + t.lessons.length, 0);
}

export function getNextLesson(lang: Language, currentTopicSlug: string, currentLessonSlug: string): { topicSlug: string; lessonSlug: string } | null {
  const ts = getTopics(lang);
  for (let i = 0; i < ts.length; i++) {
    const topic = ts[i];
    for (let j = 0; j < topic.lessons.length; j++) {
      if (topic.slug === currentTopicSlug && topic.lessons[j].slug === currentLessonSlug) {
        if (j + 1 < topic.lessons.length) {
          return { topicSlug: topic.slug, lessonSlug: topic.lessons[j + 1].slug };
        }
        if (i + 1 < ts.length) {
          return { topicSlug: ts[i + 1].slug, lessonSlug: ts[i + 1].lessons[0].slug };
        }
        return null;
      }
    }
  }
  return null;
}

export function getFirstLessonHref(lang: Language): string {
  const first = getTopics(lang)[0];
  return `/${lang}/learn/${first?.slug}/${first?.lessons[0]?.slug}`;
}