import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide cursor-pointer">
          
            <Link href="/" className="hover:text-blue-400 transition">BitLinks</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400 transition">About</Link>
          </li>
          <li>
            <Link href="/shorten" className="hover:text-blue-400 transition">Shorten</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400 transition">Contact Us</Link>
          </li>

          {/* Buttons */}
          <li>
            <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition cursor-pointer">
              <Link href="/shorten"> Try Now</Link>
            </button>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
