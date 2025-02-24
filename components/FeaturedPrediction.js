import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine } from 'recharts';
import Image from 'next/image';
import Link from 'next/link';

const Prediction = {
  id: '1',
  question: 'Oscar best Picture?',
  imageUrl: '/api/placeholder/80/80',
  volume: 4538446,
  timeLeft: '5d 2h left',
  yesPercentage: 63
};

const chartData = [
  { time: '22:00', Anora: 28, Conclave: 54, TheBrutalist: 62 },
  { time: '22:15', Anora: 72, Conclave: 10, TheBrutalist: 25 },
  { time: '22:30', Anora: 68, Conclave: 69, TheBrutalist: 87 },
  { time: '22:45', Anora: 96, Conclave: 56, TheBrutalist: 45 },
  { time: '23:00', Anora: 65, Conclave: 67, TheBrutalist: 86 },
  { time: '23:15', Anora: 84, Conclave: 33, TheBrutalist: 94 },
  { time: '23:30', Anora: 47, Conclave: 75, TheBrutalist: 46 },
  { time: '23:45', Anora: 16, Conclave: 46, TheBrutalist: 15 },
  { time: '23:59', Anora: 96, Conclave: 86, TheBrutalist: 85 }
];

const TimeButton = ({ period, isActive, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
      isActive ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-100'
    }`}
  >
    {period}
  </button>
);

const PredictionStats = ({ volume, timeLeft }) => (
  <div className="flex items-center gap-3 text-sm">
    <div className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 font-medium">
      ${volume} Volume
    </div>
    <div className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-600 font-medium">
      {timeLeft} time
    </div>
  </div>
);

const BetButton = ({ type, onClick, isActive }) => (
  <div className="flex-1">
    <button
      type="button"
      onClick={onClick}
      className={`w-full py-3.5 px-6 rounded-xl transition-all text-sm font-medium
        ${type === 'Yes' 
          ? 'bg-[#EEF2FF] text-[#4F46E5] hover:bg-[#E0E7FF] border border-indigo-300 hover:border-indigo-400' 
          : 'bg-[#F3E8FF] text-[#9333EA] hover:bg-[#EDE5FF] border border-purple-300 hover:border-purple-400'
        }`}
    >
      {type}
    </button>
  </div>
);

const PredictionChart = () => (
  <div className="h-[240px]">
    <LineChart 
      width={600} 
      height={240} 
      data={chartData}
      margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
    >
      <CartesianGrid 
        strokeDasharray="3 3" 
        vertical={false} 
        stroke="#f0f0f0"
      />
      <XAxis 
        dataKey="time" 
        axisLine={false}
        tickLine={false}
        tick={{ fill: '#9CA3AF', fontSize: 12 }}
      />
      <YAxis 
        domain={[40, 100]}
        ticks={[40, 52.5, 65, 77.5, 90]}
        axisLine={false}
        tickLine={false}
        tick={{ fill: '#9CA3AF', fontSize: 12 }}
      />
      <Tooltip 
        contentStyle={{
          color: 'black',
          backgroundColor: 'white',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          padding: '8px'
        }}
        formatter={(value, name) => [`${value}%`, name]}
      />
      <Line 
        type="monotone" 
        dataKey="Anora" 
        stroke="#10B981" 
        strokeWidth={2}
        dot={false}
        isAnimationActive={false}
      />
      <Line 
        type="monotone" 
        dataKey="Conclave" 
        stroke="#3B82F6" 
        strokeWidth={2}
        dot={false}
        isAnimationActive={false}
      />
      <Line 
        type="monotone" 
        dataKey="TheBrutalist" 
        stroke="#000000" 
        strokeWidth={2}
        dot={false}
        isAnimationActive={false}
      />
      <ReferenceLine 
        y={65} 
        stroke="#E5E7EB" 
        strokeDasharray="3 3"
      />
    </LineChart>
    
    {/* Legend */}
    <div className="flex gap-4 justify-end mt-2 px-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
        <span className="text-sm text-gray-600">Anora 66%</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
        <span className="text-sm text-gray-600">Conclave 66%</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-black"></div>
        <span className="text-sm text-gray-600">TheBrutalist 65%</span>
      </div>
    </div>
  </div>
);

const FeaturedPrediction = ({ prediction }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [betAmount, setBetAmount] = useState('100');
  const [isOrdering, setIsOrdering] = useState(false);
  const [activePeriod, setActivePeriod] = useState('1M');

  const periods = ['1D', '1W', '1M', 'ALL'];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOrdering(true);
  };

  const handleConfirm = () => {
    setSelectedOption(null);
    setBetAmount('100');
    setIsOrdering(false);
  };

  const handleCancel = () => {
    setSelectedOption(null);
    setBetAmount('100');
    setIsOrdering(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Featured Market</h2>
        <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
          Trending 🔥
        </div>
      </div>


        <div className="bg-white rounded-2xl shadow-lg hover:shadow-md transition-all">
          <div className="grid grid-cols-12 gap-8 p-8">
            {/* Left Section */}
            <div className="col-span-5 space-y-4">
              <div className="space-y-4">
                <div className="w-20 h-20 relative rounded-xl overflow-hidden">
                  <Image
                    src={prediction.imageUrl}
                    alt="Prediction thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight">
                  {Prediction.question}
                  </h3>
                  <PredictionStats 
                  volume={Prediction.volume}
                  timeLeft={Prediction.timeLeft}
                  />
                </div>
              </div>

              {isOrdering ? (
                <div className="space-y-3 text-black">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">5.7 USD = 1 Aptos</span>
                  </div>
                  <input
                    type="number"
                    value={betAmount}
                    onChange={(e) => setBetAmount(e.target.value)}
                    placeholder="Enter bet amount"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleConfirm}
                      className="flex-1 bg-[#EEF2FF] text-[#4F46E5] hover:bg-[#E0E7FF] transition-all border border-indigo-300 hover:border-indigo-400 rounded-md py-2"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex-1 bg-[#F3E8FF] text-[#9333EA] hover:bg-[#EDE5FF] transition-all border border-purple-300 hover:border-purple-400 rounded-md py-2"
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="flex justify-between text-sm px-1">
                    <div>
                      <span className="text-gray-500">$100 → </span>
                      <span className="text-emerald-500 font-medium">$360</span>
                    </div>
                    <div>
                      <span className="text-gray-500">$100 → </span>
                      <span className="text-red-500 font-medium">$180</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <BetButton 
                      type="Yes" 
                      onClick={() => handleOptionSelect('Yes')}
                      isActive={selectedOption === 'Yes'}
                    />
                    <BetButton 
                      type="No" 
                      onClick={() => handleOptionSelect('No')}
                      isActive={selectedOption === 'No'}
                    />
                  </div>
                  <div className="flex justify-between text-sm px-1">
                    <div>
                      <span className="text-gray-500">$100 → </span>
                      <span className="text-emerald-500 font-medium">$360</span>
                    </div>
                    <div>
                      <span className="text-gray-500">$100 → </span>
                      <span className="text-red-500 font-medium">$180</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Section */}
            <div className="col-span-7">
              <div className="flex justify-between items-center mb-6">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-indigo-600">
                  {Prediction.yesPercentage}%
                  </div>
                  <div className="text-sm text-gray-500">
                    chance of happening
                  </div>
                </div>
                <div className="flex gap-2">
                  {periods.map((period) => (
                    <TimeButton 
                      key={period}
                      period={period} 
                      isActive={period === activePeriod}
                      onClick={() => setActivePeriod(period)}
                    />
                  ))}
                </div>
              </div>
            <Link href={`/event/${prediction.id}`}>
              <div className="bg-gray-50 rounded-xl p-4">
                <PredictionChart />
              </div>
            </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default FeaturedPrediction;