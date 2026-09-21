import Link from "next/link";
import { ArrowRight, BookOpen, Code2, FlaskConical } from "lucide-react";
import { getTopics, getTotalLessons, getPracticeExercises, LANGUAGES, LANG_META } from "@/data/index";

export default function Home() {
  const stats = LANGUAGES.map((lang) => {
    const topics = getTopics(lang);
    const totalLessons = getTotalLessons(lang);
    const totalQuiz = topics.reduce(
      (a, t) => a + t.lessons.reduce((b, l) => b + l.quiz.length, 0),
      0
    );
    return {
      lang,
      lessons: totalLessons,
      quiz: totalQuiz,
      practice: getPracticeExercises(lang).length,
    };
  });

  const totalLessons = stats.reduce((a, s) => a + s.lessons, 0);
  const totalQuiz = stats.reduce((a, s) => a + s.quiz, 0);
  const totalPractice = stats.reduce((a, s) => a + s.practice, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl mb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800" />
        <div className="absolute inset-0 opacity-10 select-none pointer-events-none hidden sm:block">
          <pre className="absolute top-6 right-6 text-[11px] leading-tight font-mono text-white whitespace-pre">{`async function learnJS() {
  while (!done) {
    await practice();
    await takeQuiz();
  }
  return certificate;
}`}</pre>
        </div>
        <div className="relative px-8 sm:px-12 py-12 sm:py-16 text-white">
          <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur px-3 py-1 rounded-full text-xs font-medium mb-5">
            <BookOpen size={14} />
            Interactive Learning For Python &amp; JavaScript
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            Master Python
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
              &amp; JavaScript.
            </span>
            <br />
            Code. Test. Win.
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl">
            Bite-size lessons, hands-on coding practice, and thousands of quiz questions.
            No setup. No hassle. Just code.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/python"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition shadow-lg shadow-blue-900/30"
            >
              Start with Python <ArrowRight size={18} />
            </Link>
            <Link
              href="/javascript"
              className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-950 font-semibold px-7 py-3.5 rounded-xl hover:bg-yellow-300 transition shadow-lg shadow-yellow-900/30"
            >
              Start with JavaScript <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        {[
          { icon: BookOpen, label: "Lessons", value: totalLessons, color: "text-blue-600 bg-blue-100" },
          { icon: FlaskConical, label: "Quiz Questions", value: totalQuiz, color: "text-purple-600 bg-purple-100" },
          { icon: Code2, label: "Practice Exercises", value: totalPractice, color: "text-green-600 bg-green-100" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border border-gray-200 p-5 text-center sm:text-left">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 mx-auto sm:mx-0 ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Language cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {LANGUAGES.map((lang) => {
          const s = stats.find((x) => x.lang === lang)!;
          const python = lang === "python";
          return (
            <Link
              key={lang}
              href={`/${lang}`}
              className={`group relative overflow-hidden rounded-3xl p-8 text-white transition hover:shadow-2xl ${
                python
                  ? "bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800"
                  : "bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-500"
              }`}
            >
              <div className="absolute inset-0 opacity-10 select-none pointer-events-none hidden sm:block">
                <pre className={`absolute ${python ? "top-6 right-6" : "top-6 right-6"} text-[10px] leading-tight font-mono text-white whitespace-pre`}>
                  {LANG_META[lang].heroCode}
                </pre>
              </div>
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 ${python ? "bg-white/20" : "bg-white/25"}`}>
                  {python ? "🐍" : "⚡"}
                </div>
                <h2 className="text-3xl font-extrabold mb-2">Learn {LANG_META[lang].label}</h2>
                <p className={python ? "text-blue-100 mb-6 max-w-sm" : "text-yellow-50 mb-6 max-w-sm"}>
                  {python
                    ? "From beginner syntax to automation testing — the complete Python journey."
                    : "Modern JavaScript: the language of the web, automation, async, and the DOM."}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${python ? "bg-white/20" : "bg-white/25"}`}>
                    {s.lessons} lessons
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${python ? "bg-white/20" : "bg-white/25"}`}>
                    {s.quiz}+ quiz questions
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${python ? "bg-white/20" : "bg-white/25"}`}>
                    {s.practice} practice exercises
                  </span>
                </div>
                <span
                  className={`inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl transition ${
                    python ? "bg-white text-blue-700 group-hover:bg-blue-50" : "bg-white text-amber-700 group-hover:bg-yellow-50"
                  }`}
                >
                  Start Learning <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="relative">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to Start Coding?</h2>
          <p className="text-slate-300 mb-6">Pick a language and begin your journey today — it&apos;s free.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/python"
              className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-xl hover:bg-slate-100 transition shadow-lg"
            >
              🐍 Learn Python <ArrowRight size={18} />
            </Link>
            <Link
              href="/javascript"
              className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-950 font-semibold px-6 py-3 rounded-xl hover:bg-yellow-300 transition shadow-lg"
            >
              ⚡ Learn JavaScript <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}