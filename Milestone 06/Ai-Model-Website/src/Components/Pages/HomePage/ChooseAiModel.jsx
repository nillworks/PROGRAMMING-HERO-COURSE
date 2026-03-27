import Card from './Card';
import { use } from 'react';

const ChooseAiModel = ({ ChooseAiModelData }) => {
  const useData = use(ChooseAiModelData);

  return (
    <div className="grid items-center grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-4">
      {useData.map(item => (
        <Card key={item.id} useData={useData} />
      ))}
    </div>
  );
};

export default ChooseAiModel;
