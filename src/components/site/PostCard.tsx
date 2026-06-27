import { Link } from "@tanstack/react-router";
import { Calendar, MessageCircle } from "lucide-react";
import type { Post } from "@/lib/posts";

type Variant = "hero" | "stack" | "grid" | "list" | "mini";

export function PostCard({ post, variant = "grid" }: { post: Post; variant?: Variant }) {
  if (variant === "hero") {
    return (
      <Link to="/posts/$slug" params={{ slug: post.slug }} className="group block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 cat-tag">{post.category}</span>
        </div>
        <div className="pt-5">
          <h2 className="font-display text-[28px] font-bold leading-[1.15] text-ink transition-colors group-hover:text-brand">
            {post.title}
          </h2>
          <Meta post={post} className="mt-3" />
          <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-ink-soft">{post.excerpt}</p>
        </div>
      </Link>
    );
  }

  if (variant === "stack") {
    return (
      <Link to="/posts/$slug" params={{ slug: post.slug }} className="group block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 cat-tag">{post.category}</span>
        </div>
        <h3 className="mt-3 font-display text-[17px] font-bold leading-[1.25] text-ink transition-colors group-hover:text-brand">
          {post.title}
        </h3>
        <Meta post={post} className="mt-2" small />
      </Link>
    );
  }

  if (variant === "list") {
    return (
      <Link
        to="/posts/$slug"
        params={{ slug: post.slug }}
        className="group flex gap-3 border-b border-rule pb-4 last:border-b-0 last:pb-0"
      >
        <div className="relative h-[72px] w-[88px] shrink-0 overflow-hidden">
          <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0">
          <h4 className="line-clamp-2 font-display text-[14px] font-bold leading-[1.3] text-ink transition-colors group-hover:text-brand">
            {post.title}
          </h4>
          <p className="mt-1.5 text-[11px] uppercase tracking-[0.1em] text-ink-soft">{post.date}</p>
        </div>
      </Link>
    );
  }

  if (variant === "mini") {
    return (
      <Link
        to="/posts/$slug"
        params={{ slug: post.slug }}
        className="group flex items-start gap-3 border-b border-rule pb-3 last:border-0"
      >
        <span className="font-display text-2xl font-black leading-none text-brand">
          {String((post as Post & { idx?: number }).slug.length % 9 + 1).padStart(2, "0")}
        </span>
        <h4 className="line-clamp-2 text-[13px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
          {post.title}
        </h4>
      </Link>
    );
  }

  // grid
  return (
    <Link to="/posts/$slug" params={{ slug: post.slug }} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 cat-tag">{post.category}</span>
      </div>
      <div className="border border-t-0 border-rule p-5">
        <h3 className="font-display text-[19px] font-bold leading-[1.25] text-ink transition-colors group-hover:text-brand">
          {post.title}
        </h3>
        <p className="mt-2.5 line-clamp-3 text-[14px] leading-relaxed text-ink-soft">{post.excerpt}</p>
        <div className="mt-4 border-t border-rule pt-3">
          <Meta post={post} small />
        </div>
      </div>
    </Link>
  );
}

function Meta({
  post,
  small,
  className = "",
}: {
  post: Post;
  small?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 text-ink-soft ${className}`}>
      <span className={`flex items-center gap-1.5 ${small ? "text-[11px]" : "text-xs"}`}>
        <Calendar className="h-3 w-3 text-brand" />
        <span className="uppercase tracking-[0.1em]">{post.date}</span>
      </span>
      <span className={`flex items-center gap-1.5 text-brand ${small ? "text-[11px]" : "text-xs"}`}>
        <MessageCircle className="h-3 w-3" />
        <span className="uppercase tracking-[0.1em]">Sem comentários</span>
      </span>
    </div>
  );
}
