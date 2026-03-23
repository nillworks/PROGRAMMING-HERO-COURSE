import { useState } from 'react';
import StudentContext from './StudentContext';

const students = [
  {
    id: 1,
    roll: 1,
    name: 'Shipon Roy',
    class: '12th',
    gender: 'male',
  },
  {
    id: 2,
    roll: 2,
    name: 'Nabila Akter',
    class: '9th',
    gender: 'female',
  },
  {
    id: 3,
    roll: 3,
    name: 'Rahim Uddin',
    class: '10th',
    gender: 'male',
  },
  {
    id: 4,
    roll: 4,
    name: 'Sadia Islam',
    class: '8th',
    gender: 'female',
  },
  {
    id: 5,
    roll: 5,
    name: 'Karim Hossain',
    class: '9th',
    gender: 'male',
  },
];

const StudentContextProvider = ({ children }) => {
  const [student, setStudent] = useState(students);
  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
