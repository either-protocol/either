import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import Image from 'next/image';
import Link from 'next/link';


const chartData = [
  { date: '2024-01-01', value: 65 },
  { date: '2024-01-15', value: 70 },
  { date: '2024-02-01', value: 62 },
  { date: '2024-02-15', value: 75 },
  { date: '2024-03-01', value: 68 }
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
      ${volume.toLocaleString()} Volume
    </div>
    <div className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-600 font-medium">
      {timeLeft}
    </div>
  </div>
);

const PredictionButtons = () => (
  <div className="space-y-4">
    <div className="flex gap-3">
      <button
        type="button"
        className="flex-1 py-3.5 px-6 rounded-xl bg-[#EEF2FF] text-[#4F46E5] hover:bg-[#E0E7FF] transition-all text-sm font-medium"
      >
        Yes
      </button>
      <button
        type="button"
        className="flex-1 py-3.5 px-6 rounded-xl bg-[#F3E8FF] text-[#9333EA] hover:bg-[#EDE5FF] transition-all text-sm font-medium"
      >
        No
      </button>
    </div>
    <div className="flex justify-between text-sm px-1">
      <div>
        <span className="text-gray-500">$100 → </span>
        <span className="text-emerald-600 font-medium">$360</span>
      </div>
      <div>
        <span className="text-gray-500">$100 → </span>
        <span className="text-emerald-600 font-medium">$180</span>
      </div>
    </div>
  </div>
);

const PredictionChart = () => (
  <div className="h-[240px]">
    <LineChart width={600} height={240} data={chartData}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line 
        type="monotone" 
        dataKey="value" 
        stroke="#4F46E5" 
        strokeWidth={2}
        dot={false}
        isAnimationActive={false}
      />
    </LineChart>
  </div>
);

const PredictionMarket = ({prediction}) => {
  const [activePeriod, setActivePeriod] = useState('1M');
  
  const dummyPrediction = {
    id: '1',
    question: 'Will BTC reach $100k by end of 2024?',
    imageUrl: '/api/placeholder/80/80',
    volume: 5432100,
    timeLeft: '5d 2h left',
    yesPercentage: 68
  };

  const periods = ['1D', '1W', '1M', 'ALL'];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Featured Market</h2>
        <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
          Trending 🔥
        </div>
      </div>

      <Link href={`/event/${prediction.id}`} className="block">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-md transition-all">
        <div className="grid grid-cols-12 gap-8 p-8">
          {/* Left Section */}
          <div className="col-span-5 space-y-8">
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
                  {dummyPrediction.question}
                </h3>
                <PredictionStats 
                  volume={dummyPrediction.volume}
                  timeLeft={dummyPrediction.timeLeft}
                />
              </div>
            </div>
            <PredictionButtons />
          </div>

          {/* Right Section */}
          <div className="col-span-7">
            <div className="flex justify-between items-center mb-6">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-indigo-600">
                  {dummyPrediction.yesPercentage}%
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
            <div className="bg-gray-50 rounded-xl p-4">
              <PredictionChart />
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default PredictionMarket;