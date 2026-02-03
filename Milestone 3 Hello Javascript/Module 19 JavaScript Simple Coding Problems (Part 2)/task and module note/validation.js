// numbers valentino

const multiply = function (num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'please provide  a number';
  }
  const result = num1 * num2;
  return result;
};
const newLocal = multiply(4, 5);
console.log(newLocal);

// string valentino

function fullName(first, second) {
  if (typeof first !== 'string') return 'first name should be a string';
  else if (typeof second !== 'string') return 'last name should be a string';

  const fullName = first + ' ' + second;
  return fullName;
}

console.log(fullName(3, 'roy'));

// Object valentino

function getObject(products) {
  if (typeof products !== 'object') return 'Please Provide a Object';
  if (typeof products.price !== 'number') return 'Please provide price numbers';
  const result = products.price;
  return result;
}

const provideObject = getObject({ name: 'shipon', price: 400 });

console.log(provideObject);
console.log(getObject(344, 34));

// Array valentino

const getSecond = function (numbers) {
  if (Array.isArray(numbers) === false) return 'Please Provide an Array';
  const second = numbers[1];
  return second;
};
const getSecondResult = getSecond([324, 234, 3224]);
console.log(getSecondResult);
