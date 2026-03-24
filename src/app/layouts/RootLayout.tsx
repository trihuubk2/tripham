import { Outlet } from "react-router";
import { FontLoader } from "../components/FontLoader";
import { Navigation } from "../components/Navigation";
import { siteConfig } from "../config/siteConfig";

export function RootLayout() {
  return (
    <>
      <FontLoader />
      <div className="min-h-screen bg-zinc-950">
        {/* Video Backdrop */}
        {siteConfig.backgroundVideo.enabled && (
          <div className="fixed inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-zinc-950/80 z-10" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={siteConfig.backgroundVideo.url} type="video/mp4" />
            </video>
          </div>
        )}

        {/* Main Content */}
        <div className="relative z-20">
          <Navigation />
          <Outlet />
        </div>
      </div>
    </>
  );
}
