import Image from 'next/image';
import CountdownTimer from './CountdownTimer';
import { FiBarChart2, FiClock } from 'react-icons/fi';

export default function PredictionCard({ 
  imageUrl, 
  question, 
  yesPercentage, 
  totalBetAmount,
  endTime 
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="flex items-start gap-4 mb-5">
        <div className="w-12 h-12 relative rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src="/aptos-apt-logo.png"
            alt="Prediction thumbnail"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-[15px] leading-snug font-medium text-gray-800 mb-2 min-h-[40px]">
            {question}
          </h2>
          <div className="text-sm font-medium text-indigo-600">
            {yesPercentage}% chance
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="flex gap-3 mb-4">
          <div className="flex-1">
            <button className="w-full py-3 px-5 rounded-md bg-[#EEF2FF] text-[#4F46E5] hover:bg-[#E0E7FF] transition-colors font-medium">
              Yes
            </button>
            <div className="text-center mt-1.5 text-xs">
              <span className="text-gray-500">$100 →</span>{' '}
              <span className="text-emerald-600 font-medium">$360</span>
            </div>
          </div>
          <div className="flex-1">
            <button className="w-full py-3 px-5 rounded-md bg-[#F3E8FF] text-[#9333EA] hover:bg-[#EDE5FF] transition-colors font-medium">
              No
            </button>
            <div className="text-center mt-1.5 text-xs">
              <span className="text-gray-500">$100 →</span>{' '}
              <span className="text-emerald-600 font-medium">$180</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 font-medium text-xs">
            <FiBarChart2 className="text-indigo-500" />
            <span>${totalBetAmount.toLocaleString()} Volume</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 font-medium text-xs">
            <FiClock className="text-indigo-500" />
            <span><CountdownTimer endTime={endTime} /></span>
          </div>
        </div>
      </div>
    </div>
  );
}
