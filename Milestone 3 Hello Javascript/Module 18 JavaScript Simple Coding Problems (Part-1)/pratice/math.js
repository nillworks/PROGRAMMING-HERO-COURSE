const min = Math.min();
const max = Math.max();
/*

console.log(Math.PI());
console.log(Math.abs());
console.log(Math.floor());
console.log(Math.ceil());
console.log(Math.round());
console.log(Math.random());

*/

const numbers = [23, 45, 56, 76, 78, 88, 98, 108];

const diffNumber = function (num) {
  let newNum = [];

  for (let i = 0; i < num.length; i++) {
    if (Math.abs(num[i] - num[i + 1]) === 10) {
      newNum.push(num[i]);
    }
  }
  return newNum;
};

const result = diffNumber(numbers);
console.log(result);

const sumMxNumber = function (number) {
  let nuwElementSum = [];

  for (let i = 0; i < number.length - 1; i++) {
    nuwElementSum.push(number[i] + number[i + 1]);
  }

  let oddArris = [];
  for (let i = 0; i < nuwElementSum.length; i++) {
    if (nuwElementSum[i] % 2 === 0) {
      oddArris.push(nuwElementSum[i]);
    }
  }

  return oddArris;
};
const mxNumbers = sumMxNumber(numbers);
console.log(mxNumbers);
