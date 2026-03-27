import ChooseAiModel from './Components/Pages/HomePage/ChooseAiModel';

const dataAiModel = async () => {
  const res = await fetch('Data.json');
  return res.json();
};

const passData = dataAiModel();

const App = () => {
  return (
    <div>
      <ChooseAiModel ChooseAiModelData={passData} />
    </div>
  );
};

export default App;
