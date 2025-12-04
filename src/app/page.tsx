'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import gsap from 'gsap';

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
      });

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
      });

      gsap.from('.hero-button', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.8,
        stagger: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-linear-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Learn from the{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
              World's Best
            </span>{' '}
            Instructors
          </h1>
          
          <p className="hero-subtitle text-xl text-gray-600 dark:text-gray-300 mt-6 mb-10">
            Master new skills with interactive courses, hands-on projects, and expert mentorship.
            Join 500,000+ learners worldwide.
          </p>

          <div className="hero-button flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-shadow">
              Explore Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            
            <button className="flex items-center justify-center border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </div>

          <div className="hero-button mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">500K+</div>
              <div className="text-gray-600 dark:text-gray-400">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">1.2K+</div>
              <div className="text-gray-600 dark:text-gray-400">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">200+</div>
              <div className="text-gray-600 dark:text-gray-400">Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">98%</div>
              <div className="text-gray-600 dark:text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-blue-500/10 to-purple-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
    </section>
  );
}