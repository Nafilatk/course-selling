"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { courseApi } from '@/app/lib/api';
import { Course, VideoItem } from '@/type'

export default function CourseDetailsPage() {
  const params = useParams();
  const id = Number(params.id);
  const [course, setCourse] = useState<Course | null>(null);
  const [selected, setSelected] = useState<VideoItem | null>(null);


  useEffect(() => {
    if (!id) return;
    (async () => {
      const res = await courseApi.getCourse(id);
      setCourse(res.data);
      setSelected(res.data.videos?.[0] || null);
    })();
  }, [id]);


  if (!course) return <div className="p-4">Loading...</div>;


  return (
    <main className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
      <p className="text-sm text-gray-500 mb-4">Category: {course.category}</p>
      <div className="space-y-4">
        <div>
          {selected ? (
            <div className="aspect-video bg-black">
              <iframe
                title={selected.title}
                src={`https://www.youtube.com/embed/${selected.youtubeId}`}
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : (
            <div className="aspect-video bg-gray-200 flex items-center justify-center">No videos</div>
          )}
          <h2 className="mt-3 font-semibold">{selected?.title}</h2>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Videos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {course.videos?.map(v => (
              <button onClick={() => setSelected(v)} key={v.id} className="flex gap-2 items-start p-2 rounded hover:bg-gray-100 w-full text-left">
                <img src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`} alt={v.title} className="w-36 h-20 object-cover rounded" />
                <div className="flex-1">
                  <div className="text-sm font-medium">{v.title}</div>
                  <div className="text-xs text-gray-500">Watch on YouTube</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}