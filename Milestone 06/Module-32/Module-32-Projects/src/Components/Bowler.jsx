import { useState } from 'react';

const Bowler = () => {
  const [boll, setBoll] = useState({ totalBoll: 0, whiteBoll: 0, noBoll: 0 });

  const handleChangeCount = id => {
    setBoll(prev => ({
      ...prev,
      totalBoll: id === 1 ? Math.min(prev.totalBoll + 1, 6) : prev.totalBoll,
      whiteBoll: id === 2 ? prev.whiteBoll + 1 : prev.whiteBoll,
      noBoll: id === 3 ? prev.noBoll + 1 : prev.noBoll,
    }));
  };

  return (
    <div className="text-center">
      <h2>
        Right Boll Count: {boll.totalBoll === 6 ? 'Boll Over' : boll.totalBoll}
      </h2>
      <h2>white Boll Count: {boll.whiteBoll}</h2>
      <h2>No Boll Count: {boll.noBoll}</h2>

      <div className="space-x-4">
        <button
          onClick={() => handleChangeCount(1)}
          className="bg-blue-500 px-5 py-1 rounded-lg"
        >
          Right Boll
        </button>
        <button
          onClick={() => handleChangeCount(2)}
          className="bg-blue-500 px-5 py-1 rounded-lg"
        >
          white Boll
        </button>
        <button
          onClick={() => handleChangeCount(3)}
          className="bg-blue-500 px-5 py-1 rounded-lg"
        >
          No Boll
        </button>
      </div>
    </div>
  );
};

export default Bowler;
