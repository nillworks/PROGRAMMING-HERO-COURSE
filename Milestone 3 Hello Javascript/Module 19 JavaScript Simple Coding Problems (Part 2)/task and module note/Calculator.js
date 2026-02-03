// 19-7 Simple calculator to call function inside a function

const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};

const calculator = function (a, b, operation) {
  if (operation === 'add') return add(a, b);
  else if (operation === 'subtract') return subtract(a, b);
  else if (operation === 'multiply') return multiply(a, b);
  else if (operation === 'divide') return divide(a, b);
  else return " Only 'add', 'Subtract', 'Multiply', 'divide' ";
};

const result = calculator(5, 7, 'multiply');
console.log(result);
