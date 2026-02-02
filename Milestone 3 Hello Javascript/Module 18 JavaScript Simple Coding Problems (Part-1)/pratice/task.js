// ?Qs: 1 :Write a function to convert temperature from Celsius to Fahrenheit.
// Ans:

const temperatureToFahrenheitConvert = function (temp) {
  const fahrenheit = temp * 1.8 + 32;
  return fahrenheit;
};

const temperature = 20;
const resultTemperature = temperatureToFahrenheitConvert(temperature);
console.log(`Now Fahrenheit ${resultTemperature}`);

// ?Qs: 2 :
/*
*You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0

*/
// Ans:

const countNumber = function (numbers, findNumber) {
  let count = 0;

  for (const number of numbers) {
    if (number === findNumber) count++;
  }
  return count;
};
const numbers = [5, 6, 11, 12, 98, 5];
const findNumbers = 5;
const countResult = countNumber(numbers, findNumbers);
console.log(`count Number is : ${countResult}`);

// ?Qs: 3 : Write a function to count the number of vowels in a string.
// Ans:

const string = 'shipon roy';
const countTheVowels = function (string) {
  let vowels = 'aeiou';
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
};

const countVowels = countTheVowels(string);
console.log(countVowels);

// ?Qs: 4 :
/*
* Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming

*/
// Ans:

const strings = 'I am learning Programming to become a programmer';

const findLongestWord = function (str) {
  const words = str.split(' ');

  let maxLength = 0;
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    const element = words[i].length;
    if (element > maxLength) {
      maxLength = element;
      longestWord = words[i];
    }
  }

  return longestWord;
};

const output = findLongestWord(strings);
console.log(output);

// ?Qs: 5  : Generate a random number between 10 to 20.
// Ans:

const GenerateRandomNumber = Math.random() * (20 - 10) + 10;
console.log(Math.ceil(GenerateRandomNumber));
