// "use client"

// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Search, Filter, ChevronRight, Star, Users, Clock } from 'lucide-react';
// import { api } from '@/lib/api';

// interface Course {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   instructor: string;
//   price: number;
//   rating: number;
//   thumbnail: string;
//   duration: string;
//   totalStudents: number;
//   level: string;
// }

// export default function CoursesPage() {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [categories, setCategories] = useState<string[]>([]);

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   useEffect(() => {
//     filterCourses();
//   }, [searchQuery, selectedCategory, courses]);

//   const fetchCourses = async () => {
//     try {
//       setIsLoading(true);
//       const response = await api.getCourses();
//       setCourses(response.data);
      
//       // Extract unique categories
//       const uniqueCategories = ['all', ...Array.from(new Set(response.data.map((course: Course) => course.category)))];
//       setCategories(uniqueCategories as string[]);
      
//       setFilteredCourses(response.data);
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const filterCourses = () => {
//     let filtered = [...courses];

//     // Filter by search query
//     if (searchQuery.trim()) {
//       filtered = filtered.filter(course =>
//         course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Filter by category
//     if (selectedCategory !== 'all') {
//       filtered = filtered.filter(course => course.category === selectedCategory);
//     }

//     setFilteredCourses(filtered);
//   };

//   const CourseCard = ({ course }: { course: Course }) => (
//     <Link href={`/courses/${course.id}`}>
//       <motion.div
//         whileHover={{ y: -5 }}
//         className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
//       >
//         {/* Course Image */}
//         <div className="relative h-48 overflow-hidden">
//           <img
//             src={course.thumbnail || `https://picsum.photos/400/300?random=${course.id}`}
//             alt={course.title}
//             className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//           />
//           <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
//             {course.level}
//           </div>
//         </div>

//         {/* Course Info */}
//         <div className="p-5">
//           <div className="flex justify-between items-start mb-3">
//             <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
//               {course.category}
//             </span>
//             <span className="text-xl font-bold text-gray-900">
//               ${course.price}
//             </span>
//           </div>

//           <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
//             {course.title}
//           </h3>
          
//           <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//             {course.description}
//           </p>

//           <div className="flex items-center text-sm text-gray-500 mb-4">
//             <span>By </span>
//             <span className="font-medium ml-1 text-gray-800">{course.instructor}</span>
//           </div>

//           {/* Course Stats */}
//           <div className="flex items-center justify-between text-sm text-gray-600 border-t pt-4">
//             <div className="flex items-center">
//               <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
//               <span className="font-medium">{course.rating}</span>
//             </div>
//             <div className="flex items-center">
//               <Users className="w-4 h-4 mr-1" />
//               <span>{course.totalStudents}</span>
//             </div>
//             <div className="flex items-center">
//               <Clock className="w-4 h-4 mr-1" />
//               <span>{course.duration}</span>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </Link>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white">
//         <div className="container mx-auto px-4 py-16">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               Find Your Perfect Course
//             </h1>
//             <p className="text-xl text-blue-100 mb-8">
//               Learn from industry experts with hands-on projects and real-world examples
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Search and Filter Section */}
//       <div className="container mx-auto px-4 -mt-8">
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           {/* Search Bar */}
//           <div className="relative mb-6">
//             <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search courses by title, instructor, or keyword..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Categories */}
//           <div className="mb-6">
//             <div className="flex items-center mb-4">
//               <Filter className="w-5 h-5 text-gray-600 mr-2" />
//               <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                     selectedCategory === category
//                       ? 'bg-blue-600 text-white'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   {category.charAt(0).toUpperCase() + category.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Results Info */}
//           <div className="flex items-center justify-between">
//             <p className="text-gray-600">
//               Showing <span className="font-bold text-gray-900">{filteredCourses.length}</span> courses
//               {searchQuery && (
//                 <span> for "<span className="font-bold text-gray-900">{searchQuery}</span>"</span>
//               )}
//             </p>
//           </div>
//         </div>

//         {/* Loading State */}
//         {isLoading ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[1, 2, 3, 4, 5, 6].map((i) => (
//               <div key={i} className="bg-white rounded-xl shadow-md p-6 animate-pulse">
//                 <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
//                 <div className="h-4 bg-gray-200 rounded mb-2"></div>
//                 <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
//                 <div className="h-3 bg-gray-200 rounded mb-2"></div>
//                 <div className="h-3 bg-gray-200 rounded w-1/2"></div>
//               </div>
//             ))}
//           </div>
//         ) : filteredCourses.length > 0 ? (
//           <>
//             {/* Courses Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//               <AnimatePresence>
//                 {filteredCourses.map((course, index) => (
//                   <motion.div
//                     key={course.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <CourseCard course={course} />
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>

//             {/* No Results */}
//           </>
//         ) : (
//           <div className="text-center py-12">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
//               <Search className="w-8 h-8 text-gray-400" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
//             <p className="text-gray-600 mb-6">
//               Try adjusting your search or filter to find what you're looking for.
//             </p>
//             <button
//               onClick={() => {
//                 setSearchQuery('');
//                 setSelectedCategory('all');
//               }}
//               className="text-blue-600 hover:text-blue-700 font-medium"
//             >
//               Clear all filters
//             </button>
//           </div>
//         )}

//         {/* Featured Categories */}
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Categories</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {['Frontend', 'Backend', 'Data Science', 'Mobile'].map((category) => (
//               <div
//                 key={category}
//                 className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
//                 onClick={() => setSelectedCategory(category.toLowerCase())}
//               >
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//                   <div className="text-2xl">
//                     {category === 'Frontend' && '⚡'}
//                     {category === 'Backend' && '🖥️'}
//                     {category === 'Data Science' && '📊'}
//                     {category === 'Mobile' && '📱'}
//                   </div>
//                 </div>
//                 <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
//                 <p className="text-sm text-gray-600">20+ courses</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }