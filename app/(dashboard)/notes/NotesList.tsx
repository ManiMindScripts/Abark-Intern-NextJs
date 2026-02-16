
"use client";

import { useState, useEffect } from "react";
import { debounce } from "lodash";
import Link from "next/link";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  userId?: number;
}

interface NotesListProps {
  initialNotes: Note[];
}

export default function NotesList({ initialNotes }: NotesListProps) {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "title">("date");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const NOTES_PER_PAGE = 5;

  const applyFilters = () => {
    setLoading(true);

    
    let filtered = initialNotes.filter(
      (n) =>
        (n.title?.toString().toLowerCase() || "").includes(search.toLowerCase()) ||
        (n.content?.toString().toLowerCase() || "").includes(search.toLowerCase())
    );

    
    if (sortBy === "title") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    
    const start = (page - 1) * NOTES_PER_PAGE;
    const paginated = filtered.slice(start, start + NOTES_PER_PAGE);

    setNotes(paginated);
    setTotalPages(Math.ceil(filtered.length / NOTES_PER_PAGE));
    setLoading(false);
  };

  const debouncedApply = debounce(applyFilters, 300);

  useEffect(() => {
    applyFilters();
  }, [sortBy, page]);

  useEffect(() => {
    setPage(1); 
    debouncedApply();
  }, [search]);

  return (
    <div>
    
      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search notes..."
          className="border rounded-lg px-4 py-2 w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border rounded-lg px-4 py-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "date" | "title")}
        >
          <option value="date">Sort by Date</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="text-center py-20">Loading notes...</div>
      ) : notes.length === 0 ? (
        <div className="text-gray-500 text-center py-20">No notes found.</div>
      ) : (
        <div className="grid gap-6">
          {notes.map((note) => (
            <div
              key={note.id}
              className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
              <p className="text-gray-600 line-clamp-3">{note.content}</p>
              <div className="mt-4 flex justify-between text-sm text-gray-400">
                <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                <Link href={`/notes/${note.id}`} className="text-black font-medium">
                  View →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-3 py-1">
            {page} / {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}