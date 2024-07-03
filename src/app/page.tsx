import YouTubeBackground from "@/components/YoutubeBackground/YoutubeBackground";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TWITTER_URL = "https://x.com/sureabouthatsol";
const TELEGRAM_URL = "https://t.co/4UISwX8EnZ";
const PUMP_URL =
  "https://pump.fun/C61cA2s9cGjuWVU4nv4Ft9KMNjph9pXKspYTbHwLpump";
const CA_ADDRESS = "C61cA2s9cGjuWVU4nv4Ft9KMNjph9pXKspYTbHwLpump";

const BLURB = `The 'You sure about that?' meme comes from one of the sketches in
Tim Robinson's Netflix special, "I Think You Should Leave." It was
crowned a top 10 meme of 2023 and 2024 on TikTok.`;

export default function Home() {
  return (
    <div className="relative w-full h-screen font-white">
      <YouTubeBackground videoId="2ZOIpsxfzxw" />

      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
          <div className="flex flex-col items-center justify-center mt-16 text-xl">
            <a
              href={`${PUMP_URL}`}
              className="text-2xl font-bold text-yellow-300 hover:text-yellow-900 transition duration-300 ease-in-out w-auto overflow-hidden whitespace-nowrap text-ellipsis"
            >
              CA: {`${CA_ADDRESS}`}
            </a>
          </div>

          <div className="flex flex-col items-center justify-center mt-16">
            <p className="text-center max-w-96">{BLURB}</p>
          </div>

          <div className="flex flex-col items-center justify-center mt-16">
            <ul
              className="flex justify-center items-center list-none p-4 space-x-14"
              id="#socials"
            >
              <li>
                <Link
                  href={`${TELEGRAM_URL}`}
                  className="text-gray-100 hover:text-gray-300 transition-colors duration-300 text-4xl"
                >
                  <FaTelegramPlane />
                </Link>
              </li>
              <li>
                <Link
                  href={`${TWITTER_URL}`}
                  className="text-gray-100 hover:text-gray-300 transition-colors duration-300 text-4xl"
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href={`${PUMP_URL}`}
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
                  href={`${PUMP_URL}`}
                  className="text-gray-100 hover:text-gray-300 transition-colors duration-300 text-xl font-white"
                >
                  DEX
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center mt-16">
            <a
              href="https://www.kapwing.com/explore/you-sure-about-that-meme-template"
              className="text-4xl font-bold text-yellow-300 hover:text-yellow-900 transition duration-300 ease-in-out"
            >
              YouSure Meme Generator
            </a>
          </div>

          <div className="flex flex-col items-center justify-center mt-16">
            <section className="p-8">
              <h2 className="text-3xl font-bold mb-4">Plans</h2>
              <ul className="list-disc list-inside text-lg">
                <li>
                  1: Join our{" "}
                  <a
                    href={`${TELEGRAM_URL}`}
                    className="text-yellow-300 hover:text-yellow-900 transition duration-300 ease-in-out"
                  >
                    Telegram
                  </a>
                  /{" "}
                  <a
                    href={`${TWITTER_URL}`}
                    className="text-yellow-300 hover:text-yellow-900 transition duration-300 ease-in-out"
                  >
                    Twitter
                  </a>{" "}
                  and share the best yousureaboutthat memes
                </li>
                <li>
                  2. Give recommendations on what you want to see on this site
                </li>
                <li>3. Build the community</li>
                <li>4. F the jeets, lets run it</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
