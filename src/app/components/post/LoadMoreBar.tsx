// src/app/components/post/LoadMoreBar.tsx
export default function LoadMoreBar() {
  return (
    <div className="flex justify-center py-10">
      <button className="rounded-xs border border-border bg-surface px-8 py-3 text-sm font-semibold text-foreground hover:bg-[black] hover:text-[white] transition duration-300">
        Load More
      </button>
    </div>
  );
}
