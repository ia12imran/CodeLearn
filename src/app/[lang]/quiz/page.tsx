import Link from "next/link";
import { LANGUAGES, isLanguage } from "@/data/index";
import QuizClient from "./QuizClient";

export function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}

export default async function QuizPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Language not found</h2>
          <Link href="/" className="text-blue-600 hover:underline">
            Go home
          </Link>
        </div>
      </div>
    );
  }
  return <QuizClient lang={lang} />;
}