import PlayersRow from './PlayersRow';

const PlayerList = ({ playerData }) => {
  console.log(playerData);
  return (
    <div>
      {playerData?.map(item => (
        <PlayersRow key={item.id} playersData={item} />
      ))}
    </div>
  );
};

export default PlayerList;
