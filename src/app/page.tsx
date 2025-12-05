"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Star, Users, Award, BookOpen } from 'lucide-react';

export default function HomePage() {
  const features = [
    { icon: BookOpen, title: '500+ Courses', description: 'Learn anything' },
    { icon: Users, title: '50K+ Students', description: 'Join the community' },
    { icon: Star, title: 'Expert Instructors', description: 'Learn from the best' },
    { icon: Award, title: 'Certification', description: 'Get certified' },
  ];

  const categories = [
    { name: 'Programming', courses: 120, color: 'bg-blue-500' },
    { name: 'Design', courses: 80, color: 'bg-purple-500' },
    { name: 'Business', courses: 65, color: 'bg-green-500' },
    { name: 'Data Science', courses: 45, color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">New Skills</span> Online
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              Discover thousands of courses taught by industry experts. Start learning today and advance your career.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-shadow"
              >
                Browse Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore courses by category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link
                  href={`/courses?category=${category.name.toLowerCase()}`}
                  className="block p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all"
                >
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <span className="text-2xl text-white">
                      {category.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {category.courses} courses
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Learning Today
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of students who are already advancing their careers with our courses.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}