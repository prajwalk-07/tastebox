import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#DA291C] text-white py-10">
      <div className="container mx-auto px-4">
        {/* 2 columns on mobile/tablet (=> 2 rows for 3 items), 3 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {/* Column 1: Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-40 h-20 relative mb-6">
              <Image
                src="/logo.png"
                alt="Tastebox Logo"
                width={160}
                height={80}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Column 2: Navigation (now visible on all screens) */}
          <div className="text-center lg:text-left ">
          <ul className="space-y-2">
              <li>
                <Link href="/our-products" className="transition-colors text-white">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="transition-colors text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/certification" className="transition-colors text-white">
                  Certification
                </Link>
              </li>
              </ul>
          </div>

          {/* Column 3: Links */}
          <div className="text-center lg:text-left ">
          <ul className="space-y-2">
              <li>
                <Link href="/awards" className="transition-colors text-white">
                  Awards
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="transition-colors text-white">
                  Contact Us
                </Link>
              </li>
             
              </ul>


            {/* Copyright */}
            <div className="mt-4 pt-4 border-t border-white">
              <p className="text-sm text-white">
                &copy; {new Date().getFullYear()} Taste Box. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}