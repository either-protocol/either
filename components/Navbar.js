import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

export default function Navbar() {
  return (
    <nav className="border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold" style={{ fontFamily: 'ITC Bauhaus Medium' }}>
                either
              </h1>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search markets"
                className="w-[400px] pl-10 pr-4 py-2 rounded-lg bg-background border border-foreground/10 focus:outline-none focus:border-black"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div>
            <WalletSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}
