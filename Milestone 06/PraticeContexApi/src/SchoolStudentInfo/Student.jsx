import { useState } from 'react';
import RenderStudent from './RenderStudent';
import AddStudent from './AddStudent';

const students = [
  {
    id: crypto.randomUUID(),
    roll: 1,
    name: 'Shipon Roy',
    class: '10th',
    gender: 'male',
  },
  {
    id: crypto.randomUUID(),
    roll: 2,
    name: 'Nabila Akter',
    class: '9th',
    gender: 'female',
  },
  {
    id: crypto.randomUUID(),
    roll: 3,
    name: 'Rahim Uddin',
    class: '10th',
    gender: 'male',
  },
  {
    id: crypto.randomUUID(),
    roll: 4,
    name: 'Sadia Islam',
    class: '8th',
    gender: 'female',
  },
  {
    id: crypto.randomUUID(),
    roll: 5,
    name: 'Karim Hossain',
    class: '9th',
    gender: 'male',
  },
];

const Student = () => {
  const [student, setStudent] = useState(students);

  const handleUserDeletes = id => {
    const filterUser = student.filter(stu => stu.roll !== id);
    setStudent(filterUser);
  };

  const addedNewStudent = NewStudent => {
    setStudent(prev => [...prev, NewStudent]);
  };

  return (
    <div>
      <AddStudent addedNewStudent={addedNewStudent} />
      <RenderStudent
        student={student}
        onHandleUserDeletes={handleUserDeletes}
      />
    </div>
  );
};

export default Student;
