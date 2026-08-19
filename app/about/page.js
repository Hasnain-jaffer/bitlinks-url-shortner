"use client";
import { motion } from "framer-motion";

const features = [
  { title: "Link Shortening", text: "Convert lengthy URLs into clean, memorable links instantly with our fast and reliable shortening engine." },
  { title: "Analytics & Tracking", text: "Gain real-time insights into link clicks, audience location, and engagement to optimize your sharing strategy." },
  { title: "Custom Branding", text: "Personalize your links with custom slugs and branded domains to strengthen your brand identity." },
  { title: "Secure & Reliable", text: "Our system ensures safe redirections with spam filtering and high uptime, so your links always work." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-center"
        >
          About <span className="text-blue-400">BitLinks</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 mb-12 text-center leading-relaxed max-w-2xl mx-auto"
        >
          BitLinks is a modern URL shortening platform designed to make link sharing
          smarter, faster, and more impactful — turning long, cluttered URLs into
          sleek, branded links in seconds, all while tracking their performance.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              whileHover={{ y: -6 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/40 transition-all"
            >
              <h2 className="text-xl font-semibold mb-3 text-blue-400">{f.title}</h2>
              <p className="text-gray-400">{f.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            At <span className="text-blue-400 font-semibold">BitLinks</span>, our mission
            is to make every link you share meaningful and measurable. Start shortening,
            tracking, and sharing smarter — because every click counts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
