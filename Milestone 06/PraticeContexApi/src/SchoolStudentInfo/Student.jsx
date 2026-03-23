import RenderStudent from './RenderStudent';
import AddStudent from './AddStudent';
import StudentContext from '../Context/StudentContext';
import StudentContextProvider from './../Context/StudentContextProvider';

const Student = () => {
  return (
    <div>
      <StudentContextProvider>
        <AddStudent />
        <RenderStudent />
      </StudentContextProvider>
    </div>
  );
};

export default Student;
