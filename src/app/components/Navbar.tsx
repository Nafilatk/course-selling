"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart, Heart, User } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-green-800">Learnest.ai</h1>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className="text-gray-700 hover:text-green-700">Home</Link>
            <Link href="/courses" className="text-gray-700 hover:text-green-700">Courses</Link>
            <Link href="/ebooks" className="text-gray-700 hover:text-green-700">Ebooks</Link>
            <Link href="/about" className="text-gray-700 hover:text-green-700">About</Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
            <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />
            <Heart className="w-5 h-5 text-gray-600 cursor-pointer" />

            <div className="relative">
              <User
                className="w-6 h-6 text-gray-600 cursor-pointer"
                onClick={() => alert("Show profile dropdown")}
              />
            </div>
          </div>




          <div className="md:hidden flex items-center">
          
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          <Link href="/" className="block text-gray-700 hover:text-green-700">Home</Link>
          <Link href="/courses" className="block text-gray-700 hover:text-green-700">Courses</Link>
          <Link href="/ebooks" className="block text-gray-700 hover:text-green-700">Ebooks</Link>
          <Link href="/about" className="block text-gray-700 hover:text-green-700">About</Link>
          <div className="flex items-center space-x-4 mt-2">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
            <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />
            <Heart className="w-5 h-5 text-gray-600 cursor-pointer" />
            <User className="w-6 h-6 text-gray-600 cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
}
