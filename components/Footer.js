import React from 'react';
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-black py-6 px-4 border-t border-gray-200 backdrop-blur-3xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <p>© {new Date().getFullYear()}. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/help" className="hover:opacity-65 cursor-pointer transition-colors">
            Help Center
          </Link>
          <Link href="/privacy" className="hover:opacity-65 cursor-pointer transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:opacity-65 cursor-pointer transition-colors">
            Terms & Conditions
          </Link>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://x.com/eitherprotocol" aria-label="Twitter" className="text-black hover:opacity-65 cursor-pointer">
          <FaXTwitter size={22}/>
          </a>
          <a href="https://discord.gg/pUVsFGF7J3" aria-label="Discord" className="text-black hover:opacity-65 cursor-pointer">
          <FaDiscord size={22}/>
          </a>
        </div>
      </div>
    </footer>
  );
}