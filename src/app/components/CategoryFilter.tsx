import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Luôn hiện khi ở đầu trang
      if (currentScrollY < 100) {
        setIsVisible(true);
      } 
      // Ẩn khi cuộn xuống (chỉ khi thực sự cuộn xuống được)
      else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
        setIsVisible(false);
      } 
      // Hiện khi cuộn lên (kể cả cuộn lên một chút)
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className={`sticky top-16 bg-gray-900/95 backdrop-blur-md z-40 border-b border-gray-800 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative flex items-center">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 z-10 bg-gray-900 p-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors md:hidden"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
          )}

          {/* Categories */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 sm:px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 z-10 bg-gray-900 p-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors md:hidden"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}