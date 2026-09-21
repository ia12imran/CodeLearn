import { LANGUAGES, getTopics } from "@/data/index";
import LearnPageClient from "./LearnPageClient";

export function generateStaticParams() {
  return LANGUAGES.flatMap((lang) =>
    getTopics(lang).flatMap((topic) =>
      topic.lessons.map((lesson) => ({
        lang,
        slug: topic.slug,
        lesson: lesson.slug,
      }))
    )
  );
}

export default async function LearnPage({ params }: { params: Promise<{ lang: string; slug: string; lesson: string }> }) {
  const { lang, slug, lesson } = await params;
  return <LearnPageClient lang={lang} slug={slug} lesson={lesson} />;
}