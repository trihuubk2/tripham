import { Calendar, Tag } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { ImageCarousel } from "./ImageCarousel";

interface LivestreamPostCardWithAlbumProps {
  title: string;
  description: string;
  date: string;
  images: string[];
  tags: string[];
  index: number;
  onImageClick: (imageIndex: number) => void;
}

export function LivestreamPostCardWithAlbum({
  title,
  description,
  date,
  images,
  tags,
  index,
  onImageClick,
}: LivestreamPostCardWithAlbumProps) {
  const formattedDate = new Date(date).toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const animationDelay = `${index * 100}ms`;

  return (
    <article
      className="bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all hover:scale-[1.02] group"
      style={{
        animation: "fadeInLeft 0.6s ease-out forwards",
        animationDelay,
        opacity: 0,
      }}
    >
      {/* Image Carousel */}
      <ImageCarousel images={images} onImageClick={onImageClick} />

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4"
          style={{ backgroundColor: `${siteConfig.primaryColor}20` }}
        >
          <Calendar className="size-4" style={{ color: siteConfig.primaryColor }} />
          <span
            className="text-sm font-medium"
            style={{ color: siteConfig.primaryColor }}
          >
            {formattedDate}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5"
                style={{
                  backgroundColor: `${siteConfig.primaryColor}20`,
                  color: siteConfig.primaryColor,
                }}
              >
                <Tag className="size-3" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </article>
  );
}
