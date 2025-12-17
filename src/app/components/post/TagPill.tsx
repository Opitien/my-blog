// src/app/components/post/TagPill.tsx
import React from "react";

export default function TagPill() {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-200 cursor-pointer">
        Travel
      </span>
      <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full hover:bg-green-200 cursor-pointer">
        Lifestyle
      </span>
      <span className="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full hover:bg-purple-200 cursor-pointer">
        Photography
      </span>
      <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full hover:bg-yellow-200 cursor-pointer">
        Adventure
      </span>
    </div>
  );
}
