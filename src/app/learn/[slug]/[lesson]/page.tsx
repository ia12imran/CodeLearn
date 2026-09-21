import LearnPageClient from "./LearnPageClient";
import { topics } from "@/data/topics";

export function generateStaticParams() {
  return topics.flatMap((topic) =>
    topic.lessons.map((lesson) => ({
      slug: topic.slug,
      lesson: lesson.slug,
    }))
  );
}

export default async function LearnPage() {
  return <LearnPageClient />;
}
