import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-blue-200">
      {/* Updates:
        - Changed fixed h-[60vh] to min-h-screen or h-auto for mobile to prevent overflow.
        - Used grid-cols-1 for mobile, grid-cols-2 for tablet/desktop (md).
        - Added padding (py-12) for mobile vertical spacing.
      */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[60vh] py-10 md:py-0">
        
        {/* Text Container */}
        <div className="flex flex-col justify-center items-center gap-4 order-2 md:order-1">
           {/* Responsive Font Size: text-2xl on mobile, 4xl on desktop */}
           <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4">
             The Best URL Shortener in the Market.
           </p>
           
           {/* Responsive Padding: px-4 on mobile, px-12/16 on desktop */}
           <p className="text-sm md:text-md lg:text-lg px-4 md:px-12 lg:px-24 text-center leading-relaxed">
             BitLinks makes link sharing smarter and faster. Transform long, cluttered URLs into sleek, branded links that are easy to share and track. Gain real-time insights, boost engagement, and take control of your link performance with powerful analytics.
           </p>
           
           <div className="flex gap-4 justify-center items-center mt-4">
             <div>
              <button className="bg-gray-900 px-6 py-3 rounded-lg text-white hover:bg-gray-800 transition cursor-pointer text-sm md:text-base">
                <Link href="/shorten"> Try Now</Link>
              </button>
            </div>
            <div>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 px-6 py-3 rounded-lg text-white hover:bg-gray-800 transition text-sm md:text-base"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Image Container */}
        {/* Updates: 
           - Added h-64 for mobile (so the image takes up space).
           - h-full for desktop to fill the grid cell.
           - w-full to ensure width coverage.
        */}
        <div className="flex justify-start relative h-64 w-full md:h-full order-1 md:order-2">
          <Image 
            src={"/home.png"} 
            alt="Hero Image" 
            fill={true} 
            className="object-contain md:object-cover" // Ensure image scales correctly
          />
        </div>
      </section>
    </main>
  );
}