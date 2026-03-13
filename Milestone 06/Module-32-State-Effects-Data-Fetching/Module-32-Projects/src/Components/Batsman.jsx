import { useState } from 'react';

const Batsman = () => {
  // const [runs, setRun] = useState(0);
  const [count, setCount] = useState({
    total: 0,
    singleRunCount: 0,
    foursRunCount: 0,
    sixRunCount: 0,
  });

  const updateRun = run => {
    setCount(prev => ({
      ...prev,
      total: prev.total + run,
      singleRunCount: run === 1 ? prev.singleRunCount + 1 : prev.singleRunCount,
      foursRunCount: run === 4 ? prev.foursRunCount + 1 : prev.foursRunCount,
      sixRunCount: run === 6 ? prev.sixRunCount + 1 : prev.sixRunCount,
    }));
  };

  return (
    <div className="text-center">
      <h2>Player:Bangla Batsman</h2>
      <h2>single Run Counts: {count.singleRunCount}</h2>
      <h2>four Run Counts: {count.foursRunCount}</h2>
      <h2>six Run Counts: {count.sixRunCount}</h2>
      <h1>Score:{count.total}</h1>
      <div className="space-x-4">
        <button
          className="bg-teal-500  px-5 py-1 rounded-lg "
          onClick={() => updateRun(1)}
        >
          Single Run
        </button>
        <button
          onClick={() => updateRun(4)}
          className="bg-teal-500  px-5 py-1 rounded-lg "
        >
          Fore Run
        </button>
        <button
          onClick={() => updateRun(6)}
          className="bg-teal-500  px-5 py-1 rounded-lg "
        >
          six run
        </button>
      </div>
    </div>
  );
};

export default Batsman;
