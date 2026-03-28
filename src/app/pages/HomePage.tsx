import { Link } from "react-router";
import { siteConfig } from "../config/siteConfig";
import { Video, Code, Camera, Briefcase, Award, Mail, Phone, MapPin } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { BackToTop } from "../components/BackToTop";

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation - cố định */}
      <Navigation />

      {/* Hero Section - với padding-top để không bị che */}
      <section
        className="relative overflow-hidden pt-16"
        style={{
          paddingTop: `calc(${siteConfig.header.paddingTopMobile}px + 4rem)`,
          paddingBottom: `${siteConfig.header.paddingBottomMobile}px`,
        }}
      >
        {/* Background Layer */}
        {siteConfig.header.backgroundType === "solid" && (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${siteConfig.primaryColor}, ${siteConfig.primaryColor}dd)`,
            }}
          />
        )}
        
        {siteConfig.header.backgroundType === "image" && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${siteConfig.header.backgroundImage})`,
              }}
            />
            <div
              className="absolute inset-0 bg-black"
              style={{ opacity: siteConfig.header.overlayOpacity }}
            />
          </>
        )}
        
        {siteConfig.header.backgroundType === "video" && (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={siteConfig.header.backgroundVideo} type="video/mp4" />
            </video>
            <div
              className="absolute inset-0 bg-black"
              style={{ opacity: siteConfig.header.overlayOpacity }}
            />
          </>
        )}

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-1xl md:text-3xl font-bold text-white mb-5">
              {siteConfig.home.heroTitle}
            </h1>
            <p className="text-1xl md:text-1xl text-white/90 mb-8 leading-relaxed">
              {siteConfig.home.heroSubtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/portfolio"
                className="px-8 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: siteConfig.primaryColor }}
              >
                Xem Portfolio
              </Link>
              <a
                href={`#contact`}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold transition-all hover:bg-white/20"
              >
                Liên Hệ
              </a>
            </div>
          </div>
        </div>

        {/* Desktop padding override */}
        <style>{`
          @media (min-width: 768px) {
            section {
              padding-top: ${siteConfig.header.paddingTop}px !important;
              padding-bottom: ${siteConfig.header.paddingBottom}px !important;
            }
          }
        `}</style>
      </section>

      {/* About Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-3xl md:text-3xl font-bold mb-6 text-center"
              style={{ color: siteConfig.primaryColor }}
            >
              {siteConfig.home.aboutTitle}
            </h2>
            <p className="text-zinc-300 text-md leading-relaxed text-center whitespace-pre-line mb-12">
              {siteConfig.home.aboutContent}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{ color: siteConfig.primaryColor }}
          >
            Kỹ Năng & Dịch Vụ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {siteConfig.home.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${siteConfig.primaryColor}20` }}
                  >
                    {getSkillIcon(skill.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{ color: siteConfig.primaryColor }}
          >
            Kinh Nghiệm
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {siteConfig.home.experience.map((exp, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg border border-zinc-800"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg shrink-0"
                    style={{ backgroundColor: `${siteConfig.primaryColor}20` }}
                  >
                    <Briefcase className="size-6" style={{ color: siteConfig.primaryColor }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-zinc-400 mb-2">{exp.company} • {exp.period}</p>
                    <p className="text-zinc-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{ color: siteConfig.primaryColor }}
          >
            Liên Hệ
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-lg border border-zinc-800">
              <div className="space-y-6">
                {siteConfig.home.contact.email && (
                  <a
                    href={`mailto:${siteConfig.home.contact.email}`}
                    className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors"
                  >
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${siteConfig.primaryColor}20` }}
                    >
                      <Mail className="size-6" style={{ color: siteConfig.primaryColor }} />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500">Email</p>
                      <p className="text-lg">{siteConfig.home.contact.email}</p>
                    </div>
                  </a>
                )}
                {siteConfig.home.contact.phone && (
                  <a
                    href={`tel:${siteConfig.home.contact.phone}`}
                    className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors"
                  >
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${siteConfig.primaryColor}20` }}
                    >
                      <Phone className="size-6" style={{ color: siteConfig.primaryColor }} />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500">Điện thoại</p>
                      <p className="text-lg">{siteConfig.home.contact.phone}</p>
                    </div>
                  </a>
                )}
                {siteConfig.home.contact.location && (
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${siteConfig.primaryColor}20` }}
                    >
                      <MapPin className="size-6" style={{ color: siteConfig.primaryColor }} />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500">Địa chỉ</p>
                      <p className="text-lg">{siteConfig.home.contact.location}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-8">
        <div className="container mx-auto px-4 text-center text-zinc-500">
          <p>{siteConfig.footer}</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

function getSkillIcon(iconName: string) {
  const iconProps = { className: "size-6", style: { color: siteConfig.primaryColor } };
  
  switch (iconName) {
    case "video":
      return <Video {...iconProps} />;
    case "camera":
      return <Camera {...iconProps} />;
    case "code":
      return <Code {...iconProps} />;
    case "award":
      return <Award {...iconProps} />;
    default:
      return <Video {...iconProps} />;
  }
}