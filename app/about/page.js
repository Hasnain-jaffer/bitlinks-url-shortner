export default function About() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          About <span className="text-blue-500">BitLinks</span>
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg text-gray-300 mb-8 text-center leading-relaxed">
          BitLinks is a modern URL shortening platform designed to make link sharing
          smarter, faster, and more impactful. Whether you’re a business, content creator,
          or everyday internet user, BitLinks helps you transform long, cluttered URLs
          into sleek, branded links in seconds — all while tracking their performance.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-3 text-blue-400">Link Shortening</h2>
            <p className="text-gray-400">
              Convert lengthy URLs into clean, memorable links instantly with our
              fast and reliable shortening engine.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-3 text-blue-400">Analytics & Tracking</h2>
            <p className="text-gray-400">
              Gain real-time insights into link clicks, audience location, and engagement
              to optimize your sharing strategy.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-3 text-blue-400">Custom Branding</h2>
            <p className="text-gray-400">
              Personalize your links with custom slugs and branded domains to strengthen
              your brand identity.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-3 text-blue-400">Secure & Reliable</h2>
            <p className="text-gray-400">
              Our system ensures safe redirections with spam filtering and high uptime,
              so your links always work.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 max-w-2xl mx-auto">
            At <span className="text-blue-500 font-semibold">BitLinks</span>, our mission is
            to make every link you share meaningful and measurable. Start shortening, tracking,
            and sharing smarter — because every click counts.
          </p>
        </div>
      </div>
    </section>
  );
}
