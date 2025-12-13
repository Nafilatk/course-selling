"use client";

import { useEffect, useState } from "react";

interface Ebook {
  id: number;
  courseId: number;
  courseTitle: string;
  category: string;
  videoTitle: string;
  pdfUrl: string;
}

export default function EbookPage() {
  const [ebooks, setEbooks] = useState<Ebook[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [course, setCourse] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/ebooks")
      .then(res => res.json())
      .then(data => {
        setEbooks(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const categories = Array.from(new Set(ebooks.map(e => e.category)));
  const courses = Array.from(new Set(ebooks.map(e => e.courseTitle)));

  const filteredEbooks = ebooks.filter(e =>
    e.videoTitle.toLowerCase().includes(search.toLowerCase()) &&
    (category === "all" || e.category === category) &&
    (course === "all" || e.courseTitle === course)
  );

  if (loading) {
    return <p className="text-center mt-20">Loading ebooks...</p>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50 p-6 gap-6">

\      <aside className="w-72 bg-white border rounded-xl p-4 h-fit shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Browse Notes</h2>



        <input
          type="text"
          placeholder="Search notes..."
          className="w-full p-2 border rounded-lg mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />



        <h3 className="font-semibold mb-2">Category</h3>
        <select
          className="w-full border p-2 rounded-lg mb-4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>



        <h3 className="font-semibold mb-2">Course</h3>
        <select
          className="w-full border p-2 rounded-lg"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="all">All</option>
          {courses.map((c, i) => (
            <option key={i} value={c}>{c}</option>
          ))}
        </select>
      </aside>




      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6">Ebooks & Notes</h1>

        {filteredEbooks.length === 0 ? (
          <p>No notes found.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {filteredEbooks.map(ebook => (
              <div
                key={ebook.id}
                className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold">{ebook.videoTitle}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {ebook.courseTitle}
                </p>
                <p className="text-xs text-gray-400 mb-3">
                  Category: {ebook.category}
                </p>

                <a
                  href={ebook.pdfUrl}
                  target="_blank"
                  className="text-blue-600 font-medium"
                >
                  📄 View PDF →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
