import getTaskData from './../../../lib/getTaskData';
import TaskCard from './TaskCard';
const TaskPage = async () => {
  const data = await getTaskData();

  return (
    <section className="containers">
      <div className="grid items-center  grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map(task => (
          <TaskCard key={task.id} taskDetails={task} />
        ))}
      </div>
    </section>
  );
};

export default TaskPage;
