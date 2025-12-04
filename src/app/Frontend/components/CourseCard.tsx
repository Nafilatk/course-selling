// import { Star, Users, Clock } from 'lucide-react';

// interface CourseCardProps {
//   title: string;
//   instructor: string;
//   category: string;
//   price: number;
//   rating: number;
//   image: string;
//   duration: string;
//   students: number;
//   level: string;
// }

// export default function CourseCard({
//   title,
//   instructor,
//   category,
//   price,
//   rating,
//   image,
//   duration,
//   students,
//   level,
// }: CourseCardProps) {
//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
//       <div className="relative overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//         <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
//           {level}
//         </div>
//       </div>

//       <div className="p-6">
//         <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
//           {category}
//         </span>
//         <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-2 line-clamp-2">
//           {title}
//         </h3>
//         <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
//           By {instructor}
//         </p>

//         <div className="flex items-center justify-between mt-4">
//           <div className="flex items-center space-x-2">
//             <div className="flex items-center">
//               <Star className="w-5 h-5 text-yellow-400 fill-current" />
//               <span className="ml-1 font-semibold">{rating}</span>
//             </div>
//             <div className="flex items-center text-gray-500">
//               <Users className="w-4 h-4 mr-1" />
//               <span className="text-sm">{students}</span>
//             </div>
//             <div className="flex items-center text-gray-500">
//               <Clock className="w-4 h-4 mr-1" />
//               <span className="text-sm">{duration}</span>
//             </div>
//           </div>

//           <div className="text-2xl font-bold text-gray-800 dark:text-white">
//             ${price}
//           </div>
//         </div>

//         <button className="w-full mt-6 bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }
