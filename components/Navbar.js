import { useState } from 'react';
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { IoSearch } from "react-icons/io5";

const initialLabels = [
  { id: 'all', name: 'All', active: true },
  { id: 'elections', name: '🗳️ Elections' },
  { id: 'crypto', name: '₿ Crypto' },
  { id: 'business', name: '📈 Business' },
  { id: 'stocks', name: '📊 Stocks' },
  { id: 'sports', name: '⚽ Sports' }
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('all');
  
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <nav className=" border-b sticky top-0 z-10 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-black hover:opacity-65 cursor-pointer" style={{ fontFamily: 'ITC Bauhaus Medium' }}>
                either
              </h1>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search markets"
                className="hidden md:block w-96 pl-10 pr-4 py-2 rounded-lg bg-gray-50 border-2 border-gray-200 hover:border-gray-300 focus:outline-none focus:border-black"
              />
              <IoSearch className="hidden md:block absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-700" />
            </div>
            <div>

            </div>
            <div>
              <WalletSelector />
            </div>

      </div>
      <div className="container mx-auto ">
        <div className="flex items-center gap-2 px-4 h-14 md:h-16 overflow-x-auto no-scrollbar">
        {initialLabels.map((label) => (
            <button
              key={label.id}
              onClick={() => handleTabClick(label.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all
                ${activeTab === label.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : ' text-gray-600 hover:bg-gray-200'
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
