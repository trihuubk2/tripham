import { useState } from 'react';
import { VideoHeader } from './components/VideoHeader';
import { CategoryFilter } from './components/CategoryFilter';
import { VideoGallery } from './components/VideoGallery';
import { BackToTop } from './components/BackToTop';

const categories = ['Tất cả', 'Thời trang', 'Công nghệ', 'Làm đẹp', 'Ẩm thực'];

export default function App() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  return (
    <div className="size-full bg-black">
      <VideoHeader viewMode={viewMode} onViewModeChange={setViewMode} />
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <VideoGallery viewMode={viewMode} selectedCategory={selectedCategory} />
      <BackToTop />
    </div>
  );
}