import { MdOutlineGridOn } from "react-icons/md";
import React, { useState, useRef, useEffect } from 'react';

const MarketDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
    >
      <button
        className="flex items-center space-x-2 px-4 py-2 transition-colors duration-300 text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium flex flex-col items-center">
          <MdOutlineGridOn size={20} />
          Markets
        </span>
      </button>

      <div
        className={`absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-600 text-gray-600
          transition-all duration-300 origin-top
          ${isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
      >
        <div className="p-6 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Browse</h3>
              <button className="text-blue-500 text-sm hover:text-blue-600 font-semibold">
                View all
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "⚡", label: "New" },
                { icon: "📈", label: "Trending" },
                { icon: "💧", label: "Liquid" },
                { icon: "⏰", label: "Ending Soon" }
              ].map((item) => (
                <button
                  key={item.label}
                  className="flex items-center space-x-2 p-3 rounded-lg transition-colors duration-200 border border-gray-600"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Topics</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🌍", label: "Middle East" },
                { icon: "🏛️", label: "Politics" },
                { icon: "💰", label: "Crypto" },
                { icon: "🏀", label: "Sports" },
                { icon: "🎬", label: "Pop Culture" },
                { icon: "🔬", label: "Science" }
              ].map((item) => (
                <button
                  key={item.label}
                  className="flex items-center space-x-2 p-3 rounded-lg transition-colors duration-200 border border-gray-600"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDropdown;