// Odd Average numbers

function oddAvg(numbers) {
  let odd = [];
  let sum = 0;

  for (const number of numbers) {
    if (number % 2 !== 0) {
      odd.push(number);
    }
  }

  for (let i = 0; i < odd.length; i++) {
    sum = +odd[i];
  }
  const avg = sum / odd.length;
  return avg;
}

const numbers = [4, 2, 3, 5];
const result = oddAvg(numbers);
console.log(`Odd Average Numbers is: ${result}`);

// Even Number Avg

function evenAverage(numbers) {
  let evens = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }

  let sum = 0;

  for (let i = 0; i < evens.length; i++) {
    sum += evens[i];
  }

  const average = sum / evens.length;
  return average;
}
const evenNumber = [223, 546, 67, 78, 9, 3, 23];
const resultEvenAvg = evenAverage(evenNumber);
console.log(`Even Average Number: ${resultEvenAvg}`);
