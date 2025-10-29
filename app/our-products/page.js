"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

gsap.registerPlugin(ScrollTrigger);

function ProductCard({ product }) {
  // Expect: product.image (ready dish) and product.packetImage (packet photo)
  const images = [product.image, product.packetImage || product.image];
  const [active, setActive] = useState(0);
  const imgWrapRef = useRef(null);
  const startXRef = useRef(null);

  useEffect(() => {
    if (!imgWrapRef.current) return;
    const el = imgWrapRef.current;

    // Smooth slide + fade on change
    gsap.fromTo(
      el,
      { autoAlpha: 0, x: 20 },
      { autoAlpha: 1, x: 0, duration: 0.35, ease: "power2.out" }
    );
  }, [active]);

  // Mobile swipe
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

  return (
    <div className="product-card bg-amber-800 rounded-xl overflow-hidden shadow-lg border-2 border-amber-600 transition-all duration-300 opacity-0 ">
      <div
        className="relative h-80 w-full select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div ref={imgWrapRef} className="absolute inset-0">
          <Image
            key={images[active]}
            src={images[active]}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 py-3 bg-amber-800">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            aria-label={`Show image ${idx + 1}`}
            className={`h-3 w-3 rounded-full transition-all duration-200 ${
              active === idx ? "bg-amber-600 scale-110" : "bg-amber-300 hover:bg-amber-400"
            }`}
          />
        ))}
      </div>

      <div className="p-6 space-y-4 ">
        <h3 className="text-xl font-bold text-white">{product.title}</h3>
        <p className="text-amber-100 text-sm">{product.shortDescription}</p>

        <div className="space-y-3 h-30">
          <p className="text-sm text-amber-50">{product.tasteProfile}</p>
          <p className="text-sm font-semibold text-amber-200">Ready in: {product.readyIn}</p>
          <p className="text-sm text-amber-100">{product.perfectFor}</p>
        </div>

        <div className="pt-4">
          <Link href={`/our-products/${product.slug}`}>
            <button className="w-full bg-white hover:bg-amber-100 text-amber-800 py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function OurProductsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Instant show for main container
      gsap.set(containerRef.current, { opacity: 1 });

      // Fast smooth fade-in for product cards
      gsap.utils.toArray(".product-card").forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 90%",
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power1.out"
            });
          }
        });

        // Set initial state
        gsap.set(card, { opacity: 0, y: 20 });
      });

      // Fast animation for section title
      ScrollTrigger.create({
        trigger: ".products-title",
        start: "top 85%",
        onEnter: () => {
          gsap.to(".products-title", {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power1.out"
          });
        }
      });

      gsagSetTitle();

      // Fast animation for description
      ScrollTrigger.create({
        trigger: ".products-description",
        start: "top 85%",
        onEnter: () => {
          gsap.to(".products-description", {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power1.out"
          });
        }
      });

      gsap.set(".products-description", { opacity: 0, y: 10 });
    }, containerRef);

    function gsagSetTitle() {
      gsap.set(".products-title", { opacity: 0, y: 15 });
    }

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FFC72C] py-12 opacity-0">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="products-title text-4xl md:text-6xl font-bold text-white mb-6">
            OUR <span className="text-amber-200">PRODUCTS</span>
          </h1>
          <p className="products-description text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Discover our range of authentic South Indian instant mixes, crafted with traditional recipes and modern convenience.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}