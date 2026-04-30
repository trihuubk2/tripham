import { useState, useMemo } from "react";
import { VideoCard } from "../components/VideoCard";
import { CategoryFilter } from "../components/CategoryFilter";
import { BackToTop } from "../components/BackToTop";
import { Navigation } from "../components/Navigation";
import { siteConfig } from "../config/siteConfig";

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  // Lấy danh sách categories duy nhất từ videos
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(siteConfig.videos.map((v) => v.category))
    );
    return ["Tất cả", ...uniqueCategories];
  }, []);

  // Lọc videos theo category
  const filteredVideos = useMemo(() => {
    if (activeCategory === "Tất cả") {
      return siteConfig.videos;
    }
    return siteConfig.videos.filter((v) => v.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen">
      {/* Navigation - cố định */}
      <Navigation />

      {/* Header - với padding-top để không bị che bởi nav */}
      <div className="mx-auto mt-30 bg-zinc-900/90 border border-zinc-700 rounded-3xl py-10 px-8 md:py-12 md:px-16 max-w-8xl">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Portfolio
          </h1>
          <p className="text-zinc-400 text-lg whitespace-pre-line">
            {siteConfig.subtitle}
          </p>
        </div>
      </div>

      {/* Category Filter - ẩn/hiện khi cuộn */}
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Video Grid - với padding-top để tránh bị che */}
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <VideoCard
              key={video.id}
              videoId={video.id}
              title={video.title}
              description={video.description}
              thumbnail={video.thumbnail}
              index={index}
            />
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-400 text-lg">
              Không tìm thấy video nào trong thể loại này
            </p>
          </div>
        )}
      </div>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-zinc-500">
          <p>{siteConfig.footer}</p>
        </div>
      </footer>
    </div>
  );
}