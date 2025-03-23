import { useState } from "react";
import EditProfile from "./editprofile";
import { useProfile } from "@/components/ProfileContext";

export default function UserProfile() {
  const { userData, updateUserData } = useProfile();
  const [showEditProfile, setShowEditProfile] = useState(false);

  const handleEditProfileOpen = () => {
    setShowEditProfile(true);
  };

  const handleEditProfileClose = () => {
    setShowEditProfile(false);
  };

  const handleProfileSave = (updatedData) => {
    updateUserData(updatedData);
    setShowEditProfile(false);
  };

  return (
    <div className="container mx-auto px-14 py-8 text-black">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img 
                src={userData?.profileImage || `https://api.dicebear.com/7.x/identicon/svg?seed=${userData.userAvatarSeed}`} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{userData.username}</h1>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <span>{userData.userAddress}</span>
                <span className="mx-2">•</span>
                <span>Joined {userData.joinedDate}</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleEditProfileOpen}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Edit profile
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-50 mb-2">
            <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm10-3a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
          </div>
          <h3 className="text-gray-500 text-sm">Positions value</h3>
          <p className="text-2xl font-bold">{userData.stats.positionsValue}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-50 mb-2">
            <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-gray-500 text-sm">Profit/loss</h3>
          <p className="text-2xl font-bold">{userData.stats.profitLoss}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-50 mb-2">
            <svg className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <h3 className="text-gray-500 text-sm">Volume traded</h3>
          <p className="text-2xl font-bold">{userData.stats.volumeTraded}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-50 mb-2">
            <svg className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </div>
          <h3 className="text-gray-500 text-sm">Markets traded</h3>
          <p className="text-2xl font-bold">{userData.stats.marketsTraded}</p>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button className="px-6 py-3 font-medium text-gray-900 border-b-2 border-blue-500">
              Positions
            </button>
            <button className="px-6 py-3 font-medium text-gray-500 hover:text-gray-700">
              Activity
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="border-b border-gray-100 pb-2">
            <div className="grid grid-cols-4 gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div>Market</div>
              <div className="text-right">Avg</div>
              <div className="text-right">Current</div>
              <div className="text-right">Value</div>
            </div>
          </div>

          {userData.positions.length > 0 ? (
            userData.positions.map((position, index) => (
              <div key={index} className="py-4 border-b border-gray-100 last:border-0">
                {/* Position details would go here */}
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-gray-500">
              No positions found
            </div>
          )}
        </div>
      </div>

      {showEditProfile && (
        <EditProfile 
          onClose={handleEditProfileClose} 
          userData={userData}
          onSave={handleProfileSave}
        />
      )}
    </div>
  );
}