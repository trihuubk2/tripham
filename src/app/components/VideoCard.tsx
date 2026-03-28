import { useState } from "react";
import { Play } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { motion } from "motion/react";

interface VideoCardProps {
  videoId: string;
  title: string;
  description?: string;
  thumbnail?: string;
  index?: number; // For animation delay
}

export function VideoCard({ videoId, title, description, thumbnail, index = 0 }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Thumbnail chất lượng cao từ YouTube (hoặc custom thumbnail)
  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // Lấy cấu hình từ siteConfig
  const config = siteConfig.videoCard;
  
  // Map size text Tailwind
  const titleSizeClass = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  }[config.titleSize];
  
  const descriptionSizeClass = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
  }[config.descriptionSize];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1, // Stagger effect
        ease: "easeOut" 
      }}
      className="group relative overflow-hidden rounded-lg bg-zinc-900 transition-transform hover:scale-105"
    >
      {/* Phần video/thumbnail */}
      <div className="relative aspect-video cursor-pointer" onClick={() => setIsPlaying(true)}>
        {/* Thumbnail + overlay */}
        {!isPlaying ? (
          <>
            <img
              src={thumbnailUrl}
              alt={title}
              className="absolute inset-0 size-full object-cover"
              // Fallback nếu maxresdefault không tồn tại
              onError={(e) => {
                if (!thumbnail) {
                  e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                }
              }}
            />
            {/* Overlay tối + Play button tròn */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:bg-black/40">
              <div 
                className="rounded-full p-5 shadow-lg transition-transform group-hover:scale-110"
                style={{ backgroundColor: siteConfig.primaryColor }}
              >
                <Play className="h-10 w-10 text-white fill-white" />
              </div>
            </div>
            
            {/* Info Overlay - Khung thông tin video */}
            {config.showInfoOverlay && (
              <div 
                className={`absolute inset-x-0 ${
                  config.overlayPosition === "top" ? "top-0" : "bottom-0"
                } p-${config.padding}`}
                style={{ 
                  backgroundColor: `rgba(0, 0, 0, ${config.overlayOpacity})`,
                }}
              >
                <h3 className={`${titleSizeClass} font-semibold text-white line-clamp-1`}>
                  {title}
                </h3>
                {description && (
                  <p className={`${descriptionSizeClass} text-gray-300 mt-1 line-clamp-1`}>
                    {description}
                  </p>
                )}
              </div>
            )}
          </>
        ) : (
          /* Khi click: load iframe thật */
          <iframe
            className="absolute inset-0 size-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </motion.div>
  );
}