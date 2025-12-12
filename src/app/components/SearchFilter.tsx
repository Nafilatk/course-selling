"use client";
import React from 'react';


export default function SearchFilter({ search, setSearch, category, setCategory }: { search: string; setSearch: (s: string) => void; category: string; setCategory: (c: string) => void; }) {
    return (
        <div className="flex gap-2 flex-col sm:flex-row items-stretch sm:items-center mb-4">
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search courses..." className="flex-1 rounded border px-3 py-2" />
            <select value={category} onChange={e => setCategory(e.target.value)} className="rounded border px-3 py-2">
                <option value="">All Categories</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="cybersecurity">Cyber Security</option>
            </select>
        </div>
    );
}