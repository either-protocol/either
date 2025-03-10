import { useState, useRef, useEffect } from 'react';

export default function OrderForm() {
  const [activeTab, setActiveTab] = useState('buy');
  const [selectedContract, setSelectedContract] = useState('yes');
  const [amount, setAmount] = useState(0);
  const [inputValue, setInputValue] = useState('0.00');
  
  const odds = {
    yes: 60,
    no: 40
  };

  const handleAmountChange = (value) => {
    const newAmount = Math.max(0, value);
    setAmount(newAmount);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(value) || value === '') {
      setInputValue(value === '' ? '0.00' : value);
    }
  };

  return (
    <div className="bg-white border shadow-sm rounded-lg p-5 text-black">
      <div className="space-y-4">

        <div className="border-b border-gray-800 pb-3">
          <div className="flex">
            <button
              className={`pb-3 px-4 font-medium text-sm relative ${
                activeTab === 'buy'
                  ? 'text-indigo-600'
                  : 'text-indigo-500 hover:text-indigo-600'
              }`}
              onClick={() => setActiveTab('buy')}
            >
              Buy
              {activeTab === 'buy' && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500"></div>
              )}
            </button>
            <button
              className={`pb-3 px-4 font-medium text-sm relative ${
                activeTab === 'sell'
                  ? 'text-purple-600'
                  : 'text-purple-500 hover:text-purple-600 '
              }`}
              onClick={() => setActiveTab('sell')}
            >
              Sell
              {activeTab === 'sell' && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-500"></div>
              )}
            </button>
          </div>
        </div>


        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{odds.no}%</span>
            <span>{odds.yes}%</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden border">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-400" 
              style={{ width: `${odds.yes}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            className={`py-3 px-4 rounded-lg text-center text-sm font-medium transition-colors ${
              selectedContract === 'yes'
                ? 'bg-[#E0E7FF] text-[#4F46E5] transition-all border border-indigo-300 '
                : 'bg-[#EEF2FF] text-[#4F46E5] border hover:border-indigo-400 hover:bg-[#E0E7FF]'
            }`}
            onClick={() => setSelectedContract('yes')}
          >
            Yes
          </button>
          <button
            className={`py-3 px-4 rounded-lg text-center text-sm font-medium transition-colors ${
              selectedContract === 'no'
                ? 'bg-[#F3E8FF] text-[#9333EA] transition-all border border-purple-300'
                : 'bg-[#EDE5FF] text-[#9333EA] border hover:border-purple-400 hover:bg-[#F3E8FF]'
            }`}
            onClick={() => setSelectedContract('no')}
          >
            No
          </button>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className={` ${activeTab === 'buy' ? 'text-green-600' : 'text-red-600'}`}>
            {activeTab === 'buy' ? "You're betting" : "You're selling"}
          </span>
          <span>{amount} pts</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm">5.7 USD = 1 Aptos</span>
        </div>
        <div>
          <input
            type="number"
            // value={betAmount}
            // onChange={(e) => setBetAmount(e.target.value)}
            placeholder="Enter bet amount"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          className="w-full py-3.5 rounded-lg text-sm font-medium bg-blue-500 hover:bg-white transition-colors text-white hover:text-blue-600 border hover:border-blue-600"
        >
          Login
        </button>

        <div className="space-y-2 pt-3">
          <div className="flex justify-between items-center text-sm">
            <span className="">Price change</span>
            <span>0.60 pts → 0.60 pts</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="">Avg price</span>
            <span>{activeTab === 'buy' ? '0.00' : '0.60'} pts</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="">Shares</span>
            <span>0</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="">Pot. profit</span>
            <span className={` ${activeTab === 'buy' ? 'text-green-600' : 'text-red-600'}`}>0 pts (0%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}