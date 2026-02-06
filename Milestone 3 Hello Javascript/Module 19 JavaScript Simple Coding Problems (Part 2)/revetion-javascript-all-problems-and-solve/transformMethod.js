// Transform Method
// slice() splice() concat() reverse() sort()

const string = 'Transform Method';
const str = 'learning';
const arr = [12, 34, 45, 567, 678, 600, 100, 10];

// 1 slice
console.log(string.slice(9, 12));

// 2 splice
console.log(string.split(' '));

// 3: concat()
const result = string.concat(' ', str);
console.log(result);

// 4 : reverse()
console.log(arr.reverse());
//Notes: String-এর জন্য সরাসরি reverse() নেই। কারণ string immutable (পরিবর্তন করা যায় না)।তোমাকে আগে string → array করে তারপর reverse করতে হবে:
console.log(str.split('').reverse().join(''));

// 5 : sort
console.log(arr.sort((a, b) => a - b));
console.log(arr.sort((a, b) => b - a));

const fruits = ['banana', 'apple', 'cherry'];
console.log(fruits.sort()); // ["apple", "banana", "cherry"]
