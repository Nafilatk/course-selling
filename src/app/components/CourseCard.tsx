// "use client";
// import Link from 'next/link';
// import { Course } from '@/type';

// export default function CourseCard({ course }: { course: Course }) {
//     return (
//         <Link href={`/course/${course.id}`} className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
//             <div className="aspect-video w-full bg-gray-200 relative">
//                 <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
//             </div>
//             <div className="p-3 bg-white">
//                 <h3 className="text-sm font-semibold line-clamp-2">{course.title}</h3>
//                 <p className="text-xs mt-1 text-gray-500 capitalize">{course.category}</p>
//             </div>
//         </Link>
//     );
// }