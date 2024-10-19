import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const mainSlides = [
    {
      src: "https://cf.shopee.vn/file/vn-11134258-7ras8-m1f8fifrrg2k15_xxhdpi",
      alt: "Shopee and UNICEF Vietnam collaboration",
    },
    {
      src: "https://cf.shopee.vn/file/vn-11134258-7ras8-m1ffoi8e5jun1b_xxhdpi",
      alt: "Shopee Fashion Sale",
    },
    {
      src: "https://cf.shopee.vn/file/vn-11134258-7ras8-m1f8xey6ljdk4f_xxhdpi",
      alt: "Shopee Electronics Deals",
    },
    {
      src: "https://cf.shopee.vn/file/vn-11134258-7ras8-m1f94lststgc49_xxhdpi",
      alt: "Shopee Grocery Promotion",
    },

  ];

  const sideImages = [
    {
      src: "https://cf.shopee.vn/file/vn-11134258-7ras8-m1ffvdqbyxmn45_xhdpi",
      alt: "Shopee Super Sale",
    },
    {
      src: "https://cf.shopee.vn/file/vn-11134258-7ras8-m1f8yjyuklr043_xhdpi",
      alt: "Shopee Weekly Sale",
    }
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  }
  const goToNextSlide = () => {
    setCurrentSlide((nextSlide) => (nextSlide + 1) % mainSlides.length);
  }
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + mainSlides.length) % mainSlides.length);
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % mainSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-60 overflow-hidden">
      <div className="flex h-full pt-5">
        {/* Banner Slider */}
        <div
          onMouseEnter={() => setShowButtons(true)}
          onMouseLeave={() => setShowButtons(false)}
          className="w-2/3 h-full relative overflow-hidden"
        >
          {mainSlides.map((slide, index) => (
            <a
              href="#"
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </a>
          ))}

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {mainSlides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'
                  }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          {/* Navigation Buttons */}
        {showButtons && (
          <div>
            <button
              onClick={goToPrevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50
           text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )};
        </div>

        
        {/* Side Slide */}
        <div className="w-1/3 h-full flex flex-col ml-1">
          {sideImages.map((sideImage, index) => (
            <a href='#' key={index} className="h-1/2 relative overflow-hidden first:pb-1">
              <img
                src={sideImage.src}
                alt={sideImage.alt}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;