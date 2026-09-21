"use client";

import { ProgressData } from "@/data/types";
import { Language } from "@/data/index";

function storageKey(lang: Language): string {
  return `${lang}_progress`;
}

function totalKey(lang: Language): string {
  return `${lang}_total_lessons`;
}

export function getProgress(lang: Language): ProgressData {
  if (typeof window === "undefined") {
    return { completedLessons: [], quizScores: {}, lastVisited: null };
  }
  const raw = localStorage.getItem(storageKey(lang));
  if (!raw) return { completedLessons: [], quizScores: {}, lastVisited: null };
  return JSON.parse(raw);
}

export function saveProgress(lang: Language, data: ProgressData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(storageKey(lang), JSON.stringify(data));
}

export function markLessonComplete(lang: Language, topicSlug: string, lessonSlug: string) {
  const progress = getProgress(lang);
  const key = `${topicSlug}/${lessonSlug}`;
  if (!progress.completedLessons.includes(key)) {
    progress.completedLessons.push(key);
    saveProgress(lang, progress);
  }
}

export function saveQuizScore(lang: Language, topicSlug: string, lessonSlug: string, score: number) {
  const progress = getProgress(lang);
  const key = `${topicSlug}/${lessonSlug}`;
  progress.quizScores[key] = score;
  saveProgress(lang, progress);
}

export function isLessonComplete(lang: Language, topicSlug: string, lessonSlug: string): boolean {
  const progress = getProgress(lang);
  return progress.completedLessons.includes(`${topicSlug}/${lessonSlug}`);
}

export function getCompletionPercentage(lang: Language): number {
  if (typeof window === "undefined") return 0;
  const progress = getProgress(lang);
  const total = parseInt(localStorage.getItem(totalKey(lang)) || "100", 10);
  if (total === 0) return 0;
  return Math.round((progress.completedLessons.length / total) * 100);
}