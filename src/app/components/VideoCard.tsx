import { Play } from 'lucide-react';
import { useState, useRef } from 'react';

interface VideoCardProps {
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  viewMode: 'grid' | 'list';
}

export function VideoCard({ title, videoUrl, thumbnailUrl, viewMode }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className={`bg-gray-900 rounded-lg overflow-hidden group ${
        viewMode === 'list' ? 'flex flex-col sm:flex-row gap-4' : ''
      }`}
    >
      <div className={`relative ${viewMode === 'list' ? 'sm:w-80 flex-shrink-0' : 'w-full'}`}>
        <video
          ref={videoRef}
          src={videoUrl}
          poster={thumbnailUrl}
          className="w-full h-full object-cover aspect-video"
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
        
        {!isPlaying && (
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors"
            aria-label="Play video"
          >
            <div className="bg-white/90 rounded-full p-4 sm:p-6 group-hover:bg-white transition-colors">
              <Play size={32} className="text-black fill-black ml-1" />
            </div>
          </button>
        )}
      </div>
      
      <div className={`p-4 ${viewMode === 'list' ? 'flex items-center' : ''}`}>
        <h3 className="text-white text-lg sm:text-xl">{title}</h3>
      </div>
    </div>
  );
}
