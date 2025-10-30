"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, Close } from "@mui/icons-material";
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

    // Mobile drawer initial state
    gsap.set(navRef.current, {
      y: -320,
      opacity: 0,
      display: "none",
      position: "absolute",
      top: `${headerHeight}px`,
      left: 0,
      right: 0,
      backgroundColor: "white",
      pointerEvents: "none",
      zIndex: 40,
      width: "100%"
    });

    menuAnimation
      .to(navRef.current, {
        display: "block",
        pointerEvents: "auto",
        duration: 0.01
      })
      .to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
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
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(item.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted, pathname]);

  const handleNavigation = (item) => {
    if (item.id && pathname === "/") {
      const section = document.getElementById(item.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(item.id);
      }
    } else if (item.path) {
      router.push(item.path);
    }
    setIsOpen(false);
  };

  const isActive = (item) => {
    if (pathname === "/") {
      return (item.path === "/" && !activeSection) || activeSection === item.id;
    }
    if (!item.path) return false;
    return pathname === item.path || pathname.startsWith(`${item.path}/`);
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-md"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 lg:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Tastebox Logo"
              width={160}
              height={64}
              onClick={() => router.push("/")}
              className="h-10 w-28 sm:h-12 sm:w-32 lg:h-14 lg:w-36 object-contain cursor-pointer select-none"
              priority
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4 font-semibold">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className={`rounded-md px-3 py-2 lg:px-4 lg:py-2.5 text-sm lg:text-base transition-all ${
                  isActive(item)
                    ? "bg-[#cf240a] text-white"
                    : "text-[#cf240a] hover:bg-[#cf240a]/10"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#cf240a] hover:bg-[#cf240a]/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <Close className="text-[#cf240a] text-2xl" />
            ) : (
              <Menu className="text-[#cf240a] text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        <nav
          ref={navRef}
          className="md:hidden bg-white shadow-xl border-t border-amber-200"
          style={{ display: "none" }}
        >
          <div className="px-3 py-3 sm:px-4 sm:py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className={`w-full text-left rounded-md px-4 py-3 text-base transition-all ${
                  isActive(item)
                    ? "bg-[#cf240a] text-white"
                    : "text-[#cf240a] hover:bg-[#cf240a]/10"
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