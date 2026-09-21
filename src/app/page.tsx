"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { topics, getTotalLessons } from "@/data/topics";
import { extraQuiz } from "@/data/extra-quiz";
import { practiceExercises } from "@/data/practice-exercises";
import { getProgress } from "@/lib/progress";
import TopicCard from "@/components/TopicCard";
import { BookOpen, Code2, FlaskConical, TrendingUp, ArrowRight, CheckCircle2, Trophy, Zap } from "lucide-react";

export default function Home() {
  const [completed, setCompleted] = useState(0);
  const total = getTotalLessons();

  useEffect(() => {
    const p = getProgress();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read persisted progress from localStorage on mount
    setCompleted(p.completedLessons.length);
    if (typeof window !== "undefined") {
      localStorage.setItem("pylearn_total_lessons", String(total));
    }
  }, [total]);

  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  const totalQuiz = topics.reduce(
    (a, t) => a + t.lessons.reduce((b, l) => b + l.quiz.length + (extraQuiz[`${t.slug}/${l.slug}`]?.length || 0), 0),
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl mb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800" />
        <div className="absolute inset-0 opacity-10 select-none pointer-events-none">
          <pre className="absolute top-6 right-6 text-[11px] leading-tight font-mono text-white whitespace-pre">{`def learn_python():
    while not done:
        practice()
        quiz()
    if success:
        print("You did it! 🎉")
    return certificate`}</pre>
        </div>
        <div className="relative px-8 sm:px-12 py-12 sm:py-16 text-white">
          <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur px-3 py-1 rounded-full text-xs font-medium mb-5">
            <Trophy size={14} />
            #1 Interactive Python Learning
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            Learn Python
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
              Code. Test. Win.
            </span>
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl">
            Master Python with bite-size lessons, hands-on coding practice,
            and thousands of quiz questions. No setup. No hassle. Just code.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/learn/intro/what-is-python"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition shadow-lg shadow-blue-900/30"
            >
              Start Learning <ArrowRight size={18} />
            </Link>
            <Link
              href="/practice"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition border border-white/20 backdrop-blur"
            >
              <Code2 size={18} /> Practice Code
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-950 font-semibold px-7 py-3.5 rounded-xl hover:bg-yellow-300 transition shadow-lg shadow-yellow-900/30"
            >
              <Zap size={18} /> Take a Quiz
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { icon: BookOpen, label: "Lessons", value: total, sub: "interactive", color: "text-blue-600 bg-blue-100" },
          { icon: FlaskConical, label: "Quiz Questions", value: totalQuiz, sub: "to test", color: "text-purple-600 bg-purple-100" },
          { icon: Code2, label: "Practice Exercises", value: practiceExercises.length, sub: "to solve", color: "text-green-600 bg-green-100" },
          { icon: TrendingUp, label: "Progress", value: `${percentage}%`, sub: "completed", color: "text-orange-600 bg-orange-100" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
            <div className="text-xs text-gray-400 mt-0.5">{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      {completed > 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              Your Progress
            </h3>
            <span className="text-sm text-gray-500">{completed}/{total} lessons completed</span>
          </div>
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-700"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      )}

      {/* Topics grid */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Python Topics</h2>
        <p className="text-gray-500">Master Python step by step, from basics to advanced concepts.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {topics.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} />
        ))}
      </div>

      {/* Featured row */}
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <Link href="/practice" className="group bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white hover:shadow-xl transition">
          <Code2 size={28} className="mb-3 opacity-90" />
          <h3 className="text-lg font-bold mb-1">Practice Challenges</h3>
          <p className="text-green-100 text-sm mb-4">Solve real coding problems with instant feedback.</p>
          <span className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
            View exercises <ArrowRight size={16} />
          </span>
        </Link>
        <Link href="/quiz" className="group bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white hover:shadow-xl transition">
          <FlaskConical size={28} className="mb-3 opacity-90" />
          <h3 className="text-lg font-bold mb-1">Quick Tests</h3>
          <p className="text-purple-100 text-sm mb-4">Challenge yourself with {totalQuiz}+ questions.</p>
          <span className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
            Start a quiz <ArrowRight size={16} />
          </span>
        </Link>
        <Link href="/learn/intro/what-is-python" className="group bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white hover:shadow-xl transition">
          <BookOpen size={28} className="mb-3 opacity-90" />
          <h3 className="text-lg font-bold mb-1">Structured Lessons</h3>
          <p className="text-blue-100 text-sm mb-4">Follow a proven path from zero to proficiency.</p>
          <span className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
            Explore topics <ArrowRight size={16} />
          </span>
        </Link>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="relative">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to Master Python?</h2>
          <p className="text-slate-300 mb-6">Join millions of learners. Start your journey today — it&apos;s free.</p>
          <Link
            href="/learn/intro/what-is-python"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-8 py-3.5 rounded-xl hover:bg-slate-100 transition shadow-lg"
          >
            Get Started Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}