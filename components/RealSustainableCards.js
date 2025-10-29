"use client";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RealSustainableCards() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const fromX = i === 0 ? -60 : 60; // 1st from left, 2nd from right
      gsap.fromTo(
        card,
        { opacity: 0, x: fromX },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="w-full py-8 flex flex-col items-center bg-green-900">
      <h2 className="gallery-title text-2xl sm:text-4xl font-bold text-white text-center mb-8">
        REAL AND SUSTAINABLE
      </h2>

      {/* Same row on desktop; independent vertical offsets */}
      <div className="flex flex-col md:flex-row gap-10 justify-center items-start w-full">
        {/* Wrapper 1 (no margin offset) */}
        <div className="w-full lg:max-w-[46%] p-3">
          <Card
            ref={(el) => (cardsRef.current[0] = el)}
            className="w-full flex flex-col items-center bg-[#fec208] border-none lg:h-145 h-160 overflow-hidden rounded-lg"
          >
            <Image
              src="/RS1.jpg"
              alt="Real Kitchen Spices"
              width={500}
              height={500}
              className="w-full h-80 object-cover"
            />
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-bold mb-2 text-[#cf240a]">
                CONTAINS REAL KITCHEN SPICES
              </h3>
              <p className="text-[#cf240a] ">
                We believe the most delicious meals start with real, honest
                ingredients. In every Taste Box pack, you&apos;ll find the same
                aromatic spices, wholesome dals, and natural ingredients that you
                would use in your own home kitchen. We source the best to bring
                you the authentic &apos;Flavour of Home&apos;.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Wrapper 2 (apply your own independent margin here) */}
        <div className="w-full lg:max-w-[46%] lg:mt-60 p-3 ">
          <Card
            ref={(el) => (cardsRef.current[1] = el)}
            className=" w-full flex flex-col items-center bg-[#fec208] border-none lg:h-145 h-160 overflow-hidden rounded-lg"
          >
            <Image
              src="/RS2.jpg"
              alt="Traditional Recipes, Modern Convenience"
              width={500}
              height={500}
              className="w-full h-80 object-cover"
            />
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-bold mb-2 text-[#cf240a]">
                TRADITIONAL RECIPES, MODERN CONVENIENCE
              </h3>
              <p className="text-[#cf240a] ">
                The secret to authentic taste lies in the traditional process. We
                carefully roast, grind, and blend our spices according to age-old
                family recipes. We do all the time-consuming work of preparation
                for you, so you can enjoy a perfect, traditional meal in just a
                few minutes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}