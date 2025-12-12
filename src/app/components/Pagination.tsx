"use client";
import React from 'react';


export default function Pagination({ page, totalPages, onChange }: { page: number; totalPages: number; onChange: (p: number) => void; }) {
    const pages = [] as number[];
    const start = Math.max(1, page - 2);
    const end = Math.min(totalPages, page + 2);
    for (let i = start; i <= end; i++) pages.push(i);


    return (
        <div className="flex items-center gap-2 justify-center mt-6">
            <button onClick={() => onChange(Math.max(1, page - 1))} className="px-3 py-1 rounded border">Prev</button>
            {start > 1 && <button onClick={() => onChange(1)} className="px-3 py-1 rounded border">1</button>}
            {start > 2 && <span className="px-2">...</span>}
            {pages.map(p => (
                <button key={p} onClick={() => onChange(p)} className={`px-3 py-1 rounded ${p === page ? 'bg-black text-white' : 'border'}`}>
                    {p}
                </button>
            ))}
            {end < totalPages - 1 && <span>...</span>}
            {end < totalPages && <button onClick={() => onChange(totalPages)} className="px-3 py-1 rounded border">{totalPages}</button>}
            <button onClick={() => onChange(Math.min(totalPages, page + 1))} className="px-3 py-1 rounded border">Next</button>
        </div>
    );
}