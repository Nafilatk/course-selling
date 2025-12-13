"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // Fetch courses from JSON server
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  // Filtered courses
  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "all" || c.category === category)
  );

  return (
    <div className="flex min-h-screen px-6 py-6 gap-6">

      {/* ---------------- Sidebar ---------------- */}
      <aside className="w-64 border rounded-xl p-4 h-fit shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full p-2 border rounded-lg mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category */}
        <h3 className="font-semibold mb-2">Category</h3>
        <select
          className="w-full border p-2 rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
        </select>
      </aside>

      {/* ---------------- Courses List ---------------- */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6">Courses</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">
                {course.description}
              </p>
              <p className="mt-3 text-blue-600 font-medium">
                View Course →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
