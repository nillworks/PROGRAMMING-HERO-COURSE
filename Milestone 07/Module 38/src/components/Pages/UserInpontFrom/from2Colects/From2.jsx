import useInputData from '../../../Hooks/useInputData';

const From2 = () => {
  const [emailValue, onchangeInputDat] = useInputData('');
  const [nameValue, handleChangeNameValue] = useInputData('');
  const handleSubmit = e => {
    e.preventDefault();

    console.log(emailValue);
    console.log(nameValue);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md space-y-4"
      >
        <input
          type="text"
          name="name"
          onChange={handleChangeNameValue}
          placeholder="Enter Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          onChange={onchangeInputDat}
          placeholder="Enter Your Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="submit"
          value="Submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default From2;
