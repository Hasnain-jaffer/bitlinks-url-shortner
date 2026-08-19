"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shorten", label: "Shorten" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gray-950/90 backdrop-blur-md text-white px-6 py-4 shadow-lg border-b border-gray-800 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent hover:scale-105 transition-transform inline-block"
        >
          BitLinks
        </Link>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
          <ul className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base text-gray-300 font-medium">
            {links.map((link) => (
              <li key={link.href} className="relative group">
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
          <div className="flex flex-row gap-4">
            <Link
              href="/shorten"
              className="bg-blue-600 px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-500 transition-all shadow-md hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              Try Now
            </Link>
            
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 border border-gray-700 px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-700 transition-all hover:-translate-y-0.5"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
