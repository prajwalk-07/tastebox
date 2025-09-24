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
            if (card) {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }
        });
    }, []);

    return (
        <section className="w-full py-8 flex flex-col items-center bg-yellow-400">
            <h2 className="gallery-title text-2xl sm:text-4xl font-bold text-white text-center mb-8">
                REAL AND <span className="text-amber-800">SUSTAINABLE</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full">
                {/* Card 1 */}
                <Card
                    ref={el => (cardsRef.current[0] = el)}
                    className="max-w-sm w-full flex flex-col items-center bg-amber-700 border-none w-[90%]"
                >
                    <Image
                        src="/1.png"
                        alt="Real Kitchen Spices"
                        width={500}
                        height={500}
                        className="w-full h-54 object-cover rounded-t-lg"
                    />
                    <CardContent className="p-6 text-center">
                        <h3 className="text-lg font-bold mb-2 text-white">CONTAINS REAL KITCHEN SPICES</h3>
                        <p className="text-white">
                            We believe the most delicious meals start with real, honest ingredients. In every Taste Box pack, you&apos;ll find the same aromatic spices, wholesome dals, and natural ingredients that you would use in your own home kitchen. We source the best to bring you the authentic &apos;Flavour of Home&apos;.
                        </p>
                    </CardContent>
                </Card>
                {/* Card 2 */}
                <Card
                    ref={el => (cardsRef.current[1] = el)}
                    className="max-w-sm w-full flex flex-col items-center bg-amber-700 border-none w-[90%]"
                >
                    <Image
                        src="/2.png"
                        alt="Traditional Recipes, Modern Convenience"
                        width={400}
                        height={500}
                        className="w-full h-54 object-cover rounded-t-lg"
                    />
                    <CardContent className="p-6 text-center">
                        <h3 className="text-lg font-bold mb-2 text-white">TRADITIONAL RECIPES, MODERN CONVENIENCE</h3>
                        <p className="text-white">
                            The secret to authentic taste lies in the traditional process. We carefully roast, grind, and blend our spices according to age-old family recipes. We do all the time-consuming work of preparation for you, so you can enjoy a perfect, traditional meal in just a few minutes.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}