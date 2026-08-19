"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ShortenPage = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    if (!url || !shortUrl) {
      setError("Please fill in both fields.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl: shortUrl }),
      });
      const result = await res.json();

      if (result.success) {
        setGenerated(`${window.location.origin}/${shortUrl}`);
        setUrl("");
        setShortUrl("");
      } else {
        setError(result.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-950 flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-xl bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl"
      >
        <h1 className="font-bold text-2xl md:text-3xl text-white mb-1">
          Generate Your Short URL
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          Paste a long link and choose a custom slug.
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition-all"
            value={url}
            placeholder="Enter your URL"
            onChange={(e) => setUrl(e.target.value)}
          />
          <input
            type="text"
            className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition-all"
            value={shortUrl}
            placeholder="Enter your preferred short URL slug"
            onChange={(e) => setShortUrl(e.target.value)}
          />

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={generate}
            disabled={loading}
            className="bg-blue-600 px-4 py-3 rounded-lg text-white font-bold hover:bg-blue-500 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Generating..." : "Generate"}
          </motion.button>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-400 text-sm"
              >
                {error}
              </motion.p>
            )}

            {generated && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-gray-800 border border-blue-500/30 rounded-lg p-4 mt-2"
              >
                <span className="font-semibold text-gray-300 block mb-1 text-sm">
                  Your link:
                </span>
                <Link
                  target="_blank"
                  href={generated}
                  className="text-blue-400 hover:text-blue-300 underline break-all"
                >
                  {generated}
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default ShortenPage;
