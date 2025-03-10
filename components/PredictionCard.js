import { useState } from 'react';
import Image from 'next/image';
import CountdownTimer from './CountdownTimer';

export default function PredictionCard({ 
  teamA,
  teamB,
  question,
  teamAShares,
  teamBShares,
  yesPercentage,
  noPercentage,
  teamAPercentage,
  teamBPercentage,
  endTime,
  onConfirm
}) {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [shares, setShares] = useState('');
  const [isOrdering, setIsOrdering] = useState(false);

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
    setIsOrdering(true);
  };

  const handleConfirm = () => {
    if (!shares) return;
    onConfirm({
      team: selectedTeam,
      shares: parseInt(shares),
    });
    setSelectedTeam(null);
    setShares('');
    setIsOrdering(false);
  };

  const handleCancel = () => {
    setSelectedTeam(null);
    setShares('');
    setIsOrdering(false);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-black">

      <div className="flex gap-4 mb-4">
        <div className="w-12 h-12 relative rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src="/aptos-apt-logo.png"
            alt="Prediction thumbnail"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-2">
            Ends: {new Date(endTime).toLocaleDateString()}
          </div>
          <h2 className="text-base font-semibold">
            {question}
          </h2>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="font-medium">{teamA || "Yes"}: {teamAShares}</span>
            <span className="text-indigo-500">{teamAPercentage || yesPercentage}%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-purple-500">{teamBPercentage || noPercentage}%</span>
            <span className="font-medium">{teamB || "No"}: {teamBShares}</span>
          </div>
        </div>
        
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-400"
            style={{ width: `${teamAPercentage || yesPercentage}%` }}
          />
        </div>
      </div>

      {isOrdering ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm"> 5.7 USD = 1 Aptos</span>
          </div>
          <input
            type="number"
            value={shares}
            onChange={(e) => setShares(e.target.value)}
            placeholder="Enter number of shares"
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
              className="flex-1 bg-[#F3E8FF] text-[#9333EA] hover:bg-[#EDE5FF]  transition-all border border-purple-300 hover:border-purple-400 rounded-md py-2"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (

        <div className="flex gap-2 text-sm">
          <button
            onClick={() => handleTeamSelect(teamA)}
            className="flex-1  bg-[#EEF2FF] text-[#4F46E5] hover:bg-[#E0E7FF] transition-all rounded-md py-2"
          >
            {teamA || "Yes"}
          </button>
          <button
            onClick={() => handleTeamSelect(teamB)}
            className="flex-1 bg-[#F3E8FF] text-[#9333EA] hover:bg-[#EDE5FF] transition-all rounded-md py-2"
          >
            {teamB || "No"}
          </button>
        </div>
      )}

      <div className="flex flex-col gap-1 mt-4 text-sm text-gray-500">
        <div>Your shares: {teamA || "Yes"} - {teamAShares || yesPercentage}, {teamB || "No"} - {teamBShares || noPercentage}</div>
        <div>Winnings:</div>
        <div className="flex justify-between">
          <div className='bg-emerald-50 px-2 py-1 rounded-md'>{teamA || "Yes"}: <span className="text-green-500">{(parseFloat(teamAShares || yesPercentage) * 1.1).toFixed(2)} shares</span></div>
          <div className='bg-orange-50 px-2 py-1 rounded-md'>{teamB || "No"}: <span className="text-red-500">{(parseFloat(teamBShares || noPercentage) * 1.1).toFixed(2)} shares</span></div>
        </div>
      </div>
    </div>
  );
}
