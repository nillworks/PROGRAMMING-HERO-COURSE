import { useState } from 'react';

const CricketScoreboard = () => {
  // Batsman state
  const [batsman, setBatsman] = useState({
    totalRuns: 0,
    singleRun: 0,
    fourRun: 0,
    sixRun: 0,
  });

  // Bowler state
  const [bowler, setBowler] = useState({
    totalBall: 0,
    wideBall: 0,
    noBall: 0,
    over: 0,
  });

  // Update Batsman runs
  const updateRuns = run => {
    setBatsman(prev => ({
      ...prev,
      totalRuns: prev.totalRuns + run,
      singleRun: run === 1 ? prev.singleRun + 1 : prev.singleRun,
      fourRun: run === 4 ? prev.fourRun + 1 : prev.fourRun,
      sixRun: run === 6 ? prev.sixRun + 1 : prev.sixRun,
    }));
  };

  // Update Bowler balls
  const updateBall = id => {
    setBowler(prev => {
      // Right Ball only counts toward totalBall
      let newTotal = prev.totalBall;
      let newOver = prev.over;

      if (id === 1 && prev.totalBall < 6) {
        newTotal = prev.totalBall + 1;
        if (newTotal === 6) {
          newOver = prev.over + 1;
          newTotal = 0; // Reset ball count after over
        }
      }

      return {
        ...prev,
        totalBall: newTotal,
        over: newOver,
        wideBall: id === 2 ? prev.wideBall + 1 : prev.wideBall,
        noBall: id === 3 ? prev.noBall + 1 : prev.noBall,
      };
    });
  };

  return (
    <div className="text-center space-y-4">
      <h1 className="text-xl font-bold">Cricket Scoreboard</h1>

      {/* Batsman Section */}
      <div>
        <h2>Batsman Stats:</h2>
        <h3>Total Runs: {batsman.totalRuns}</h3>
        <h4>Singles: {batsman.singleRun}</h4>
        <h4>Fours: {batsman.fourRun}</h4>
        <h4>Sixes: {batsman.sixRun}</h4>

        <div className="space-x-2 mt-2">
          <button
            onClick={() => updateRuns(1)}
            className="bg-green-500 px-3 py-1 rounded"
          >
            Single Run
          </button>
          <button
            onClick={() => updateRuns(4)}
            className="bg-green-500 px-3 py-1 rounded"
          >
            Four
          </button>
          <button
            onClick={() => updateRuns(6)}
            className="bg-green-500 px-3 py-1 rounded"
          >
            Six
          </button>
        </div>
      </div>

      {/* Bowler Section */}
      <div>
        <h2>Bowler Stats:</h2>
        <h3>
          Total Balls: {bowler.totalBall} / Over: {bowler.over}
        </h3>
        <h4>Wide Balls: {bowler.wideBall}</h4>
        <h4>No Balls: {bowler.noBall}</h4>

        <div className="space-x-2 mt-2">
          <button
            onClick={() => updateBall(1)}
            className="bg-blue-500 px-3 py-1 rounded"
          >
            Right Ball
          </button>
          <button
            onClick={() => updateBall(2)}
            className="bg-blue-500 px-3 py-1 rounded"
          >
            Wide Ball
          </button>
          <button
            onClick={() => updateBall(3)}
            className="bg-blue-500 px-3 py-1 rounded"
          >
            No Ball
          </button>
        </div>
      </div>
    </div>
  );
};

export default CricketScoreboard;
