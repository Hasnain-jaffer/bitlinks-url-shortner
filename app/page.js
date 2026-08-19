"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gray-950">
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[80vh] py-16 md:py-0 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center items-center md:items-start gap-5 order-2 md:order-1 px-6"
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center md:text-left leading-tight">
            The Best <span className="text-blue-400">URL Shortener</span> in the Market.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 text-center md:text-left leading-relaxed max-w-xl">
            BitLinks makes link sharing smarter and faster. Transform long, cluttered URLs
            into sleek, branded links that are easy to share and track. Gain real-time
            insights and take control of your link performance.
          </p>

          <div className="flex gap-4 mt-4">
            <Link
              href="/shorten"
              className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-500 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 text-sm md:text-base"
            >
              Try Now
            </Link>
            
              href="https://github.com/Hasnain-jaffer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 border border-gray-700 px-6 py-3 rounded-lg text-white font-semibold hover:bg-gray-700 transition-all hover:-translate-y-0.5 text-sm md:text-base"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative h-64 md:h-full w-full order-1 md:order-2"
        >
          <Image
            src="/home.png"
            alt="Hero Image"
            fill
            className="object-contain md:object-cover"
            priority
          />
        </motion.div>
      </section>
    </main>
  );
}
