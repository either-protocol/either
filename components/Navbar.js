import { useEffect, useRef, useState } from 'react';
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { IoSearch } from "react-icons/io5";
import MarketDropdown from './MarketDropDown';
import { MdDashboard } from 'react-icons/md';
import { IoMdPodium } from 'react-icons/io';
import { IoStatsChart } from 'react-icons/io5';
import { MdSports } from 'react-icons/md';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { useProfile } from './ProfileContext';

const initialLabels = [
  { id: 'all', name: 'All', active: true },
  { id: 'elections', name: 'Elections' },
  { id: 'crypto', name: 'Crypto' },
  { id: 'business', name: 'Business' },
  { id: 'stocks', name: 'Stocks' },
  { id: 'sports', name: 'Sports' }
];

const navButtons = [
  { id: 'dashboard', label: 'Dashboard', icon: MdDashboard },
  { id: 'sports', label: 'Sports', icon: MdSports },
  { id: 'activity', label: 'Activity', icon: IoStatsChart },
  { id: 'rank', label: 'Rank', icon: IoMdPodium }
];

export default function Navbar() {
  const { userData } = useProfile();
  
  const [activeTab, setActiveTab] = useState('all');
  const [activeNavButton, setActiveNavButton] = useState('market');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleNavButtonClick = (buttonId) => {
    setActiveNavButton(buttonId);
  };
  
  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowProfileDropdown(false);
  };

  return (
    <nav className="border-b sticky top-0 z-10 backdrop-blur-2xl bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black hover:opacity-65 cursor-pointer" style={{ fontFamily: 'ITC Bauhaus Medium' }}>
              <a href="/">
               either
              </a>
            </h1>
          </div>
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search markets"
            className="hidden md:block w-96 pl-10 pr-4 py-2 rounded-lg bg-gray-50 border-2 border-gray-200 hover:border-gray-300 focus:outline-none focus:border-black text-gray-600"
          />
          <IoSearch className="hidden md:block absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-700" />
        </div>

        <div className="flex space-x-2">
          <MarketDropdown />
          {navButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => handleNavButtonClick(button.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-300 text-gray-600
                ${activeNavButton === button.id ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
            >
              <span className="font-medium mx-auto flex flex-col items-center">
                <button.icon size={18} />
                {button.label}
              </span>
            </button>
          ))}
        </div>

        <div ref={dropdownRef} className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <div className="text-gray-700 font-medium">{userData.userBalance}</div>
              <div className="relative">
                <button 
                  onClick={toggleProfileDropdown}
                  className="flex items-center focus:outline-none"
                >
                  <img 
                    src={userData.profileImage || `https://api.dicebear.com/7.x/identicon/svg?seed=${userData.userAvatarSeed}`} 
                    alt="User Avatar" 
                    className="h-10 w-10 rounded-full border-2 border-gray-200"
                  />
                </button>
                
                {showProfileDropdown && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200"
                  >
                    <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                      <p className="font-medium truncate">{userData.userAddress}</p>
                    </div>
                    <a href="/userprofile" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                      <CgProfile className="mr-2" />
                      Profile
                    </a>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <RiLogoutBoxRLine className="mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <WalletSelector />
          )}
        </div>
      </div>
      
      <div className="container mx-auto">
        <div className="flex items-center gap-2 px-4 h-14 md:h-16 overflow-x-auto no-scrollbar">
          {initialLabels.map((label) => (
            <button
              key={label.id}
              onClick={() => handleTabClick(label.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all
                ${activeTab === label.id
                  ? 'bg-indigo-500 text-white shadow-sm'
                  : 'text-gray-500 hover:bg-gray-200'
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