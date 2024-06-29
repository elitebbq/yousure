import YouTubeBackground from "@/components/YoutubeBackground/YoutubeBackground";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="relative w-full h-screen font-white">
      <YouTubeBackground videoId="2ZOIpsxfzxw" />

      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center mt-16">
          <p className="text-center">Investing in crypto</p>
        </div>
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
          <div className="flex flex-col items-center justify-center mt-16 text-xl">
            <span className="font-bold text-xl">CA </span>
            theCACACACACACACACA
          </div>

          <div className="flex flex-col items-center justify-center mt-16">
            <ul
              className="flex justify-center items-center list-none p-4 space-x-14"
              id="#socials"
            >
              <li>
                <Link
                  href="https://t.me/"
                  className="text-gray-100 hover:text-gray-300 transition-colors duration-300 text-4xl"
                >
                  <FaTelegramPlane />
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/"
                  className="text-gray-100 hover:text-gray-300 transition-colors duration-300 text-4xl"
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href="https://pump.fun/"
                  className="text-gray-100 hover:text-gray-300 transition-colors duration-300 text-xl font-white"
                >
                  <Image
                    src="/images/pump-logo.png"
                    alt="Pump.fun logo"
                    width={45}
                    height={48}
                    priority
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-100 hover:text-gray-300 transition-colors duration-300 text-xl font-white"
                >
                  DEX (soon)
                </Link>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
