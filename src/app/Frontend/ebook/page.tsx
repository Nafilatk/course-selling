"use client"

import { useState, useEffect } from 'react';
import { Search, Filter, BookOpen, Star, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Ebook {
  id: number;
  title: string;
  author: string;
  category: string;
  price: number;
  rating: number;
  pages: number;
  coverImage: string;
}

export default function EbooksPage() {
  const [ebooks, setEbooks] = useState<Ebook[]>([]);
  const [filteredEbooks, setFilteredEbooks] = useState<Ebook[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories] = useState(['all', 'Programming', 'Design', 'Business', 'Self-Help']);

  useEffect(() => {
    // Mock data - replace with API call
    const mockEbooks: Ebook[] = [
      {
        id: 1,
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Programming",
        price: 29.99,
        rating: 4.8,
        pages: 464,
        coverImage: "https://picsum.photos/300/400?random=1"
      },
      {
        id: 2,
        title: "The Design of Everyday Things",
        author: "Don Norman",
        category: "Design",
        price: 24.99,
        rating: 4.7,
        pages: 368,
        coverImage: "https://picsum.photos/300/400?random=2"
      },
      {
        id: 3,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self-Help",
        price: 19.99,
        rating: 4.9,
        pages: 320,
        coverImage: "https://picsum.photos/300/400?random=3"
      },
      {
        id: 4,
        title: "Python Crash Course",
        author: "Eric Matthes",
        category: "Programming",
        price: 34.99,
        rating: 4.6,
        pages: 560,
        coverImage: "https://picsum.photos/300/400?random=4"
      },
      {
        id: 5,
        title: "The Lean Startup",
        author: "Eric Ries",
        category: "Business",
        price: 22.99,
        rating: 4.5,
        pages: 336,
        coverImage: "https://picsum.photos/300/400?random=5"
      },
      {
        id: 6,
        title: "Deep Learning",
        author: "Ian Goodfellow",
        category: "Programming",
        price: 49.99,
        rating: 4.7,
        pages: 800,
        coverImage: "https://picsum.photos/300/400?random=6"
      },
    ];

    setEbooks(mockEbooks);
    setFilteredEbooks(mockEbooks);
  }, []);

  useEffect(() => {
    let filtered = [...ebooks];

    if (searchQuery) {
      filtered = filtered.filter(ebook =>
        ebook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ebook.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(ebook => ebook.category === selectedCategory);
    }

    setFilteredEbooks(filtered);
  }, [searchQuery, selectedCategory, ebooks]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Digital Library
            </h1>
            <p className="text-xl text-emerald-100 mb-8">
              Discover thousands of eBooks across all categories. Download and read anywhere.
            </p>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search eBooks by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-4">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Categories</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredEbooks.length} eBooks
          </p>
        </div>

        {/* eBooks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEbooks.map((ebook, index) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="flex p-6">
                  {/* Cover Image */}
                  <div className="w-32 flex-shrink-0 mr-6">
                    <img
                      src={ebook.coverImage}
                      alt={ebook.title}
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                  </div>

                  {/* eBook Info */}
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-3">
                      {ebook.category}
                    </span>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {ebook.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      By {ebook.author}
                    </p>

                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium mr-4">{ebook.rating}</span>
                      <BookOpen className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{ebook.pages} pages</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${ebook.price}
                      </span>
                      <button className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-md transition-shadow">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}