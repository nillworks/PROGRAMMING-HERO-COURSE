import Batsman from './Components/Batsman';
import Bowler from './Components/Bowler';
import Counter from './Components/Counter';

const App = () => {
  return (
    <div className="space-y-10">
      <Counter />
      <Batsman />
      <Bowler />
    </div>
  );
};

export default App;
