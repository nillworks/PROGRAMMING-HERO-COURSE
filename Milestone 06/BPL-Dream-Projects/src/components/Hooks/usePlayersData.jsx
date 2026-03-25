import { useContext } from 'react';
import CardCreateContext from '../context/CardCreateContext';

const usePlayersData = () => {
  return useContext(CardCreateContext);
};

export default usePlayersData;
