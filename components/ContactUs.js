"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWhatsapp, FaInstagram, FaTelegram, FaEnvelope } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function WhereToBuy() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the title
      gsap.fromTo(
        ".title-animate",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".title-animate",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate the description text
      gsap.fromTo(
        ".description-animate",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".description-animate",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate social media links with stagger
      gsap.fromTo(
        ".social-link",
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".social-links-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate the bottom text
      gsap.fromTo(
        ".bottom-text-animate",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".bottom-text-animate",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="Contact-Us" 
      className="bg-yellow-400 py-10"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Title */}
        <h2 
          className="title-animate text-4xl font-bold text-center text-white mb-8"
          style={{ opacity: 0 }}
        >
          CONTACT <span className="text-amber-800">US</span>
        </h2>

        {/* Centered Social Links */}
        <div className="text-center">
          <p 
            className="description-animate text-lg text-amber-900 mb-8"
            style={{ opacity: 0 }}
          >
            Message us directly on your preferred platform:
          </p>

          <div className="social-links-container flex flex-wrap justify-center gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/PHONE_NUMBER"
              className="social-link bg-amber-50 hover:bg-amber-200 text-amber-900 p-4 rounded-lg flex items-center gap-3 transition-colors border border-amber-200"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 0 }}
            >
              <FaWhatsapp className="text-2xl text-amber-700" />
              <span>WhatsApp</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/USERNAME"
              className="social-link bg-amber-50 hover:bg-amber-200 text-amber-900 p-4 rounded-lg flex items-center gap-3 transition-colors border border-amber-200"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 0 }}
            >
              <FaInstagram className="text-2xl text-amber-700" />
              <span>Instagram</span>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/USERNAME"
              className="social-link bg-amber-50 hover:bg-amber-200 text-amber-900 p-4 rounded-lg flex items-center gap-3 transition-colors border border-amber-200"
              target="_blank"
              rel="noopener noreferrer"
              style={{ opacity: 0 }}
            >
              <FaTelegram className="text-2xl text-amber-700" />
              <span>Telegram</span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@tastebuds.com"
              className="social-link bg-amber-50 hover:bg-amber-200 text-amber-900 p-4 rounded-lg flex items-center gap-3 transition-colors border border-amber-200"
              style={{ opacity: 0 }}
            >
              <FaEnvelope className="text-2xl text-amber-700" />
              <span>Email</span>
            </a>
          </div>

          <p 
            className="bottom-text-animate text-amber-800 text-sm mt-8"
            style={{ opacity: 0 }}
          >
            We typically respond within 1-2 hours during business days.
          </p>
        </div>
      </div>
    </section>
  );
}