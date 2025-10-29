import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#DA291C] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Column 1: Logo (Always visible) */}
          <div className="flex justify-center md:justify-start">
            <div className="w-40 h-20 relative mb-10">
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

          {/* Column 2: Navigation (Hidden on mobile/tablet) */}
          <div className="hidden lg:block text-center md:text-left ">
            <ul className="space-y-2">
              {[ 'About Us', 'Products', 'Real & Sustainable'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="hover:text-white transition-colors text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Links (Always visible) */}
          <div className="text-center md:text-left">
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="transition-colors text-White">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className=" transition-colors text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>

            {/* Copyright */}
            <div className="mt-4 pt-4 border-t border-white">
              <p className="text-sm text-white">
                &copy; {new Date().getFullYear()} Taste Buds. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}