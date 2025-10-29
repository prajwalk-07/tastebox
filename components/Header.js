"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, LocalDining, Close } from "@mui/icons-material";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Home", id: "home", path: "/" },
    { name: "Our Products", path: "/our-products" },
    { name: "About Us", path: "/about-us" },
    { name: "Certification", path: "/certification" },
    { name: "Awards", path: "/awards" },
    { name: "Contact Us", id: "Contact-Us", path: "/contact-us" }
  ];

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, [navItems]);

  useEffect(() => {
    if (!isMounted || !navRef.current || !headerRef.current) return;

    const headerHeight = headerRef.current.offsetHeight;
    const menuAnimation = gsap.timeline({ paused: true });

    // Set initial hidden state
    gsap.set(navRef.current, {
      y: -300,
      opacity: 0,
      display: "none",
      position: "absolute",
      top: `${headerHeight}px`,
      left: 0,
      right: 0,
      backgroundColor: "white",
      pointerEvents: "none",
      zIndex: 40,
    });

    menuAnimation
      .to(navRef.current, {
        display: "block",
        pointerEvents: "auto",
        duration: 0.01,
      })
      .to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });

    if (isOpen) {
      menuAnimation.play();
    } else {
      menuAnimation.reverse();
    }

    return () => {
      menuAnimation.kill();
    };
  }, [isOpen, isMounted]);

  useEffect(() => {
    if (!isMounted || pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        if (item.id) {
          const section = document.getElementById(item.id);
          if (section) {
            const { offsetTop, offsetHeight } = section;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(item.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted, pathname]);

  const handleNavigation = (item) => {
    if (item.id && pathname === "/") {
      // Handle section navigation on home page
      const section = document.getElementById(item.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(item.id);
      }
    } else if (item.path) {
      // Handle page navigation
      router.push(item.path);
    }
    setIsOpen(false);
  };

  const isActive = (item) => {
    if (pathname === "/") {
      return activeSection === item.id;
    }
    return item.path === pathname;
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 p-2 bg-white text-amber-800 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Tastebox Logo"
            width={128}
            height={56}
            onClick={() => router.push("/")}
            className="h-14 w-32 object-contain cursor-pointer select-none"
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 text-amber-800 font-bold">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item)}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${
                isActive(item)
                  ? "bg-amber-800 text-white font-bold"
                  : "hover:bg-amber-100 text-[#cf240a]"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md text-amber-800 transition-colors hover:bg-amber-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <Close className="text-amber-800 text-2xl" />
          ) : (
            <Menu className="text-amber-800 text-xl" />
          )}
        </button>

        {/* Mobile Nav */}
        <nav
          ref={navRef}
          className="md:hidden bg-white shadow-xl border-t border-amber-200"
          style={{ display: "none" }}
        >
          <div className="container mx-auto p-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className={`px-4 py-3 rounded-md transition-all duration-200 text-left ${
                  isActive(item)
                    ? "bg-amber-800 text-white font-bold"
                    : "hover:bg-amber-100 text-amber-800"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}