"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white text-black">

      <section className="w-full max-w-6xl px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Learn Anything, Anytime  
          <span className="text-blue-600"> With Learnest.ai</span>
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Start your learning journey with our high-quality courses, ebooks  
          and interactive lessons — designed just for you.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            Explore Courses
          </button>
          <button className="px-6 py-3 border border-gray-400 hover:bg-gray-100 rounded-lg">
            Download ebooks
          </button>
        </div>
      </section>

      <section className="w-full max-w-5xl px-6 py-16 grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold">🎓 Expert Courses</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Learn from the best instructors with real-world project-based content.
          </p>
        </div>

        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold">📚 Free Ebooks</h3>
          <p className="mt-2 text-gray-600 text-sm">
            High-quality ebooks covering development, design, and more.
          </p>
        </div>

        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold">⚡ Fast Learning</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Short, beginner-friendly lessons with practical examples.
          </p>
        </div>
      </section>

      <section className="w-full max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Popular Courses</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <h4 className="text-xl font-semibold">Complete React Course</h4>
            <p className="text-gray-600 text-sm mt-2">
              Master modern React with real projects.
            </p>
          </div>

          <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <h4 className="text-xl font-semibold">JavaScript Mastery</h4>
            <p className="text-gray-600 text-sm mt-2">
              Everything from basics to advanced concepts.
            </p>
          </div>

          <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <h4 className="text-xl font-semibold">Python Backend Course</h4>
            <p className="text-gray-600 text-sm mt-2">
              Build APIs with FastAPI or Django.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
