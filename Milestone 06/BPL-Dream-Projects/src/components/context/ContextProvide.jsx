import { useEffect, useState } from 'react';
import CardCreateContext from './CardCreateContext';

const ContextProvide = ({ children }) => {
  const [playerData, setPlayerData] = useState([]);

  // Data Fetch
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('PlayersData.json');
      const data = await res.json();
      setPlayerData(data);
    };

    fetchData();
  }, []);

  return (
    <CardCreateContext.Provider value={{ playerData, setPlayerData }}>
      {children}
    </CardCreateContext.Provider>
  );
};

export default ContextProvide;
