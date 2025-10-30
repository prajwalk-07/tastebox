"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebook, 
  FaTwitter, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaBuilding,
  FaUtensils
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
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

      // Animate sections with stagger
      gsap.fromTo(
        ".section-animate",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".sections-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate contact items
      gsap.fromTo(
        ".contact-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-items",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate social links
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="Contact-Us" 
      className="bg-yellow-500 py-16"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="title-animate text-4xl md:text-5xl font-bold text-black mb-6"
            style={{ opacity: 0 }}
          >
            CONTACT US
          </h2>
          <p 
            className="description-animate text-lg md:text-xl text-black max-w-3xl mx-auto"
          >
            We&apos;d love to hear from you! Whether you have a question
            about our products, a suggestion, or just want to share your
            Taste Box experience, feel free to reach out.
          </p>
        </div>

        <div className="sections-container grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* General & Trade Enquiries */}
          <div className="section-animate bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <FaUtensils className="text-3xl text-amber-700 mr-4" />
              <h3 className="text-2xl font-bold text-[#cf240a]">General & Trade Enquiries</h3>
            </div>
            
            <div className="contact-items space-y-4">
              <div className="contact-item flex items-center">
                <FaEnvelope className="text-xl text-amber-700 mr-4" />
                <div>
                  <p className="text-black">Email</p>
                  <a 
                    href="mailto:tasteboxtheflavourofhome@gmail.com"
                    className="text-[#cf240a] hover:text-[#cf240a] font-medium"
                  >
                    tasteboxtheflavourofhome@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item flex items-center">
                <FaPhone className="text-xl text-amber-700 mr-4" />
                <div>
                  <p className="text-black">Phone</p>
                  <a 
                    href="tel:+91 9110697312"
                    className="text-[#cf240a] hover:text-[#cf240a] font-medium"
                  >
                    +91 9110697312
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Our Journey */}
          <div className="section-animate bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <FaInstagram className="text-3xl text-amber-700 mr-4" />
              <h3 className="text-2xl font-bold text-[#cf240a]">Follow Our Journey</h3>
            </div>
            
            <p className="text-black mb-6">
              Stay connected with us for new product launches, delicious
              recipes, and special offers!
            </p>

            <div className="social-links-container grid grid-cols-2 gap-4">
              <a
                href="https://instagram.com/tastebox"
                className="social-link bg-amber-50 hover:bg-amber-200 text-[#cf240a] p-4 rounded-lg flex items-center gap-3 transition-colors border border-amber-200 shadow-md hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
                style={{ opacity: 0 }}
              >
                <FaInstagram className="text-2xl text-[#cf240a]" />
                <span>Instagram</span>
              </a>

              <a
                href="https://facebook.com/tastebox"
                className="social-link bg-amber-50 hover:bg-amber-200 text-[#cf240a] p-4 rounded-lg flex items-center gap-3 transition-colors border border-amber-200 shadow-md hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
                style={{ opacity: 0 }}
              >
                <FaFacebook className="text-2xl text-[#cf240a]" />
                <span>Facebook</span>
              </a>

              <a
                href="https://twitter.com/tastebox"
                className="social-link bg-amber-50 hover:bg-amber-200 text-[#cf240a] p-4 rounded-lg flex items-center gap-3 transition-colors border border-amber-200 shadow-md hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
                style={{ opacity: 0 }}
              >
                <FaTwitter className="text-2xl text-[#cf240a]" />
                <span>Twitter</span>
              </a>

              <a
                href="https://wa.me/919110697312"
                className="social-link bg-amber-50 hover:bg-amber-200 text-[#cf240a] p-4 rounded-lg flex items-center gap-3 transition-colors border border-amber-200 shadow-md hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
                style={{ opacity: 0 }}
              >
                <FaWhatsapp className="text-2xl text-[#cf240a]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="section-animate bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 lg:col-span-2">
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-3xl text-amber-700 mr-4" />
              <h3 className="text-2xl font-bold text-[#cf240a]">Address</h3>
            </div>
            
            <div className="contact-item">
              <p className="text-lg text-black mb-2">
                <strong>Taste Box The Flavour of Home</strong>
              </p>
              <p className="text-black">
                #1552, Opp SKP Temple, Bazar Street, Nanjungud, Mysuru
                dist, Karnataka-571301
              </p>
            </div>
          </div>

          {/* Manufacturing Info */}
          <div className="section-animate bg-white rounded-2xl p-8 shadow-xl border  hover:shadow-2xl transition-shadow duration-300 lg:col-span-2">
            <div className="flex items-center mb-4">
              <FaBuilding className="text-3xl text-amber-700 mr-4" />
              <h3 className="text-2xl font-bold text-[#cf240a]">Manufacturing & Packing</h3>
            </div>
            
            <div className="contact-item">
              <p className="text-lg text-black">
                <strong>Mfg & Pkd by:</strong> Sri Lakshmi Venkateshwara Food Products, Mysuru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}