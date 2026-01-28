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
            category="Nature"
          />
          <PostCard
            title="Aenean eleifend ante maecenas"
            imageSrc="/images/mountain-lake.jpg"
            category="Travel"
          />
          <PostCard
            title="Integer Maecenas Eget Viverra"
            imageSrc="/images/night-rocks.jpg"
            category="Camping"
          />

          {/* Row 2 */}
          <PostCard
            title="Integer Maecenas Eget Viverra"
            imageSrc="/images/yellow-jacket-mountain.jpg"
            category="Hiking"
          />
          <PostCard
            title="Aenean eleifend ante maecenas"
            imageSrc="/images/city-photographer.jpg"
            category="Photography"
          />
          <PostCard
            title="Integer Maecenas Eget Viverra"
            imageSrc="/images/city-lady.jpg"
            category="Lifestyle"
          />

          {/* Row 3 */}
          <PostCard
            title="Integer Maecenas Eget Viverra"
            imageSrc="/images/cliff-lake-red-jacket.jpg"
            category="Adventure"
          />
          <PostCard
            title="Aenean eleifend ante maecenas"
            imageSrc="/images/desert-road.jpg"
            category="Road Trip"
          />
          <PostCard
            title="Integer Maecenas Eget Viverra"
            imageSrc="/images/airport-passports.jpg"
            category="Travel Tips"
          />
        </div>
      </div>

      <LoadMoreBar />
    </section>
  );
}
