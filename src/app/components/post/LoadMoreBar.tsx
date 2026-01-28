export default function LoadMoreBar() {
  return (
    <div className="flex justify-center py-10">
      <button
      type="button"
      className="rounded-sm border border-border bg-surface px-8 py-3 text-sm font-semibold text-foreground hover:bg-black hover:text-white shadow-sm hover:shadow-md transition duration-300 ease-in-out"
      >
        Load More
      </button>
    </div>
  );
}
