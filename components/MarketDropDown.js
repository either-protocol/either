import { MdOutlineGridOn } from "react-icons/md";
import React, { useState, useRef, useEffect } from 'react';

const MarketDropdown = ({ categories, topics }) => {
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
        <div className="p-4 md:p-6 space-y-4 md:space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <h3 className="text-base md:text-lg font-medium">Browse</h3>
              <button 
                onClick={() => window.location.href = '/markets'}
                className="text-blue-500 text-sm hover:text-blue-600 font-semibold hover:underline"
              >
                View all
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {categories.map((item) => (
                <button
                  key={item.label}
                  onClick={() => window.location.href = `/markets/${item.slug}`}
                  className="flex items-center space-x-2 p-2 md:p-3 rounded-lg transition-colors duration-200 
                    border border-gray-600 hover:bg-gray-50 active:bg-gray-100"
                >
                  <span className="text-lg md:text-xl">{item.icon}</span>
                  <span className="text-xs md:text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">Topics</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {topics.map((item) => (
                <button
                  key={item.label}
                  onClick={() => window.location.href = `/topics/${item.slug}`}
                  className="flex items-center space-x-2 p-2 md:p-3 rounded-lg transition-colors duration-200 
                    border border-gray-600 hover:bg-gray-50 active:bg-gray-100"
                >
                  <span className="text-lg md:text-xl">{item.icon}</span>
                  <span className="text-xs md:text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MarketDropdown.defaultProps = {
  categories: [
    { icon: "⚡", label: "New", slug: "new" },
    { icon: "📈", label: "Trending", slug: "trending" },
    { icon: "💧", label: "Liquid", slug: "liquid" },
    { icon: "⏰", label: "Ending Soon", slug: "ending-soon" }
  ],
  topics: [
    { icon: "🌍", label: "Middle East", slug: "middle-east" },
    { icon: "🏛️", label: "Politics", slug: "politics" },
    { icon: "💰", label: "Crypto", slug: "crypto" },
    { icon: "🏀", label: "Sports", slug: "sports" },
    { icon: "🎬", label: "Pop Culture", slug: "pop-culture" },
    { icon: "🔬", label: "Science", slug: "science" }
  ]
};

export default MarketDropdown;