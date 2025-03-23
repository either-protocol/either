import { createContext, useState, useContext } from 'react';

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export function ProfileProvider({ children }) {
  const [userData, setUserData] = useState({
    userAddress: "0x7a70...f5e9",
    userBalance: "$250.00",
    userAvatarSeed: "default-seed",
    username: "1234gfnrfkej",
    joinedDate: "Mar 2025",
    bio: "",
    stats: {
      positionsValue: "$250.00",
      profitLoss: "$50.00",
      volumeTraded: "$200.00",
      marketsTraded: 5
    },
    positions: []
  });

  const updateUserData = (newData) => {
    setUserData(prevData => ({ ...prevData, ...newData }));
  };

  return (
    <ProfileContext.Provider value={{ userData, updateUserData }}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileContext;