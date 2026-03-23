import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-semibold">Portfolio</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left py-2 hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left py-2 hover:text-blue-600 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
