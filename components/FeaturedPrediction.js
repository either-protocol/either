import Link from 'next/link';
import { FiArrowRight, FiClock, FiBarChart2 } from "react-icons/fi";

const chartData = [
  { date: '2024-01-01', value: 65 },
  { date: '2024-01-15', value: 70 },
  { date: '2024-02-01', value: 62 },
  { date: '2024-02-15', value: 75 },
  { date: '2024-03-01', value: 68 }
];


export default function FeaturedPrediction({ prediction }) {
  return (
    <div className="mx-auto px-4 sm:px-16 lg:px-24 py-4">

      <Link href={`/event/${prediction.id}`} className="block">
        <div className="bg-white rounded-3xl shadow-md hover:shadow-md transition-all border border-gray-100">
          <div className="grid grid-cols-12 gap-8 p-8">
            {/* Left Section - Info */}
            <div className="col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="w-20 h-20 relative rounded-xl overflow-hidden">
                  <img
                    src={prediction.imageUrl}
                    alt="Prediction thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight">
                    {prediction.question}
                  </h3>
                  <div className="flex gap-2 mt-4">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 font-medium text-sm">
                    <FiBarChart2 className="text-indigo-500" />
                    <span>{prediction.totalBetAmount.toLocaleString()} Volume</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 font-medium text-sm">
                    <FiClock className="text-indigo-500" />
                    <span>5d 2h 30m</span>
                  </div>
                </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <button className="flex-1 px-7 py-3.5 border-2 border-[#00203F] rounded-md bg-[#00203F] text-[#fff] hover:shadow-md transition-colors font-semibold">
                    Yes
                  </button>
                  <button className="flex-1 px-7 py-3.5 border-2 border-[#ADEFD1] rounded-md bg-[#ADEFD1] text-[#00203F] hover:shadow-md transition-colors font-semibold">
                    No
                  </button>
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <span className="text-gray-500">$100 <FiArrowRight className="inline mx-1 text-gray-400" /></span>
                    <span className="text-emerald-600 font-medium">$360</span>
                  </div>
                  <div>
                    <span className="text-gray-500">$100 <FiArrowRight className="inline mx-1 text-gray-400" /></span>
                    <span className="text-emerald-600 font-medium">$180</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Chart */}
            <div className="col-span-7">
              <div className="flex justify-between items-center mb-6">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-indigo-600">
                    {prediction.yesPercentage}%
                  </div>
                  <div className="text-sm text-gray-500">
                    chance of happening
                  </div>
                </div>
                <div className="flex gap-2">
                  {['1D', '1W', '1M', 'ALL'].map((period, i) => (
                    <button
                      key={period}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                        i === 2  // 1M is active
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-[240px] bg-gray-50 rounded-xl">
             
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}