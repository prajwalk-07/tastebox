"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ProductDetailClient({ product }) {
  const containerRef = useRef(null);

  // 2-image gallery (ready + packet)
  const images = [product.packetImage, product.image || product.packetImage];
  const [active, setActive] = useState(0);
  const imgWrapRef = useRef(null);
  const startXRef = useRef(null);

  // Animate image change
  useEffect(() => {
    if (!imgWrapRef.current) return;
    const el = imgWrapRef.current;
    gsap.fromTo(
      el,
      { autoAlpha: 0, x: 20 },
      { autoAlpha: 1, x: 0, duration: 0.35, ease: "power2.out" }
    );
  }, [active]);

  // Swipe handlers (mobile)
  const onTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (startXRef.current == null) return;
    const dx = e.changedTouches[0].clientX - startXRef.current;
    startXRef.current = null;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) setActive((i) => (i + 1) % images.length);
    else setActive((i) => (i - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    const ctx = gsap.context(() => {
      // Instant show for main container
      gsap.set(containerRef.current, { opacity: 1 });

      // Fast smooth animations for all sections
      const sections = gsap.utils.toArray(".animate-section");
      sections.forEach((element, index) => {
        ScrollTrigger.create({
          trigger: element,
          start: "top 100%",
          onEnter: () => {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              duration: 0.4,
              delay: index * 0.1,
              ease: "power1.out"
            });
          }
        });

        // Set initial state
        gsap.set(element, { opacity: 0, y: 20 });
      });
    }, containerRef);

    return () => {
      if (ctx && typeof ctx.revert === "function") {
        ctx.revert();
      }
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [product]);

  return (
    <div ref={containerRef} className="min-h-screen bg-yellow-400 py-8 md:py-12 opacity-0">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <div className="animate-section mb-8">
          <Link href="/our-products">
            <button className="bg-[#0A2E50] hover:bg-blue-900 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-colors duration-300 text-sm md:text-base mt-5">
              ← Back to Products
            </button>
          </Link>
        </div>

        {/* Image Gallery */}
        <div className="animate-section mb-6">
          <div
            className="relative h-68 lg:h-150 sm:h-80 md:h-96 w-full overflow-hidden select-none rounded-sm "
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div ref={imgWrapRef} className="absolute inset-0 ">
              <Image
                key={images[active]}
                src={images[active]}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                priority
              />
            </div>
          </div>

          {/* Dots (click on larger screens; also visible on mobile) */}
          <div className="flex items-center justify-center gap-3 py-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                aria-label={`Show image ${idx + 1}`}
                className={`h-3 w-3 rounded-full transition-all duration-200 ${
                  active === idx ? "bg-amber-700 scale-110" : "bg-amber-300 hover:bg-amber-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Header */}
        <div className="animate-section mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            {product.title}
          </h1>
          <p className="text-lg text-black mb-4 md:mb-6">{product.shortDescription}</p>
          <div className="text-2xl md:text-3xl font-bold text-amber-200">{product.price}</div>
        </div>

        {/* Product Details Grid */}
        <div className="space-y-6">
          {/* Description */}
          <div className="animate-section bg-[#0A2E50] rounded-xl p-4 md:p-6 rounded">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Description</h2>
            <p className="text-amber-100 leading-relaxed text-base md:text-lg">{product.description}</p>
          </div>

          {/* Taste Profile */}
          <div className="animate-section bg-[#0A2E50]  rounded-xl p-4 md:p-6 rounded">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Taste Profile</h2>
            <p className="text-amber-100 text-base md:text-lg">{product.tasteProfile}</p>
          </div>

          {/* Preparation Time */}
          <div className="animate-section bg-[#0A2E50]  rounded-xl p-4 md:p-6 rounded">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Preparation Time</h2>
            <p className="text-amber-100 text-base md:text-lg">{product.readyIn}</p>
          </div>

          {/* Perfect For */}
          <div className="animate-section bg-[#0A2E50]  rounded-xl p-4 md:p-6 rounded">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Perfect For</h2>
            <p className="text-amber-100 text-base md:text-lg">{product.perfectFor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}