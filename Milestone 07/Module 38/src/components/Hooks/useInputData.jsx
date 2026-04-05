import { useState } from 'react';

const useInputData = defaultValue => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const onchangeInputDat = e => setInputValue(e.target.value);

  return [inputValue, onchangeInputDat];
};

export default useInputData;
