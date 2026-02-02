// 19-2 Who is the tallest? Find the max number in an array

const heights = [65, 66, 68, 72];
const maxHight = Math.max(...heights);
console.log(maxHight);

// array of Max Number fiend
const arrNumbers = [23, 34, 45, 56, 67, 78, 789];

const MaxNumberFind = function (numbers) {
  let max = numbers[0];
  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
};

const resultMaxArrNumbers = MaxNumberFind(arrNumbers);
console.log(resultMaxArrNumbers);

// Extra Problems

const sumNumberMax = function (arr) {
  let maxSumNumber = arr[0] + arr[1];

  for (let i = 1; i < arr.length - 1; i++) {
    const currentSum = arr[i] + arr[i + 1];
    if (currentSum > maxSumNumber) {
      maxSumNumber = currentSum;
    }
  }

  return maxSumNumber;
};

const numbers = [45, 56, 67, 78, 8, 234];
const result = sumNumberMax(numbers);
console.log(result);
