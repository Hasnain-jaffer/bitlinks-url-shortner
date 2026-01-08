import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide cursor-pointer">
          <Link href="/" className="hover:text-blue-400 transition">BitLinks</Link>
        </div>

        {/* Navigation Container 
            - On Mobile: Flex-col to stack links above buttons
            - On Desktop: Flex-row to align them inline
        */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
          
          {/* Links 
             - flex-row & flex-wrap: Keeps links horizontal on mobile (saves vertical space)
             - justify-center: Centers them on mobile
          */}
          <ul className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base text-gray-300 font-medium">
            <li>
              <Link href="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">About</Link>
            </li>
            <li>
              <Link href="/shorten" className="hover:text-white transition">Shorten</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>

          {/* Buttons 
             - flex-row: Side-by-side buttons on mobile
             - w-auto: Prevents them from stretching unnecessarily
          */}
          <div className="flex flex-row gap-4">
            <button className="bg-blue-600 px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-500 transition shadow-md">
              <Link href="/shorten">Try Now</Link>
            </button>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 border border-gray-700 px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-700 transition"
            >
              GitHub
            </a>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;