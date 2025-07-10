import { useRouter } from 'next/router';
import Image from 'next/image';
import OrderForm from '@/components/OrderForm';

export default function EventDetails() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
        {/* Main Content - Takes up 5 columns */}
        <div className="lg:col-span-5 space-y-6">
          {/* Header Section */}
          <div className="flex items-start gap-6 mb-6">
            <div className="w-20 h-20 relative rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/aptos-apt-logo.png"
                alt="Event thumbnail"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-3">
                Will Bitcoin reach $100k by end of 2024?
              </h1>
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Volume</span>
                  <span className="font-medium text-gray-900">$1.2M</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Chance</span>
                  <span className="font-medium text-indigo-600">65%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Price Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Price History</h2>
            <div className="h-[400px] bg-gray-50 rounded-lg">
              {/* Chart component */}
            </div>
          </div>

          {/* Collapsible Order Book */}
          <details className="bg-white rounded-lg shadow-sm group">
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
                {/* Order book content */}
              </div>
            </div>
          </details>

          {/* Collapsible Rules Section */}
          <details className="bg-white rounded-lg shadow-sm group">
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

        {/* Order Form - Takes up 2 columns */}
        <div className="lg:col-span-2">
          <div className="sticky top-8">
            <OrderForm />
          </div>
        </div>
      </div>
    </div>
  );
}


