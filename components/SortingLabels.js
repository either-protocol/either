export default function SortingLabels() {
  const labels = [
    { id: 'all', name: 'All', active: true },
    { id: 'trending', name: '🔥 Trending' },
    { id: 'ending-soon', name: '⏰ Ending Soon' },
    { id: 'volume', name: '📈 High Volume' },
    { id: 'newest', name: '✨ New' },
    { id: 'crypto', name: '₿ Crypto' },
    { id: 'stocks', name: '📊 Stocks' },
    { id: 'sports', name: '⚽ Sports' }
  ];

  return (
    <div className="bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
          {labels.map((label) => (
            <button
              key={label.id}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                ${label.active 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
            >
              {label.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
