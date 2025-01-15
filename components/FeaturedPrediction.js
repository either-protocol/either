import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedPrediction({ prediction }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Featured Market</h2>
        <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
          Trending 🔥
        </div>
      </div>

      <Link href={`/event/${prediction.id}`} className="block">
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
          <div className="grid grid-cols-12 gap-8 p-8">
            {/* Left Section - Info */}
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
                    {prediction.question}
                  </h3>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 font-medium">
                      ${prediction.totalBetAmount.toLocaleString()} Volume
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-600 font-medium">
                      5d 2h left
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <button className="flex-1 py-3.5 px-6 rounded-xl bg-[#EEF2FF] text-[#4F46E5] hover:bg-[#E0E7FF] transition-all text-sm font-medium">
                    Yes
                  </button>
                  <button className="flex-1 py-3.5 px-6 rounded-xl bg-[#F3E8FF] text-[#9333EA] hover:bg-[#EDE5FF] transition-all text-sm font-medium">
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
                {/* Chart component will go here */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}