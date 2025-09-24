"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "/MovingSlides/1.png", alt: "Fluffy bites that simply melt in your mouth" },
  { src: "/MovingSlides/2.png", alt: "Gourmet Burger" },
  { src: "/MovingSlides/3.png", alt: "Fresh Salad Bowl" },
  { src: "/MovingSlides/4.png", alt: "Delicious Pizza" },
  { src: "/MovingSlides/5.png", alt: "Dessert Platter" },
  { src: "/MovingSlides/6.png", alt: "Seafood Special" },
];

export default function Hero() {
  const heroRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const el = heroRef.current;
    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: () => console.log("Scrolled into view"),
    });
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: `-${currentSlide * 100}%`,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [currentSlide]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full h-auto overflow-hidden bg-black"
    >
      {/* Slider Container */}
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
        {/* Slider Track */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500"
          style={{ width: `${images.length * 100}%` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center w-full"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1400}   // Laptop size
                height={788}   // 16:9 ratio
                priority={index === 0}
                className="w-full max-w-[1600px] h-auto object-contain"
                sizes="(max-width: 900px) 100vw,
                       (max-width: 1400px) 100vw,
                       1500px"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black p-3 rounded-full transition-colors duration-300 shadow-lg"
        >
          <ArrowLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black p-3 rounded-full transition-colors duration-300 shadow-lg"
        >
          <ArrowRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
