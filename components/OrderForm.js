import { useState, useRef, useEffect } from 'react';

export default function OrderForm() {
  const [activeTab, setActiveTab] = useState('buy');
  const [orderType, setOrderType] = useState('market');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [selectedContract, setSelectedContract] = useState('yes');
  
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const orderTypes = [
    { value: 'market', label: 'Market' },
    { value: 'limit', label: 'Limit' },
    { value: 'amm', label: 'AMM' }
  ];

  const handleAmountChange = (value) => {
    const newAmount = Math.max(0, value);
    setAmount(newAmount);
  };

  return (
    <div className="bg-white rounded-lg p-5 shadow-sm">
      <div className="space-y-6">
        {/* Buy/Sell Tabs with Custom Dropdown */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex flex-1 bg-gray-100 rounded-lg p-1.5">
              <button
                className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'buy'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('buy')}
              >
                Buy
              </button>
              <button
                className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'sell'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('sell')}
              >
                Sell
              </button>
            </div>
            
            {/* Custom Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 min-w-[100px] py-2.5 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <span>{orderType.charAt(0).toUpperCase() + orderType.slice(1)}</span>
                <svg 
                  className={`w-4 h-4 text-gray-500 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-full py-1 bg-white rounded-lg shadow-lg border border-gray-100 z-10">
                  {orderTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => {
                        setOrderType(type.value);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${
                        orderType === type.value
                          ? 'text-gray-900 font-medium bg-gray-50'
                          : 'text-gray-600'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contract Selection */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">
            Select Contract
          </label>
          <div className="flex gap-3">
            <button
              className={`flex-1 py-3 px-5 rounded-lg text-center text-sm font-medium transition-colors ${
                selectedContract === 'yes'
                  ? 'bg-[#1E40AF] text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedContract('yes')}
            >
              Yes ($0.65)
            </button>
            <button
              className={`flex-1 py-3 px-5 rounded-lg text-center text-sm font-medium transition-colors ${
                selectedContract === 'no'
                  ? 'bg-[#6D28D9] text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedContract('no')}
            >
              No ($0.35)
            </button>
          </div>
        </div>

        {/* Amount Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">
            Amount
          </label>
          <div className="flex items-center">
            <button
              className="w-12 h-11 flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-l-lg border text-gray-600 transition-colors"
              onClick={() => handleAmountChange(amount - 1)}
            >
              −
            </button>
            <input
              type="number"
              value={amount}
              onChange={(e) => handleAmountChange(Number(e.target.value))}
              className="flex-1 h-11 px-4 border-y text-center focus:outline-none focus:ring-1 focus:ring-gray-200 text-sm font-medium"
            />
            <button
              className="w-12 h-11 flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-r-lg border text-gray-600 transition-colors"
              onClick={() => handleAmountChange(amount + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-3 py-4 border-t">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Average Price</span>
            <span className="font-medium text-gray-900">$0.65</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Shares</span>
            <span className="font-medium text-gray-900">{amount}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Potential Return</span>
            <span className="font-medium text-emerald-600">$650</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          className={`w-full py-3.5 rounded-lg text-sm font-medium text-white transition-colors ${
            activeTab === 'buy'
              ? 'bg-[#1E40AF] hover:bg-[#1E3A8A]'
              : 'bg-[#6D28D9] hover:bg-[#5B21B6]'
          }`}
        >
          {activeTab === 'buy' ? 'Place Buy Order' : 'Place Sell Order'}
        </button>
      </div>
    </div>
  );
}
