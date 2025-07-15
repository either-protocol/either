import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine, ResponsiveContainer } from 'recharts';
import { Share, ArrowLeft } from 'lucide-react';
import OrderForm from '@/components/OrderForm';

export default function EventDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState('buy');
  const [timeframe, setTimeframe] = useState('all');

  const Prediction = {
    id: '1',
    question: 'Oscar best Picture?',
    imageUrl: '/api/placeholder/80/80',
    volume: '1.2M',
    timeLeft: '5d 2h left',
    yesPercentage: 63
  };

  const allChartData = [
    { time: '01/01', Anora: 28, Conclave: 54, TheBrutalist: 62 },
    { time: '02/01', Anora: 72, Conclave: 10, TheBrutalist: 25 },
    { time: '03/01', Anora: 68, Conclave: 69, TheBrutalist: 87 },
    { time: '04/01', Anora: 96, Conclave: 56, TheBrutalist: 45 },
    { time: '05/01', Anora: 65, Conclave: 67, TheBrutalist: 86 },
    { time: '06/01', Anora: 84, Conclave: 33, TheBrutalist: 94 },
    { time: '07/01', Anora: 47, Conclave: 75, TheBrutalist: 46 },
    { time: '08/01', Anora: 16, Conclave: 46, TheBrutalist: 15 },
    { time: '09/01', Anora: 96, Conclave: 86, TheBrutalist: 85 }
  ];

  const monthChartData = [
    { time: '08/01', Anora: 16, Conclave: 46, TheBrutalist: 15 },
    { time: '08/08', Anora: 50, Conclave: 65, TheBrutalist: 40 },
    { time: '08/15', Anora: 70, Conclave: 55, TheBrutalist: 60 },
    { time: '08/22', Anora: 85, Conclave: 70, TheBrutalist: 75 },
    { time: '09/01', Anora: 96, Conclave: 86, TheBrutalist: 85 }
  ];

  const weekChartData = [
    { time: '08/25', Anora: 75, Conclave: 68, TheBrutalist: 70 },
    { time: '08/27', Anora: 80, Conclave: 72, TheBrutalist: 75 },
    { time: '08/29', Anora: 85, Conclave: 78, TheBrutalist: 80 },
    { time: '08/31', Anora: 90, Conclave: 82, TheBrutalist: 82 },
    { time: '09/01', Anora: 96, Conclave: 86, TheBrutalist: 85 }
  ];

  const dayChartData = [
    { time: '06:00', Anora: 90, Conclave: 80, TheBrutalist: 82 },
    { time: '12:00', Anora: 92, Conclave: 82, TheBrutalist: 83 },
    { time: '18:00', Anora: 94, Conclave: 84, TheBrutalist: 84 },
    { time: '23:59', Anora: 96, Conclave: 86, TheBrutalist: 85 }
  ];

  const timeframeToText = {
    '24h': '24H',
    '7d': '7D',
    '30d': '30D',
    'all': 'ALL'
  };

  const getFilteredData = () => {
    switch (timeframe) {
      case '24h':
        return dayChartData;
      case '7d':
        return weekChartData;
      case '30d':
        return monthChartData;
      case 'all':
      default:
        return allChartData;
    }
  };

  const currentData = getFilteredData();
  const latestDataPoint = currentData[currentData.length - 1];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleTimeframeChange = (tf) => {
    setTimeframe(tf);
  };

  const TimeButton = ({ period, value, isActive, onClick }) => (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
        isActive ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-100'
      }`}
    >
      {period}
    </button>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">

          <div className="lg:col-span-5 space-y-6">

            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 relative rounded-lg overflow-hidden flex-shrink-0">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src="/aptos-apt-logo.png"
                    alt="Aptos logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                  {Prediction.question}
                </h1>
                <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-3 text-sm">
                  <div className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 font-medium">
                    ${Prediction.volume} Volume
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-600 font-medium">
                    {Prediction.timeLeft} time
                  </div>
                </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-indigo-600">
                    {latestDataPoint.Anora}%
                  </div>
                  <div className="text-sm text-gray-500">
                    chance of happening
                  </div>
                </div>
                <div className="flex gap-2">
                  {Object.entries(timeframeToText).map(([value, text]) => (
                    <TimeButton 
                      key={value}
                      period={text}
                      value={value}
                      isActive={timeframe === value}
                      onClick={handleTimeframeChange}
                    />
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart 
                      data={currentData}
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
                        domain={[0, 100]}
                        ticks={[0, 25, 50, 75, 100]}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9CA3AF', fontSize: 12 }}
                        tickFormatter={(tick) => `${tick}%`}
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
                        labelFormatter={(label) => `Time: ${label}`}
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
                        y={50} 
                        stroke="#E5E7EB" 
                        strokeDasharray="3 3"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="flex gap-4 justify-end mt-2 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                    <span className="text-sm text-gray-600">Anora {latestDataPoint.Anora}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
                    <span className="text-sm text-gray-600">Conclave {latestDataPoint.Conclave}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                    <span className="text-sm text-gray-600">TheBrutalist {latestDataPoint.TheBrutalist}%</span>
                  </div>
                </div>
              </div>
            </div>

            <details className="bg-white rounded-lg shadow-sm group text-black">
              <summary className="p-6 cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Order Book</h2>
                  <svg 
                    className="w-5 h-5 transition-transform group-open:rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Buy Orders</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">0.65</span>
                        <span className="text-gray-900 font-medium">$45,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">0.63</span>
                        <span className="text-gray-900 font-medium">$32,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">0.61</span>
                        <span className="text-gray-900 font-medium">$28,500</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Sell Orders</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">0.67</span>
                        <span className="text-gray-900 font-medium">$38,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">0.69</span>
                        <span className="text-gray-900 font-medium">$42,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">0.71</span>
                        <span className="text-gray-900 font-medium">$29,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group text-black">
              <summary className="p-6 cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Resolution Rules</h2>
                  <svg 
                    className="w-5 h-5 transition-transform group-open:rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6">
                <div className="prose prose-sm">
                  <ul className="list-disc pl-4 text-gray-600 space-y-2">
                    <li>The market will be resolved based on official data sources</li>
                    <li>Resolution date: December 31st, 2024</li>
                    <li>Market will be resolved as "Yes" if BTC/USD reaches or exceeds $100,000 on any major exchange</li>
                    <li>In case of any disputes, the resolution committee's decision will be final</li>
                  </ul>
                </div>
              </div>
            </details>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <OrderForm />
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-6 right-6">
        <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition duration-200">
          <Share size={20} />
        </button>
      </div>
      
      <div className="fixed top-6 left-6">
        <button onClick={() => router.push('/markets')} className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition duration-200 flex items-center justify-center">
          <ArrowLeft size={20} />
        </button>
      </div>
    </div>
  );
}