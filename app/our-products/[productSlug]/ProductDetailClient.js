"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ProductDetailClient({ product }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if GSAP is properly loaded
    if (!gsap || !ScrollTrigger) return;

    const ctx = gsap.context(() => {
      // Instant show for main container
      gsap.set(containerRef.current, { opacity: 1 });

      // Fast smooth animations for all sections
      const sections = gsap.utils.toArray(".animate-section");
      sections.forEach((element, index) => {
        ScrollTrigger.create({
          trigger: element,
          start: "top 85%",
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
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [product]);

  return (
    <div ref={containerRef} className="min-h-screen bg-yellow-400 py-8 md:py-12 opacity-0">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <div className="animate-section mb-8">
          <Link href="/our-products">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-colors duration-300 text-sm md:text-base mt-5">
              ← Back to Products
            </button>
          </Link>
        </div>

        {/* Product Image */}
        <div className="animate-section mb-8">
          <div className="relative h-64 sm:h-80 md:h-96 w-full  overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              priority
            />
          </div>
        </div>

        {/* Product Header */}
        <div className="animate-section mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {product.title}
          </h1>
          <p className="text-lg text-amber-100 mb-4 md:mb-6">
            {product.shortDescription}
          </p>
          <div className="text-2xl md:text-3xl font-bold text-amber-200">
            {product.price}
          </div>
        </div>

        {/* Product Details Grid */}
        <div className="space-y-6">
          {/* Full Description */}
          <div className="animate-section bg-amber-700 rounded-xl p-4 md:p-6 border-2 border-amber-600">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Description</h2>
            <p className="text-amber-100 leading-relaxed text-base md:text-lg">
              {product.description}
            </p>
          </div>

          {/* Taste Profile */}
          <div className="animate-section bg-amber-700 rounded-xl p-4 md:p-6 border-2 border-amber-600">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Taste Profile</h2>
            <p className="text-amber-100 text-base md:text-lg">{product.tasteProfile}</p>
          </div>

          {/* Preparation Time */}
          <div className="animate-section bg-amber-700 rounded-xl p-4 md:p-6 border-2 border-amber-600">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Preparation Time</h2>
            <p className="text-amber-100 text-base md:text-lg">{product.readyIn}</p>
          </div>

          {/* Perfect For */}
          <div className="animate-section bg-amber-700 rounded-xl p-4 md:p-6 border-2 border-amber-600">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Perfect For</h2>
            <p className="text-amber-100 text-base md:text-lg">{product.perfectFor}</p>
          </div>

        </div>
      </div>
    </div>
  );
}