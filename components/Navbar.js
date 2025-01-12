import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

export default function Navbar() {
  return (
    <nav className="border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold" style={{ fontFamily: 'ITC Bauhaus Medium' }}>
              either
            </h1>
          </div>
          <div>
            <WalletSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}
