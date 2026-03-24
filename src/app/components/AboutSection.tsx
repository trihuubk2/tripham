import { siteConfig } from "../config/siteConfig";

export function AboutSection() {
  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm border-y border-zinc-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: siteConfig.primaryColor }}
          >
            {siteConfig.about.title}
          </h2>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed whitespace-pre-line">
            {siteConfig.about.content}
          </p>
        </div>
      </div>
    </div>
  );
}
