import Batsman from './Components/Batsman';
import Bowler from './Components/Bowler';
import Counter from './Components/Counter';
import User from './Components/User';

const App = () => {
  return (
    <div className="space-y-10">
      <Counter />
      <Batsman />
      <Bowler />
      <User />
    </div>
  );
};

export default App;
