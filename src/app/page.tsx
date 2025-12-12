"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // GSAP or Three.js animations can be added later here
  }, []);

  return (
    <main className="min-h-screen">
      {/* ---------- Hero Section ---------- */}
      <section>
        <h1>Welcome to Learnest.ai</h1>
        <p>Your personalized course learning platform</p>
        <button>Explore Courses</button>
      </section>

      {/* ---------- Features Section ---------- */}
      <section>
        <h2>Why Learn With Us?</h2>
        <ul>
          <li>High-quality courses</li>
          <li>Downloadable ebooks</li>
          <li>Track your learning history</li>
          <li>Profile-based personalized content</li>
        </ul>
      </section>

      {/* ---------- Courses Preview ---------- */}
      <section>
        <h2>Popular Courses</h2>
        <div>
          <div>
            <h3>Frontend Development</h3>
            <p>React, Next.js, Tailwind</p>
          </div>
          <div>
            <h3>Backend Development</h3>
            <p>Python, FastAPI, Django</p>
          </div>
          <div>
            <h3>Full Stack Roadmap</h3>
            <p>Step-by-step learning guide</p>
          </div>
        </div>
      </section>

      {/* ---------- Ebook Block ---------- */}
      <section>
        <h2>Ebooks</h2>
        <p>Download premium study materials for free.</p>
        <button>View Ebooks</button>
      </section>

      {/* ---------- Call to Action ---------- */}
      <section>
        <h2>Ready to Start Learning?</h2>
        <button>Get Started</button>
      </section>
    </main>
  );
}
