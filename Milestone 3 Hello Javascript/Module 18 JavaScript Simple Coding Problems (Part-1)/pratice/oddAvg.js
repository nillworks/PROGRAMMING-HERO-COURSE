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
