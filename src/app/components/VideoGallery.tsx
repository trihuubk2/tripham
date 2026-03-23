import { VideoCard } from './VideoCard';

interface VideoGalleryProps {
  viewMode: 'grid' | 'list';
  selectedCategory: string;
}

// Sample video data - replace with your actual videos
const videos = [
  {
    id: 1,
    title: 'Product Demo 1',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
    category: 'Tất cả'
  },
  {
    id: 2,
    title: 'Fashion Collection',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80',
    category: 'Thời trang'
  },
  {
    id: 3,
    title: 'Tech Product',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    category: 'Công nghệ'
  },
  {
    id: 4,
    title: 'Beauty Tutorial',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    category: 'Làm đẹp'
  },
  {
    id: 5,
    title: 'Food Recipe',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    category: 'Ẩm thực'
  },
  {
    id: 6,
    title: 'Tech Gadget',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80',
    category: 'Công nghệ'
  },
  {
    id: 7,
    title: 'Fashion Show',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea3c5b31?w=800&q=80',
    category: 'Thời trang'
  },
  {
    id: 8,
    title: 'Cooking Demo',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
    category: 'Ẩm thực'
  },
  {
    id: 9,
    title: 'Makeup Review',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
    category: 'Làm đẹp'
  }
];

export function VideoGallery({ viewMode, selectedCategory }: VideoGalleryProps) {
  const filteredVideos = selectedCategory === 'Tất cả'
    ? videos
    : videos.filter(video => video.category === selectedCategory);

  return (
    <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
      <div className="container mx-auto">
        {filteredVideos.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            <p className="text-xl">Không có video nào trong thể loại này</p>
          </div>
        ) : (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
                : 'flex flex-col gap-6 max-w-4xl mx-auto'
            }
          >
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                videoUrl={video.videoUrl}
                thumbnailUrl={video.thumbnailUrl}
                viewMode={viewMode}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
