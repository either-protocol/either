import { useState } from 'react';
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { IoSearch } from "react-icons/io5";

const initialLabels = [
  { id: 'all', name: 'All', active: true },
  { id: 'elections', name: 'Elections' },
  { id: 'crypto', name: 'Crypto' },
  { id: 'business', name: 'Business' },
  { id: 'stocks', name: 'Stocks' },
  { id: 'sports', name: 'Sports' },
  { id: 'politics', name: 'Politics' },
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'technology', name: 'Technology' },
  { id: 'science', name: 'Science' },
  { id: 'health', name: 'Health' },
  { id: 'business', name: 'Business' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('all');
  
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <nav className="border-b sticky top-0 z-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center mt-4">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-black hover:opacity-65 cursor-pointer borde" style={{ fontFamily: 'ITC Bauhaus Medium' }}>
                either
              </h1>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search markets"
                className="hidden md:block w-96 pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-200 hover:border-gray-300 focus:outline-none focus:border-gray-500 focus:border-[1.5px]"
              />
              <IoSearch className="hidden md:block absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <div>

            </div>
            <div>
              <WalletSelector />
            </div>

      </div>
      <div className="container mx-auto pt-4 py-2">
        <div className="flex items-center gap-2 px-4 overflow-x-auto no-scrollbar">
          <button className="rounded-lg text-[15px] font-[510] whitespace-nowrap transition-all text-gray-800 tracking-wide">Trending</button>
        {initialLabels.map((label) => (
            <button
              key={label.id}
              onClick={() => handleTabClick(label.id)}
              className={`px-2 py-2 rounded-lg text-[15px] font-[520] whitespace-nowrap transition-all tracking-wide
                ${activeTab === label.id
                  ? 'text-gray-5400'
                  : ' text-gray-400 hover:text-gray-800'
                }`}
            >
              {label.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
