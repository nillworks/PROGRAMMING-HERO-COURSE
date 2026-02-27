/*
? Qs: 1
Primitive এবং Non-Primitive data type আলাদা করে চিহ্নিত করো।

const a = 10;
const b = "Hello";
const c = true;
const d = null;
const e = undefined;
const f = [1, 2, 3];
const g = { name: "Karim" };

👉 কোনগুলো primitive?
👉 কোনগুলো non-primitive?
*/

// Ans:

/*
? Qs: 2
নিচের কোডের output কী হবে এবং কেন হবে?

let x;
console.log(x);

👉 undefined কেন আসে explain করো।
*/

// Ans:

/*
? Qs: 3
নিচের মানগুলো থেকে কোনগুলো truthy আর কোনগুলো falsy?

0
1
""
"Hello"
null
undefined
[]
{}
false

👉 আলাদা করে লিখো।
*/

// Ans:

/*
? Qs: 4
নিচের কোডের output কী হবে?

console.log(5 == "5");
console.log(5 === "5");
console.log(false == 0);
console.log(false === 0);

👉 implicit conversion explain করো।
*/

// Ans:

/*
? Qs: 5
নিচের কোডে error হবে কিনা? হলে কেন?

{
  let a = 10;
}
console.log(a);

👉 block scope explain করো।
*/

// Ans:

/*
? Qs: 6
Closure কীভাবে কাজ করে নিচের উদাহরণ দিয়ে explain করো।

function counter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  }
}

const result = counter();
result();
result();

👉 Output কী হবে? কেন?
*/

// Ans:

/*
? Qs: 7
Callback function ব্যবহার করে এমন একটি function বানাও যেখানে একটি function আরেকটি function কে parameter হিসেবে নেয়।

👉 Example: greet("Rahim", callbackFunction)
*/

// Ans:

/*
? Qs: 8
Pass by value এবং pass by reference নিচের উদাহরণ দিয়ে explain করো।

let num = 10;
function changeValue(x) {
  x = 20;
}
changeValue(num);
console.log(num);

এবং

let obj = { name: "Rahim" };
function changeName(o) {
  o.name = "Karim";
}
changeName(obj);
console.log(obj.name);

👉 দুইটার output explain করো।
*/

// Ans:

/*
? Qs: 9
map ব্যবহার করে নিচের array থেকে সব সংখ্যাকে double করো।

const numbers = [2, 4, 6, 8];

👉 Output হবে: [4, 8, 12, 16]
*/

// Ans:

/*
? Qs: 10
filter, find এবং reduce ব্যবহার করে নিচের কাজগুলো করো।

const products = [
  { name: "Mobile", price: 20000 },
  { name: "Laptop", price: 50000 },
  { name: "Watch", price: 3000 }
];

👉 ১. ১০,০০০ টাকার বেশি product filter করো
👉 ২. price 3000 এমন product খুঁজে বের করো
👉 ৩. সব product এর total price বের করো
*/

// Ans:
