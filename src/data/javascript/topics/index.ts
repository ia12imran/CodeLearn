import type { Topic, Lesson } from "../../types";
import { CURRICULUM } from "../curriculum";

import intro from "./intro";
import basics from "./basics";
import controlFlow from "./control-flow";
import strings from "./strings";
import functions from "./functions";
import arrays from "./arrays";
import objects from "./objects";
import asyncTopic from "./async";
import classes from "./classes";
import dom from "./dom";
import modules from "./modules";
import scopeHoisting from "./scope-hoisting";
import errorHandling from "./error-handling";
import iterators from "./iterators";
import storageApis from "./storage-apis";
import testing from "./testing";
import performanceSecurity from "./performance-security";
import advanced from "./advanced";

export const topics: Topic[] = [
  intro,
  basics,
  controlFlow,
  strings,
  functions,
  arrays,
  objects,
  asyncTopic,
  classes,
  dom,
  modules,
  scopeHoisting,
  errorHandling,
  iterators,
  storageApis,
  testing,
  performanceSecurity,
  advanced,
];

/**
 * Guard against the theory files and the curriculum manifest drifting apart.
 * Runs at import time in dev and during build, so a mismatch fails loudly
 * instead of shipping a lesson with no questions behind it.
 */
function assertCurriculumInSync() {
  const bySlug = new Map(topics.map((t) => [t.slug, t]));
  const problems: string[] = [];

  for (const ref of CURRICULUM) {
    const actual = bySlug.get(ref.slug);
    if (!actual) {
      problems.push(`topic "${ref.slug}" is in the curriculum but has no theory file`);
      continue;
    }
    const actualSlugs = actual.lessons.map((l) => l.slug);
    const wantedSlugs = ref.lessons.map((l) => l.slug);
    for (const s of wantedSlugs) {
      if (!actualSlugs.includes(s)) problems.push(`${ref.slug}/${s}: lesson missing from theory file`);
    }
    for (const s of actualSlugs) {
      if (!wantedSlugs.includes(s)) problems.push(`${ref.slug}/${s}: lesson not in curriculum`);
    }
  }

  if (problems.length) {
    throw new Error(`JavaScript curriculum out of sync:\n  - ${problems.join("\n  - ")}`);
  }
}

assertCurriculumInSync();

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getLessonBySlug(topicSlug: string, lessonSlug: string): Lesson | undefined {
  const topic = getTopicBySlug(topicSlug);
  return topic?.lessons.find((l) => l.slug === lessonSlug);
}

export function getTotalLessons(): number {
  return topics.reduce((acc, t) => acc + t.lessons.length, 0);
}

export function getNextLesson(
  currentTopicSlug: string,
  currentLessonSlug: string
): { topicSlug: string; lessonSlug: string } | null {
  for (let i = 0; i < topics.length; i++) {
    const topic = topics[i];
    for (let j = 0; j < topic.lessons.length; j++) {
      if (topic.slug === currentTopicSlug && topic.lessons[j].slug === currentLessonSlug) {
        if (j + 1 < topic.lessons.length) {
          return { topicSlug: topic.slug, lessonSlug: topic.lessons[j + 1].slug };
        }
        if (i + 1 < topics.length) {
          return { topicSlug: topics[i + 1].slug, lessonSlug: topics[i + 1].lessons[0].slug };
        }
        return null;
      }
    }
  }
  return null;
}
