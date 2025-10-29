"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function WhyTasteBox() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the title
      gsap.fromTo(
        ".gallery-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate the description
      gsap.fromTo(
        ".gallery-description",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-description",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate the image
      gsap.fromTo(
        ".gallery-image",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-image",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16 bg-[#0A2E50]"
      id="gallery"
    >
      <div className="max-w-8xl mx-auto">
        {/* Title - Centered on mobile, left-aligned on desktop */}
        <h1
          className="gallery-title text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-left bg-yellow-500 w-fit flex justify-center mx-auto lg:mx-auto px-3 sm:px-4 py-2 rounded-sm text-[#cf240a] mb-6 sm:mb-8 md:mb-10"
          style={{ opacity: 0 }}
        >
          WHY TASTE BOX
        </h1>

        {/* Two-column layout: text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="flex flex-col space-y-6 sm:space-y-6 justify-center order-2 lg:order-1">
            <p
              className="gallery-description text-sm sm:text-base md:text-lg lg:text-xl text-white text-center lg:text-center leading-relaxed "
              style={{ opacity: 0 }}
            >
              The heart of every Taste Box meal is our commitment to time-honoured recipes.
              We don&apos;t take shortcuts. Each spice blend is traditionally roasted and ground in
              small batches to unlock its true aroma and depth, capturing the flavour that
              reminds you of a home&apos;s cooking. It&apos;s this dedication to the authentic process that
              makes our meals taste genuinely homemade, bringing the true &apos;Flavour of Home&apos; to
              your table in minutes
            </p>
          </div>

          {/* Right side - Image */}
          <div className="gallery-image relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] overflow-hidden rounded-lg order-1 lg:order-2" style={{ opacity: 0 }}>
            <Image
              src="/whytastebox.png"
              alt="Why Taste Box"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}