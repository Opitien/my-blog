// src/app/components/homepage/MainPostsSection.tsx
import PostCard from "../post/PostCard";
import LoadMoreBar from "../post/LoadMoreBar";

export default function MainPostsSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0 pt-12 pb-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Row 1 */}
          <PostCard
            title="Integer Maecenas Eget Viverra"
            imageSrc="/images/wave-beach.jpg"
          />
          <PostCard
            title="Aenean eleifend ante maecenas"
            imageSrc="/images/mountain-lake.jpg"
          />
          <PostCard
            title="Integer Maecenas Eget Viverra"
            imageSrc="/images/night-rocks.jpg"
          />

          {/* Row 2 */}
          <PostCard
            title="Integer Maecenas Eget Viverra"
            imageSrc="/images/yellow-jacket-mountain.jpg"
          />
          <PostCard
            title="Aenean eleifend ante maecenas"
            imageSrc="/images/city-photographer.jpg"
          />
          <PostCard
            title="Integer Maecenas Eget Viverra"
            imageSrc="/images/city-lady.jpg"
          />

          {/* Row 3 */}
          <PostCard
            title="Integer Maecenas Eget Viverra"
            imageSrc="/images/cliff-lake-red-jacket.jpg"
          />
          <PostCard
            title="Aenean eleifend ante maecenas"
            imageSrc="/images/desert-road.jpg"
          />
          <PostCard
            title="Integer Maecenas Eget Viverra"
            imageSrc="/images/airport-passports.jpg"
          />
        </div>
      </div>

      <LoadMoreBar />
    </section>
  );
}
