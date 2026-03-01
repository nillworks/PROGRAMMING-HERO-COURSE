/* =========================================
        🚀 DAY 3 – Team Discussion Problems
        Advanced Logic Practice.
========================================= */

/*
? Qs: 1
একটা array থেকে duplicate value remove করো।

const numbers = [1, 2, 2, 3, 4, 4, 5];

Expected Output:
[1, 2, 3, 4, 5]

Hint: filter / Set / reduce যেকোনো একটা ব্যবহার করতে পারো।
*/

// Ans:

const numbers = [1, 2, 2, 3, 4, 4, 5];
const duplicateValueRemove = numbers.filter((item, index, arr) => {
  return arr.indexOf(item) === index;
});

console.log(duplicateValueRemove);

/*
? Qs: 2
একটা array থেকে সব string এর length বের করো map ব্যবহার করে।

const words = ["apple", "banana", "mango"];

Expected Output:
[5, 6, 5]
*/

// Ans:

const words = ['apple', 'banana', 'mango'];
const lengthCounts = words.map(item => item.length);
console.log(lengthCounts);

/*
? Qs: 3
একটা array থেকে শুধু ১৮ বছরের বেশি বয়সের মানুষদের বের করো
এবং তাদের নামের list বানাও।

const people = [
  { name: "Rahim", age: 17 },
  { name: "Karim", age: 22 },
  { name: "Jamal", age: 30 },
  { name: "Rafiq", age: 15 }
];

Expected Output:
["Karim", "Jamal"]

Hint: filter + map chain করো
*/

const people = [
  { name: 'Rahim', age: 17 },
  { name: 'Karim', age: 22 },
  { name: 'Jamal', age: 30 },
  { name: 'Rafiq', age: 15 },
];

const peopleAge18 = people.filter(item => item.age > 18).map(item => item.name);
console.log(peopleAge18);

// Ans:

/*
? Qs: 4
reduce ব্যবহার করে বের করো —
array এর মধ্যে সবচেয়ে বড় সংখ্যাটা কোনটা।

const numbers = [10, 25, 5, 40, 15];

Expected Output:
40
*/
// Ans:
const numbers4 = [10, 25, 5, 40, 15];
const bigNumber = numbers4.reduce((acc, num) => (num > acc ? num : acc));
console.log(bigNumber);

/*
? Qs: 5
একটা array এর মধ্যে কতবার কোন word এসেছে সেটা count করো।

const words = ["apple", "banana", "apple", "mango", "banana", "apple"];

Expected Output:
{
  apple: 3,
  banana: 2,
  mango: 1
}

Hint: reduce ব্যবহার করো।
*/

// Ans:

const words5 = ['apple', 'banana', 'apple', 'mango', 'banana', 'apple'];
const wordsCounts = words5.reduce((acc, item) => {
  if (acc[item]) {
    acc[item]++;
  } else {
    acc[item] = 1;
  }
  return acc;
}, {});
console.log(wordsCounts);
