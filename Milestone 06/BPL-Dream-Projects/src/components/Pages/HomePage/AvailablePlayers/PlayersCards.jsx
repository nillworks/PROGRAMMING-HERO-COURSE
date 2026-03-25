import { useState } from 'react';
import PlayerCard from './PlayerCard';
import usePlayersData from '../../../Hooks/usePlayersData';

const PlayersCards = () => {
  const [available, setAvailable] = useState(true);

  const handleButtonBgChange = () => {
    setAvailable(!available);
  };

  // Card Data Use Context Api
  const { playerData } = usePlayersData();

  const playersData = playerData;

  return (
    <div className="containers py-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Available Players</h1>

        <div
          className="flex flex-col items-center border sm:flex-row
         border-gray-200 bg-white rounded-lg"
        >
          <button
            onClick={handleButtonBgChange}
            className={`px-4 py-1  font-medium cursor-pointer ${available ? 'bg-[#E7FE29]' : ''}`}
          >
            Available
          </button>
          <button
            onClick={handleButtonBgChange}
            className={` px-4 py-1  font-medium cursor-pointer ${!available ? 'bg-[#E7FE29]' : ''}`}
          >
            Selected (0)
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {playersData.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayersCards;
