"use client";

import { useEffect, useState } from "react";

export default function CourseDetails({ params }: any) {
  const { id } = params;
  const [course, setCourse] = useState<any>(null);

  // fetch single course details
  useEffect(() => {
    fetch(`http://localhost:5000/courses/${id}`)
      .then(res => res.json())
      .then(data => setCourse(data));
  }, [id]);

  if (!course) return <p className="p-10">Loading...</p>;

  return (
    <div className="px-6 py-6">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-600 mb-8">{course.description}</p>

      {/* ------------ Video Grid (4 per row) ------------ */}
      <div className="grid md:grid-cols-4 gap-6">
        {course.videos.map((url: string, index: number) => (
          <div key={index} className="w-full h-48 rounded-lg overflow-hidden shadow-sm">
            <iframe
              className="w-full h-full"
              src={url}
              title="Course Video"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
