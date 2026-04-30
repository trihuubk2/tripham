import { Link, useLocation } from "react-router";
import { Home, Video, Radio, Menu, X } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            {siteConfig.logoUrl && (
              <img
                src={siteConfig.logoUrl}
                alt={siteConfig.logoAlt}
                className="h-8 w-auto"
              />
            )}
            <span className="text-xl font-bold text-white">{siteConfig.title}</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isActive("/")
                  ? "text-white"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
              style={
                isActive("/")
                  ? { backgroundColor: siteConfig.primaryColor }
                  : {}
              }
            >
              <Home className="size-5" />
              <span>Trang Chủ</span>
            </Link>
            <Link
              to="/portfolio"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isActive("/portfolio")
                  ? "text-white"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
              style={
                isActive("/portfolio")
                  ? { backgroundColor: siteConfig.primaryColor }
                  : {}
              }
            >
              <Video className="size-5" />
              <span>Portfolio</span>
            </Link>
            <Link
              to="/livestream"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isActive("/livestream")
                  ? "text-white"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
              style={
                isActive("/livestream")
                  ? { backgroundColor: siteConfig.primaryColor }
                  : {}
              }
            >
              <Radio className="size-5" />
              <span>Livestream</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg mb-2 transition-all ${
                isActive("/")
                  ? "text-white"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
              style={
                isActive("/")
                  ? { backgroundColor: siteConfig.primaryColor }
                  : {}
              }
            >
              <Home className="size-5" />
              <span>Trang Chủ</span>
            </Link>
            <Link
              to="/portfolio"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg mb-2 transition-all ${
                isActive("/portfolio")
                  ? "text-white"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
              style={
                isActive("/portfolio")
                  ? { backgroundColor: siteConfig.primaryColor }
                  : {}
              }
            >
              <Video className="size-5" />
              <span>Portfolio</span>
            </Link>
            <Link
              to="/livestream"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                isActive("/livestream")
                  ? "text-white"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
              style={
                isActive("/livestream")
                  ? { backgroundColor: siteConfig.primaryColor }
                  : {}
              }
            >
              <Radio className="size-5" />
              <span>Livestream</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}