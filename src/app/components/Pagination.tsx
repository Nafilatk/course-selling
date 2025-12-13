// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";

// interface Ebook {
//   id: number;
//   title: string;
//   course: string;
//   pdfUrl: string;
// }

// interface Category {
//   id: number;
//   name: string;
// }

// export default function EbookPage() {
//   const [ebooks, setEbooks] = useState<Ebook[]>([]);
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");

//   useEffect(() => {
//     fetch("http://localhost:3000/ebooks")
//       .then((res) => res.json())
//       .then((data) => setEbooks(data));

//     fetch("http://localhost:3000/categories")
//       .then((res) => res.json())
//       .then((data) => setCategories(data));
//   }, []);

//   const filteredEbooks = ebooks.filter(
//     (ebook) =>
//       (selectedCategory === "All" || ebook.course === selectedCategory) &&
//       ebook.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <main className="flex min-h-screen bg-gray-50">
//       <aside className="w-64 bg-white p-4 shadow-md">
//         <input
//           type="text"
//           placeholder="Search PDFs..."
//           className="w-full px-3 py-2 border rounded mb-4"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <h2 className="font-semibold mb-2">Categories</h2>
//         <ul className="space-y-2">
//           <li
//             className={`cursor-pointer ${
//               selectedCategory === "All" ? "font-bold" : ""
//             }`}
//             onClick={() => setSelectedCategory("All")}
//           >
//             All
//           </li>
//           {categories.map((cat) => (
//             <li
//               key={cat.id}
//               className={`cursor-pointer ${
//                 selectedCategory === cat.name ? "font-bold" : ""
//               }`}
//               onClick={() => setSelectedCategory(cat.name)}
//             >
//               {cat.name}
//             </li>
//           ))}
//         </ul>

//         <h2 className="font-semibold mt-6 mb-2">Courses</h2>
//         <ul className="space-y-1">
//           {[...new Set(ebooks.map((e) => e.course))].map((course, idx) => (
//             <li key={idx}>{course}</li>
//           ))}
//         </ul>
//       </aside>

//       <section className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {filteredEbooks.map((ebook) => (
//           <div
//             key={ebook.id}
//             className="bg-white p-4 rounded shadow hover:shadow-lg transition"
//           >
//             <h3 className="font-semibold mb-2">{ebook.title}</h3>
//             <p className="text-sm text-gray-500 mb-4">{ebook.course}</p>
//             <Link
//               href={ebook.pdfUrl}
//               target="_blank"
//               className="text-blue-600 underline"
//             >
//               View PDF
//             </Link>
//           </div>
//         ))}
//       </section>
//     </main>
//   );
// }
