//? Qs: 1 : Count how many times a string has the letter a.
// Ans:
const string = 'i am a shipon roy';
let count = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] === 'a') {
    count++;
  }
}
console.log(count);

//? Qs: 2 : Count how many times a string has the letter a or A
// Ans:
const str = 'a A a a A';
let counts = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i].toLowerCase() === 'a') {
    counts++;
  }
}
console.log(counts);

//? Qs: 3 : Check whether a string contains all the vowels a, e, i, o, u
// Ans:
const string3 = 'a e i o u';
const vowels = 'aeiou';
let hasAllVowels = true;

for (let i = 0; i < vowels.length; i++) {
  if (!string3.includes(vowels[i])) {
    hasAllVowels = false;
    break;
  }
}

if (hasAllVowels) {
  console.log('String contains all vowels');
} else {
  console.log('String does not contain all vowels');
}

//? Qs: 4 : Capitalize Every first Letter of each word in a String
// Ans:

const string4 = 'my name is shipon roy';
const result = string4
  .split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ');

console.log(result);
