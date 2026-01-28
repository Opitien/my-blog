// src/app/components/post/PostCard.tsx
import Image from "next/image";

type PostCardProps = {
  title: string;
  imageSrc: string;
  category?: string;
};

export default function PostCard({ title, imageSrc, category = "Travel" }: PostCardProps) {
  return (
    <article className="group flex flex-col bg-surface">
      {/* Image wrapper */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-200">
        {/* Skeleton placeholder */}
        <div className="absolute inset-0 animate-pulse bg-gray-300" />

        {/* Image */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />

        {/* Glassmorphism tags */}
        <div className="absolute left-4 top-4 z-10 flex gap-2">
          <span className="rounded-sm px-3 py-1 text-[11px] font-medium text-white bg-white/25 backdrop-blur-md shadow-sm uppercase tracking-wide">
            {category}
          </span>
        </div>

        {/* Circular glass icon badge */}
        <button
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/25 backdrop-blur-md shadow-sm"
          aria-label="More options"
        >
          <span className="block h-3 w-4 border border-white/80 rounded-[3px] relative">
            <span className="absolute left-0.5 bottom-0.5 h-[7px] w-[7px] border-b border-l border-white/70 rotate-[-25deg]" />
            <span className="absolute right-0.5 top-0.5 h-1 w-1 rounded-full border border-white/80" />
          </span>
        </button>
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col py-6">
        <h3 className="mb-3 text-3xl font-semibold text-foreground">
          {title}
        </h3>

        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-muted">
          <div className="h-7 w-7 overflow-hidden rounded-full bg-border" />
          <span className="font-semibold text-base">Joanna Wellick</span>
          <span className="mx-1">•</span>
          <span>June 28, 2018</span>
          <span className="mx-1">•</span>
          <span>&lt;1K shares</span>
        </div>

        <p className="mb-4 text-sm text-muted leading-relaxed">
          Aliquam eleifend ante maecenas pulvinar montes lorem et pede duis dolor
          pretium donec dictum. Vivamus egestas justo etiam. Venenatis eget
          adipiscing luctus lorem.
        </p>

        <button className="mt-auto text-left text-sm font-semibold text-foreground underline underline-offset-4">
          View Post
        </button>
      </div>
    </article>
  );
}
