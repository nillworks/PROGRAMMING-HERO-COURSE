import { useContext } from 'react';
import StudentContext from '../Context/StudentContext';

const UseStudentsContext = () => {
  return useContext(StudentContext);
};

export default UseStudentsContext;
