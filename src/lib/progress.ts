"use client";

import { ProgressData } from "@/data/types";

const STORAGE_KEY = "pylearn_progress";

export function getProgress(): ProgressData {
  if (typeof window === "undefined") {
    return { completedLessons: [], quizScores: {}, lastVisited: null };
  }
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return { completedLessons: [], quizScores: {}, lastVisited: null };
  return JSON.parse(raw);
}

export function saveProgress(data: ProgressData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function markLessonComplete(topicSlug: string, lessonSlug: string) {
  const progress = getProgress();
  const key = `${topicSlug}/${lessonSlug}`;
  if (!progress.completedLessons.includes(key)) {
    progress.completedLessons.push(key);
    saveProgress(progress);
  }
}

export function saveQuizScore(topicSlug: string, lessonSlug: string, score: number) {
  const progress = getProgress();
  const key = `${topicSlug}/${lessonSlug}`;
  progress.quizScores[key] = score;
  saveProgress(progress);
}

export function isLessonComplete(topicSlug: string, lessonSlug: string): boolean {
  const progress = getProgress();
  return progress.completedLessons.includes(`${topicSlug}/${lessonSlug}`);
}

export function getCompletionPercentage(): number {
  const progress = getProgress();
  const totalKey = "pylearn_total_lessons";
  const total = parseInt(localStorage.getItem(totalKey) || "100", 10);
  return Math.round((progress.completedLessons.length / total) * 100);
}
