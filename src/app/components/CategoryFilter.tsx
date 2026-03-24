import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hiện khi cuộn lên, ẩn khi cuộn xuống
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Kiểm tra và cập nhật trạng thái mũi tên
  const updateArrows = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [categories]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === "left"
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 justify-center">
              {/* Nút mũi tên trái */}
              {showLeftArrow && (
                <button
                  onClick={() => scroll("left")}
                  className="shrink-0 p-2 rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors"
                  aria-label="Cuộn trái"
                >
                  <ChevronLeft className="size-5" />
                </button>
              )}

              {/* Container các nút category */}
              <div
                ref={scrollContainerRef}
                onScroll={updateArrows}
                className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category
                        ? "text-white"
                        : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                    }`}
                    style={
                      activeCategory === category
                        ? { backgroundColor: siteConfig.primaryColor }
                        : {}
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Nút mũi tên phải */}
              {showRightArrow && (
                <button
                  onClick={() => scroll("right")}
                  className="shrink-0 p-2 rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors"
                  aria-label="Cuộn phải"
                >
                  <ChevronRight className="size-5" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}