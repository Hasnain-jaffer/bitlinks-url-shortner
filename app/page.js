import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-blue-200">
      <section className="grid grid-cols-2 h-[60vh]">
        <div className="flex flex-col justify-center items-center gap-4">
           <p className="text-3xl font-bold">The Best URL Shorterner in the Market.</p>
           <p className="text-md px-26 text-center">BitLinks makes link sharing smarter and faster. Transform long, cluttered URLs into sleek, branded links that are easy to share and track. Gain real-time insights, boost engagement, and take control of your link performance with powerful analytics.</p>
           <div className="flex gap-4 justify-center items-center">
           <div>
            <button className="bg-gray-900 px-4 py-2 rounded-lg text-white hover:bg-gray-800 transition cursor-pointer">
              <Link href="/shorten"> Try Now</Link>
            </button>
          </div>
          <div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 px-4 py-2 rounded-lg text-white hover:bg-gray-800 transition"
            >
              GitHub
            </a>
          </div>
        </div>
        </div>
        <div className="flex justify-start relative">
          <Image src={"/home.png"} alt="Hero Image" fill={true}/>
        </div>
      </section>
    </main>
  );
}
