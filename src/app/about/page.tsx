"use client"

import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Book, Heart } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { value: '50K+', label: 'Students', icon: Users },
    { value: '500+', label: 'Courses', icon: Book },
    { value: '100+', label: 'Instructors', icon: Users },
    { value: '95%', label: 'Satisfaction', icon: Heart },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To make quality education accessible to everyone, everywhere.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We maintain the highest standards in course content and instruction.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Learn anytime, anywhere with our mobile-friendly platform.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join a global community of learners and experts.'
    },
  ];

  const team = [
    { name: 'Alex Johnson', role: 'CEO & Founder', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
    { name: 'Sarah Chen', role: 'Head of Education', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
    { name: 'Mike Wilson', role: 'CTO', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike' },
    { name: 'Emma Davis', role: 'Content Director', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              About Learnest.ai
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl opacity-90"
            >
              We're on a mission to democratize education and empower learners worldwide.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Story */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Learnest.ai was founded in 2020 with a simple vision: to make quality education accessible to everyone, everywhere. 
                We believe that learning should be engaging, practical, and available to anyone with an internet connection.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                What started as a small platform with a handful of courses has grown into a global learning community with 
                thousands of students and hundreds of expert instructors. Our courses are designed by industry professionals 
                to ensure you gain practical, job-ready skills.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, we continue to innovate and expand our course offerings, always staying true to our core mission of 
                empowering people through education.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {member.name}
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are transforming their careers with Learnest.ai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors">
              Browse Courses
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}