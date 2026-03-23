import { Grid, List } from 'lucide-react';

interface VideoHeaderProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export function VideoHeader({ viewMode, onViewModeChange }: VideoHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl sm:text-2xl text-white">Video Gallery</h1>
          
          <div className="flex gap-2">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-white/20 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              aria-label="Grid view"
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' 
                  ? 'bg-white/20 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              aria-label="List view"
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
