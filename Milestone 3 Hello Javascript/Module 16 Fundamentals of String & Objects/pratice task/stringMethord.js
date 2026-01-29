// string method : length , toLowerCase , toUpperCase ,
const names = 'shipon roy';
names.toUpperCase;

const functionObject = {
  function1: function () {
    return 1;
  },
  function2: function () {
    return 1;
  },
};

const createObjectFunction = function (val) {
  const obj = {
    toBe(val1) {
      if (val1 === val) return true;
      else return throw new Error('Not Equal');
    },
  };
  return { val };
};

console.log(createObjectFunction(functionObject));
