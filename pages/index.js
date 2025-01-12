import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}>
      <main className="flex flex-col gap-10 row-start-2 items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center" style={{ fontFamily: 'ITC Bauhaus Medium' }}>
          either × <Image
            src="/aptos-apt-logo.png"
            alt="Aptos logo"
            width={40}
            height={40}
            className="inline"
          />
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-center">
          Prediction Market on Aptos
        </h2>
        
        <p className="text-base md:text-lg text-center text-gray-600 dark:text-gray-300">
          Launching Soon
        </p>
        

        <div className="flex gap-6 items-center">
          <a
            href="https://x.com/eitherprotocol"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/x.svg"
              alt="Twitter"
              width={28}
              height={28}
              className="dark:invert"
            />
          </a>
          <a
            href="https://discord.gg/pUVsFGF7J3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/discord.svg"
              alt="Discord"
              width={36}
              height={36}
              className="dark:invert"
            />
          </a>
        </div>
      </main>
    </div>
  );
}
