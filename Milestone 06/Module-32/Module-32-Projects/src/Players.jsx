import { Suspense, useEffect, useState } from 'react';
import PlayerList from './PlayerList';

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  return (
    <div>
      <Suspense fallback={<p>Loading Data ....</p>}>
        <PlayerList playerData={players} />
      </Suspense>
    </div>
  );
};

export default Players;
