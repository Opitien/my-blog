import Image from "next/image";
import PostCard from "../post/PostCard";

export default function RelatedPosts() {
  const posts = [
    {
      img: "/images/mountain-lake.jpg",
      title: "Integer Maecenas Eget Viverra",
      date: "June 28, 2017",
      category: "Nature",
    },
    {
      img: "/images/maecenas-tincidunt.jpg",
      title: "Aenean eleifend ante maecenas",
      date: "June 28, 2017",
      category: "Travel",
    },
    {
      img: "/images/featured-article.jpg",
      title: "Integer Maecenas Eget Viverra",
      date: "June 28, 2017",
      category: "Camping",
    },
    {
      img: "/images/desert-road.jpg",
      title: "Integer Maecenas Eget Viverra",
      date: "June 28, 2017",
      category: "Hiking",
    },
    {
      img: "/images/city-lady.jpg",
      title: "Aenean eleifend ante maecenas",
      date: "June 28, 2017",
      category: "Photography",
    },
    {
      img: "/images/cliff-lake-red-jacket.jpg",
      title: "Integer Maecenas Eget Viverra",
      date: "June 28, 2017",
      category: "Lifestyle",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <h3 className="text-[20px] font-bold uppercase tracking-widest mb-10 border-b border-gray-100 pb-5 text-[#1a1a1a]">
        You May Also Like
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {posts.map((post, i) => (
          <PostCard
            key={i}
            imageSrc={post.img}
            title={post.title}
            category={post.category}
          />
        ))}
      </div>
    </section>
  );
}
