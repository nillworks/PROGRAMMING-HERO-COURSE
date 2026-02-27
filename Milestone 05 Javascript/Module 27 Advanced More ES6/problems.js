// Your Task

/* 
? Qs: 1
Primitive আর Non-Primitive data type এর পার্থক্য example সহ দেখাও।
Primitive value copy করলে original change হয় না কিন্তু object copy করলে কেন change হয় — কোড লিখে প্রমাণ করো।
*/
// Ans:

//* primitive ==> pass by value
//* Non-Primitive ==> pass by Reference
//* karon primitive type a value ka refar kora aijono change hoi na || non-primitive ar katra alada mamore locition crete hoi that oai aita hoi

/* 
? Qs: 2
নিচের কোডের output কী হবে? ব্যাখ্যা করো।

let a;
let b = null;

console.log(a);
console.log(b);
console.log(a == b);
console.log(a === b);
*/
// Ans:

//* 1 . undefined
//* 2 . null
//* 3 . true
//* 4 . false

/* 
? Qs: 3
undefined কেন হয়? নিচের কোডের output বের করো।

function test(x) {
  console.log(x);
}

let result = test();
console.log(result);
*/
// Ans:

//* akane undefined hobe karon hoce akane function take return hoi nai . and Parameter pass kora hoi nai | aijono 2 toi undefined hobe >
//* solve : Parameter pass korta hobe and function take return kota hobe .

function test(x) {
  console.log(x);
  return x;
}

let result = test(2);
console.log(result);

/* 
? Qs: 4
Falsy value কয়টা? নিচের কোডের output কী হবে?

if (0) {
  console.log("True");
} else {
  console.log("False");
}

if (" ") {
  console.log("Hello");
}
*/
// Ans:

//* */ 1. false because 0 takle by default false dota nai
//* 2. Hello => because akane  white space ace aijono true hisabe count hobe .

/* 
? Qs: 5
Empty array এবং empty object truthy নাকি falsy?
নিচের কোডের output explain করো।

if ([]) {
  console.log("Array is truthy");
}

if ({}) {
  console.log("Object is truthy");
}
*/
// Ans:

//* 1.Array is truthy => because aita true empty arr alada Reference crate kora .
//* 2.Object is truthy => because aita true empty object arr alada Reference crate kora .

/* 
? Qs: 6
Double equal (==) এবং Triple equal (===) এর পার্থক্য প্রমাণ করো।

console.log(10 == "10");
console.log(10 === "10");
console.log(false == 0);
console.log(false === 0);
*/
// Ans:

//* == and === equal  difference double equal loosely check value && triple equal value and type check
//* 1. true 2. false , 3. true 4. false

/* 
? Qs: 7
Block scope এবং Global scope বুঝাও নিচের কোড দিয়ে।

let x = 5;

{
  let x = 10;
  console.log(x);
}

console.log(x);
*/
// Ans:

// * block scope and global scope difference 1. block scope sodo block ar vitore work korbe and Global scope hoce bahier take block ar vitore asbe.

// * ans : 1. 10 && 2. 5 |because use ... pare lakta monci na

/* 
? Qs: 8
Hoisting কী? নিচের কোডের output explain করো।

console.log(a);
var a = 20;
*/
// Ans:

//* hoisting hoce varable diklaier korar age output chak korta data opor vite kora err diba . output: undefined

/* 
? Qs: 9
let এবং var এর hoisting behaviour এর পার্থক্য দেখাও।

console.log(b);
let b = 30;
*/
// Ans:

//* let  Hoisting Behaviour let hoisted hoi kinto aita temporal Dead zone take Initialization hoar age access korla error diba
//* output: ReferenceError Error

/* 
? Qs: 10
নিচের object থেকে name, email এবং city আলাদা করে বের করো (destructuring ব্যবহার করে)।

const user = {
  id: 101,
  name: "Rahim",
  email: "rahim@gmail.com",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
}
*/
// Ans:

const user = {
  id: 101,
  name: 'Rahim',
  email: 'rahim@gmail.com',
  address: {
    city: 'Dhaka',
    country: 'Bangladesh',
  },
};

const {
  name,
  email,
  address: { city },
} = user;

console.log(name, email, city);

// Completes task today Date 2/27/2026
