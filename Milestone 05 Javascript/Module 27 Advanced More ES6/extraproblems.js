/* =========================================
      Team Problems Solve
========================================= */

/* 
? Problem 1
একটা array থেকে সব odd number বের করো। 
const numbers = [11, 22, 33, 44, 55, 66];
Expected Output: [11, 33, 55]
*/
//* Ans:
const number = [11, 22, 33, 44, 55, 66];
const oddNumber = number.filter(num => num % 2 === 1);
console.log(oddNumber);

/* 
? Problem 2
সব student এর average mark বের করো। 
const students = [
  { name: "Ali", mark: 60 },
  { name: "Babu", mark: 80 },
  { name: "Chotu", mark: 70 }
];
Expected Output: 70
*/
//* Ans:
const students = [
  { name: 'Ali', mark: 60 },
  { name: 'Babu', mark: 80 },
  { name: 'Chotu', mark: 70 },
];
const averageMark = students.reduce((acc, item) => acc + item.mark, 0);
console.log(averageMark / students.length);

/* 
? Problem 3
একটা string reverse করো। 
const str = "JavaScript";
Expected Output: "tpircSavaJ"
*/
//* Ans:
const str = 'JavaScript';
const stringReverse = str.split('').reverse().join('');
console.log(stringReverse);

/* 
? Problem 4
Duplicate remove করো। 
const nums = [1, 2, 2, 3, 4, 4, 5];
Expected Output: [1, 2, 3, 4, 5]
*/
//* Ans:
const nums = [1, 2, 2, 3, 4, 4, 5];
const DuplicateArr = [];
for (const number of nums) {
  if (!DuplicateArr.includes(number)) {
    DuplicateArr.push(number);
  }
}
console.log(DuplicateArr);

/* 
? Problem 5
সব product এর total price বের করো (price * quantity)। 
const products = [
  { name: "Pen", price: 10, quantity: 5 },
  { name: "Book", price: 50, quantity: 2 }
];
Expected Output: 150
*/
//* Ans:
const products = [
  { name: 'Pen', price: 10, quantity: 5 },
  { name: 'Book', price: 50, quantity: 2 },
];
const totalPrice = products.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0,
);
console.log(totalPrice);

/* 
? Problem 6
Longest word বের করো। 
const words = ["apple", "banana", "watermelon", "mango"];
Expected Output: "watermelon"
*/
//* Ans:
const words = ['apple', 'banana', 'watermelon', 'mango'];

let longestWords = words[0];
for (let i = 0; i < words.length; i++) {
  if (words[i].length > longestWords.length) {
    longestWords = words[i];
  }
}
console.log(longestWords);

/* 
? Problem 7
একটা array আছে — সব নাম uppercase করো। 
const names = ["rahim", "karim", "jabbar"];
Expected Output: ["RAHIM", "KARIM", "JABBAR"]
*/
//* Ans:

const names = ['rahim', 'karim', 'jabbar'];
let arr = [];
for (let i = 0; i < names.length; i++) {
  arr.push(names[i].toUpperCase());
}
console.log(arr);

/* 
? Problem 8
একটা array থেকে প্রথম negative number বের করো। 
const nums = [5, 10, -3, 8, -1];
Expected Output: -3
*/
//* Ans:

const number8 = [5, 10, -3, 8, -1];
let result = 0;
for (let i = 0; i < number8.length; i++) {
  if (number8[i] < -1) result = number8[i];
}
console.log(result);

/* 
? Problem 9
Object array থেকে শুধু email গুলো বের করো। 
const users = [
  { name: "Ali", email: "ali@gmail.com" },
  { name: "Babu", email: "babu@gmail.com" }
];
Expected Output: ["ali@gmail.com", "babu@gmail.com"]
*/
//* Ans:
const users = [
  { name: 'Ali', email: 'ali@gmail.com' },
  { name: 'Babu', email: 'babu@gmail.com' },
];
const emailFilter = users.map(item => item.email);
console.log(emailFilter);

/* 
? Problem 10
একটা number palindrome কিনা check করো। 
Example:
121 → true
123 → false
*/
//* Ans:

const palindrome = function (i) {
  const string = i.toString();
  const reverse = string.split('').reverse().join('');
  return string === reverse;
};

console.log(palindrome(121));
console.log(palindrome(123));
