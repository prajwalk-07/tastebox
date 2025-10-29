"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const images = ["/our-pro.png"];
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

      // Animate the image block
      gsap.utils.toArray(".gallery-image").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, scale: 0.96 },
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
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.3,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-button",
            start: "top 100%",
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
      className="w-full px-4 py-4 bg-white pt-5 lg:h-140 mb-10"
      id="gallery"
    >
      {/* Header */}
      <div className="w-full text-center space-y-6 lg:space-y-8 mt-5 lg:mt-10">
        <h1
          className="gallery-title text-3xl sm:text-4xl font-bold text-center text-[25px] text-green-800 "
          style={{ opacity: 0 }}
        >
          OUR PRODUCTS
        </h1>
      </div>

      {/* Two-column layout: image left, text right; stacks on mobile */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mt-5 lg:mt-10">
        {/* Image block */}
        <div
          className="gallery-image relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-md"
          style={{ opacity: 0 }}
        >
          <Image
            src={images[0]}
            alt="Our products"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
            priority
          />
        </div>

        {/* Text block */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <p
            className="gallery-description text-base sm:text-lg text-[#cf240a]  w-full lg:px-0 text-center"
            style={{ opacity: 0 }}
          >
            At Taste Box, we are passionate about bringing the authentic &apos;Flavour
            of Home&apos; to your kitchen. We believe that a busy lifestyle shouldn&apos;t
            mean missing out on the traditional meals you love. That&apos;s why we
            carefully craft each mix with time-honoured recipes and wholesome
            ingredients, so you can enjoy a heartwarming, home-cooked meal in just
            a few minutes.
          </p>

          <div className="pt-4 w-full flex justify-center lg:justify-center lg:mt-10 ">
            <Link
              href="our-products"
              className="gallery-button inline-block bg-green-900 hover:bg-green-900 text-white px-6 py-3 rounded-lg text-base sm:text-lg transition-colors"
              style={{ opacity: 0 }}
            >
              VIEW OUR PRODUCTS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}