"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Reviews() {
  const reviewsRef = useRef(null);
  const reviewsContainerRef = useRef(null);

  useEffect(() => {
    if (!reviewsRef.current || !reviewsContainerRef.current) return;

    const setupAnimation = () => {
      const reviews = reviewsRef.current.children;
      const containerWidth = reviewsContainerRef.current.offsetWidth;
      const reviewWidth = reviews[0].offsetWidth + 24; // Include gap
      const totalWidth = reviewWidth * reviews.length;
      
      // Clear any existing clones
      while (reviewsRef.current.children.length > 3) {
        reviewsRef.current.removeChild(reviewsRef.current.lastChild);
      }

      // Duplicate reviews for seamless looping on wider screens
      if (window.innerWidth >= 768) {
        const clones = Array.from(reviews).map(review => review.cloneNode(true));
        clones.forEach(clone => reviewsRef.current.appendChild(clone));
      }

      // Set up animation
      const tl = gsap.timeline({ repeat: -1 });
      tl.fromTo(
        reviewsRef.current,
        { x: 0 },
        {
          x: window.innerWidth >= 768 ? -totalWidth : -reviewWidth * 1.5,
          duration: window.innerWidth >= 768 ? 20 : 15,
          ease: "none"
        }
      );

      // Pause on hover
      const container = reviewsContainerRef.current;
      const handleMouseEnter = () => tl.pause();
      const handleMouseLeave = () => tl.play();

      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        tl.kill();
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    };

    setupAnimation();
    window.addEventListener("resize", setupAnimation);
    return () => window.removeEventListener("resize", setupAnimation);
  }, []);

  return (
    <section id="reviews" className="bg-yellow-400 py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6 md:mb-8">
          WHAT OUR <span className="text-amber-900">CUSTOMERS SAY</span>
        </h2>

        <div 
          ref={reviewsContainerRef}
          className="relative overflow-x-hidden py-4"
        >
          <div 
            ref={reviewsRef}
            className="flex gap-4 md:gap-6 lg:gap-8 w-max px-4"
          >
            {/* Review 1 */}
            <div className="bg-amber-700 rounded-lg border-none p-4 md:p-6 min-w-[260px] md:min-w-[300px] ">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                  <span className="text-amber-900 font-bold">P</span>
                </div>
                <span className="font-semibold text-white">Priya S.</span>
              </div>
              <p className="italic text-white text-sm md:text-base">
                &ldquo;Absolutely delicious! The ready-to-eat meals taste just like home.&rdquo;
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-amber-700 rounded-lg shadow-md p-4 md:p-6 border-none min-w-[260px] md:min-w-[300px]">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                  <span className="text-amber-700 font-bold">R</span>
                </div>
                <span className="font-semibold text-white">Rahul M.</span>
              </div>
              <p className="italic text-white text-sm md:text-base">
                &ldquo;Love the variety and quality. My family enjoys the snacks every evening.&rdquo;
              </p>
            </div>

            {/* Review 3 */}
            <div className="bg-amber-700 rounded-lg shadow-md border-none p-4 md:p-6 border min-w-[260px] md:min-w-[300px]">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                  <span className="text-amber-700 font-bold">A</span>
                </div>
                <span className="font-semibold text-white">Anjali K.</span>
              </div>
              <p className="italic text-white text-sm md:text-base">
                &ldquo;Quick delivery and great customer service. Highly recommend TasteBuds!&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}