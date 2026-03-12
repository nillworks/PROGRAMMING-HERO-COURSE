import { useState } from 'react';

const Counter = () => {
  // use state
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div className="text-center py-4">
      <h3>Count:{count}</h3>
      <button
        onClick={handleAdd}
        className="bg-violet-500 px-3 py-1 rounded-lg cursor-pointer text-white"
      >
        Add
      </button>
    </div>
  );
};

export default Counter;
