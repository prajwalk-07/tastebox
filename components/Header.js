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
  const [currentUrl, setCurrentUrl] = useState("");

  const navItems = [
    { name: "Home", id: "home", path: "/" },
    { name: "Gallery", id: "gallery", path: "/#gallery" },
    { name: "Contact Us", id: "Contact-Us", path: "/#where-to-buy" },
    { name: "Reviews", id: "reviews", path: "/#reviews" },
    { name: "FAQs", id: "faqs", path: "/#faqs" }
  ];

  useEffect(() => {
    setIsMounted(true);
    setCurrentUrl(window.location.href); // Debug
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, [pathname]);

  const toggleMenu = () => {
    if (!isMounted) return;
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isMounted || !navRef.current || !headerRef.current) return;

    const headerHeight = headerRef.current.offsetHeight;
    const menuAnimation = gsap.timeline({ paused: true });

    // Set initial hidden state
    gsap.set(navRef.current, {
      y: -20,
      opacity: 0,
      display: "none",
      position: "absolute",
      top: `${headerHeight}px`,
      left: 0,
      right: 0,
      backgroundColor: "#d97706", // amber-600
      pointerEvents: "none",
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
        duration: 0.3,
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
    if (!isMounted,pathname,navItems) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted, pathname]);

  const handleNavigation = (item) => {
    if (pathname === "/") {
      const section = document.getElementById(item.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", `/#${item.id}`);
        setCurrentUrl(window.location.href);
      }
    } else {
      router.push(item.path);
    }
    setIsOpen(false);
  };

  const handleMobileNavigation = (item) => {
    handleNavigation(item);
  };

  const getNavLink = (item) => {
  const isActive =
    pathname === "/"
      ? activeSection === item.id
      : item.path === pathname || (item.path.startsWith("/#") && pathname === "/");

  return (
    <button
      key={item.id}
      onClick={() => handleNavigation(item)}
      className={`px-3 py-1 rounded-md transition ${
        isActive
          ? "bg-amber-700 font-bold text-black"
          : "hover:bg-amber-400"
      }`}
    >
      {item.name}
    </button>
  );
};
  const getMobileNavLink = (item) => {
    return (
      <button
        key={item.id}
        onClick={() => handleMobileNavigation(item)}
        className={`px-4 py-3 rounded-md transition text-black hover:bg-amber-600 ${activeSection === item.id ? "bg-amber-800 font-bold" : ""
          }`}
      >
        {item.name}
      </button>
    );
  };

  return (
    <header
      ref={headerRef}
      className="relative z-50 p-2 bg-amber-700 text-black shadow-sm"
    >


      <div className="container mx-auto flex justify-between items-center ">
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
       <nav className="hidden md:flex space-x-4 text-white ">
  {navItems.map((item) => (
    <button
      key={item.id}
      onClick={() => handleNavigation(item)}
      className={`px-3 py-1 rounded-md transition ${
        activeSection === item.id
          ? "bg-amber-700 font-bold text-black"
          : "hover:bg-amber-900"
      }`}
    >
      {item.name}
    </button>
  ))}
</nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-amber-400 transition"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <Close className="text-white text-2xl" />
          ) : (
            <Menu className="text-white text-xl" />
          )}
        </button>

        {/* Mobile Nav */}
        <nav
          ref={navRef}
          className="md:hidden bg-amber-800 shadow-lg"
          style={{ display: "none" }}
        >
          <div className="container mx-auto p-4 flex flex-col space-y-3">
            {navItems.map((item) => getMobileNavLink(item))}
          </div>
        </nav>
      </div>
    </header>
  );
}
