import { useState } from "react";
import { Play } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface VideoCardProps {
  videoId: string;
  title: string;
  description?: string;
  thumbnail?: string;
}

export function VideoCard({ videoId, title, description, thumbnail }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Thumbnail chất lượng cao từ YouTube (hoặc custom thumbnail)
  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="group relative overflow-hidden rounded-lg bg-zinc-900 transition-transform hover:scale-105">
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
    </div>
  );
}