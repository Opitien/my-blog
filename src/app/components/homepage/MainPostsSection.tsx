import PostCard from "../post/PostCard";
import LoadMoreBar from "../post/LoadMoreBar";
import ScrollReveal from "../layout/ScrollReveal";

export default function MainPostsSection() {
  const posts = [
    { title: "Integer Maecenas Eget Viverra", img: "/images/wave-beach.jpg", category: "Nature" },
    { title: "Aenean eleifend ante maecenas", img: "/images/mountain-lake.jpg", category: "Travel" },
    { title: "Integer Maecenas Eget Viverra", img: "/images/night-rocks.jpg", category: "Camping" },
    { title: "Integer Maecenas Eget Viverra", img: "/images/yellow-jacket-mountain.jpg", category: "Hiking" },
    { title: "Aenean eleifend ante maecenas", img: "/images/city-photographer.jpg", category: "Photography" },
    { title: "Integer Maecenas Eget Viverra", img: "/images/city-lady.jpg", category: "Lifestyle" },
    { title: "Integer Maecenas Eget Viverra", img: "/images/cliff-lake-red-jacket.jpg", category: "Adventure" },
    { title: "Aenean eleifend ante maecenas", img: "/images/desert-road.jpg", category: "Road Trip" },
    { title: "Integer Maecenas Eget Viverra", img: "/images/airport-passports.jpg", category: "Travel Tips" },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <ScrollReveal key={i} delay={(i % 3) * 0.1}>
              <PostCard
                title={post.title}
                imageSrc={post.img}
                category={post.category}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <LoadMoreBar />
      </div>
    </section>
  );
}
