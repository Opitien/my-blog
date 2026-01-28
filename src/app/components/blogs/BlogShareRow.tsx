"use client";

export default function BlogShareRow() {
  return (
    <section className="max-w-6xl mx-auto px-10 py-12 border-t">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">Share this article</p>
        <div className="flex gap-4 text-gray-600">
          <span>Fb</span>
          <span>Tw</span>
          <span>Pt</span>
        </div>
      </div>
    </section>
  );
}
