import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-amber-700 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Column 1: Logo (Always visible) */}
          <div className="flex justify-center md:justify-start">
            <div className="w-40 h-20 relative">
              <h1 className='text-3xl font-bold text-black font-rubik text-center'>
                Tastebox
              </h1>
            </div>
          </div>

          {/* Column 2: Navigation (Hidden on mobile/tablet) */}
          <div className="hidden lg:block text-center md:text-left">
            <ul className="space-y-2">
              {[ 'About Us', 'Products', 'Real & Sustainable'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="hover:text-black-200 transition-colors text-black"
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
                <Link href="/contact" className="hover:text-black-200 transition-colors text-black">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-black-200 transition-colors text-black">
                  Privacy Policy
                </Link>
              </li>
            </ul>

            {/* Copyright */}
            <div className="mt-8 pt-4 border-t border-amber-800">
              <p className="text-sm text-black">
                &copy; {new Date().getFullYear()} Taste Buds. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}