import { useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface ImageCarouselProps {
  images: string[];
  onImageClick: (index: number) => void;
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
      style={{ display: "block" }}
    >
      <ChevronLeft className="size-5 text-white" />
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
      style={{ display: "block" }}
    >
      <ChevronRight className="size-5 text-white" />
    </button>
  );
}

export function ImageCarousel({ images, onImageClick }: ImageCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: images.length > 1 ? <PrevArrow /> : <></>,
    nextArrow: images.length > 1 ? <NextArrow /> : <></>,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <div
        className={`w-2 h-2 rounded-full transition-all ${
          i === currentSlide ? "bg-white scale-125" : "bg-white/50"
        }`}
      />
    ),
    dotsClass: "slick-dots !bottom-4",
  };

  if (images.length === 0) {
    return (
      <div className="aspect-video bg-zinc-800 flex items-center justify-center">
        <ImageIcon className="size-12 text-zinc-600" />
      </div>
    );
  }

  return (
    <div className="relative aspect-video overflow-hidden bg-zinc-800 rounded-t-lg">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <div
              className="aspect-video cursor-pointer group"
              onClick={() => onImageClick(index)}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay hint */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div
                    className="px-4 py-2 rounded-lg backdrop-blur-sm text-white text-sm font-medium"
                    style={{ backgroundColor: `${siteConfig.primaryColor}cc` }}
                  >
                    Click để xem lớn hơn
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Image counter badge */}
      {images.length > 1 && (
        <div
          className="absolute top-4 right-4 px-3 py-1.5 rounded-lg backdrop-blur-sm flex items-center gap-2 z-10"
          style={{ backgroundColor: `${siteConfig.primaryColor}cc` }}
        >
          <ImageIcon className="size-4 text-white" />
          <span className="text-sm font-medium text-white">
            {currentSlide + 1}/{images.length}
          </span>
        </div>
      )}

      <style>{`
        .slick-dots li button:before {
          display: none;
        }
        .slick-dots li {
          margin: 0 4px;
        }
      `}</style>
    </div>
  );
}
