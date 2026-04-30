import { Calendar, Tag } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LivestreamPostCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
  index: number;
}

export function LivestreamPostCard({
  title,
  description,
  date,
  image,
  tags,
  index,
}: LivestreamPostCardProps) {
  // Parse date
  const formattedDate = new Date(date).toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Animation delay based on index
  const animationDelay = `${index * 100}ms`;

  return (
    <div
      className="bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all hover:scale-[1.02] group"
      style={{
        animation: "fadeInLeft 0.6s ease-out forwards",
        animationDelay,
        opacity: 0,
      }}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-zinc-800">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764162051487-1fa0cc2a18c2?w=800"
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        
        {/* Date Badge */}
        <div
          className="absolute top-4 right-4 px-3 py-1.5 rounded-lg backdrop-blur-sm flex items-center gap-2"
          style={{ backgroundColor: `${siteConfig.primaryColor}cc` }}
        >
          <Calendar className="size-4 text-white" />
          <span className="text-sm font-medium text-white">{formattedDate}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
          {title}
        </h3>
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
    </div>
  );
}
