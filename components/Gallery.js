"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const images = ["/2.png", "/5.png", "/6.png"];

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

      // Animate the grid items (existing animation)
      gsap.utils.toArray(".grid-item").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate the button
      gsap.fromTo(
        ".gallery-button",
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-button",
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
      className="w-full px-4 py-4 bg-yellow-400 pt-5"
      id="gallery"
    >
      <div className="w-full text-center lg:text-left space-y-6 lg:space-y-8 text-center">
        <h1
          className="gallery-title text-3xl sm:text-4xl font-bold text-white text-center text-[25px]"
          style={{ opacity: 0 }}
        >
          OUR <span className="text-amber-800">PRODUCTS</span>
        </h1>

        <p
          className="gallery-description text-base sm:text-lg text-amber-900 mx-auto lg:mx-0 max-w-full text-center text-sm mb-3"
          style={{ opacity: 0 }}
        >
          At Taste Box, we are passionate about bringing the authentic &apos;Flavour
          of Home&apos; to your kitchen. We believe that a busy lifestyle shouldn&apos;t
          mean missing out on the traditional meals you love. That&apos;s why we
          carefully craft each mix with time-honoured recipes and wholesome
          ingredients, so you can enjoy a heartwarming, home-cooked meal in just
          a few minutes.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="grid-item relative w-full aspect-[1/1.1] sm:aspect-square overflow-hidden"
            style={{ opacity: 0 }}
          >
            <Image
              src={img}
              alt={`Gallery Image ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
              priority={idx < 3}
            />
          </div>
        ))}
      </div>
      <div className="pt-2 lg:pt-4 w-auto flex justify-center">
        <Link
          href="our-products"
          className="gallery-button inline-block bg-amber-700 hover:bg-amber-900 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-base sm:text-lg transition-colors text-sm px-1 py-1"
          style={{ opacity: 0 }}
        >
          VIEW OUR PRODUCTS
        </Link>
      </div>
    </div>
  );
}
