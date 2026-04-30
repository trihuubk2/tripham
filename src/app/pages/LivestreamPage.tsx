import { useState, useMemo } from "react";
import { LivestreamPostCardWithAlbum } from "../components/LivestreamPostCardWithAlbum";
import { Lightbox } from "../components/Lightbox";
import { BackToTop } from "../components/BackToTop";
import { Navigation } from "../components/Navigation";
import { siteConfig } from "../config/siteConfig";

export function LivestreamPage() {
  const [selectedTag, setSelectedTag] = useState<string>("Tất cả");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    siteConfig.livestreamPosts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return ["Tất cả", ...Array.from(tags)];
  }, []);

  // Filter posts by selected tag
  const filteredPosts = useMemo(() => {
    if (selectedTag === "Tất cả") {
      return siteConfig.livestreamPosts;
    }
    return siteConfig.livestreamPosts.filter((post) =>
      post.tags.includes(selectedTag)
    );
  }, [selectedTag]);

  const openLightbox = (postImages: string[], imageIndex: number) => {
    setLightboxImages(postImages);
    setLightboxIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setLightboxIndex(
      (prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length
    );
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <div className="mx-auto mt-15 bg-zinc-900/90 border border-zinc-700 rounded-3xl py-10 px-8 md:py-12 md:px-16 max-w-8xl">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Livestream & Events
          </h1>
          <p className="text-zinc-400 text-lg">
            Hình ảnh và bài viết về các sự kiện đã tham gia
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="container mx-auto px-4 py-8 pt-12">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-zinc-400 text-lg">
              Không tìm thấy bài viết nào với tag này
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <LivestreamPostCardWithAlbum
                key={post.id}
                title={post.title}
                description={post.description}
                date={post.date}
                images={post.images}
                tags={post.tags}
                index={index}
                onImageClick={(imageIndex) =>
                  openLightbox(post.images, imageIndex)
                }
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}

      {/* Back to Top */}
      <BackToTop />

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-zinc-500">
          <p>{siteConfig.footer}</p>
        </div>
      </footer>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
