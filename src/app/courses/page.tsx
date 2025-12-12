"use client";
import React, { useEffect, useState } from 'react';
import { courseApi } from '../lib/api';
import type { Course } from '@/type'
import SearchFilter from '../components/SearchFilter';
import Pagination from '../components/Pagination';
import CourseCard from '../components/CourseCard';


export default function CoursePage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const limit = 20;


  useEffect(() => {
    let mounted = true;
    (async () => {
      const res = await courseApi.getCourses({ page, limit, search, category });
      if (!mounted) return;
      setCourses(res.data);
      setTotal(res.total);
    })();
    return () => { mounted = false };
  }, [page, search, category]);


  const totalPages = Math.max(1, Math.ceil(total / limit));


  return (
    <main className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <SearchFilter search={search} setSearch={(s) => { setPage(1); setSearch(s); }} category={category} setCategory={(c) => { setPage(1); setCategory(c); }} />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {courses.map(course => <CourseCard key={course.id} course={course} />)}
      </section>
      <Pagination page={page} totalPages={totalPages} onChange={(p) => setPage(p)} />
    </main>
  );
}