const PlayersRow = ({ playersData }) => {
  return (
    <div>
      <ul className="space-y-3">
        <li>{playersData.name}</li>
        <li>{playersData.username}</li>
        <li>{playersData.email}</li>
        <li>{playersData.address.city}</li>
      </ul>
    </div>
  );
};

export default PlayersRow;
