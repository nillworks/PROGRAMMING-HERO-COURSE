//? Qs: 1 : একটা array আছে। 👉 পাশাপাশির (adjacent) দুইটা number যোগ করলে 50 হলে তাদের index বের করো |
// Ans:
const sumIndex = arr => {
  let res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] === 50) {
      res.push(i, i + 1);
    }
  }
  return res;
};
let numbers = [34, 43, 65, 25, 25, 56];
const result = sumIndex(numbers);
console.log(result);

//? Qs: 2 : 👉 পাশের দুইটা number equal হলে তাদের index বের করো
// Ans:

let numbers2 = [5, 5, 10, 20, 20, 30];

const numberEqual = arr => {
  let arrE = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arrE.push([i, i + 1]);
    }
  }
  return arrE;
};
const result2 = numberEqual(numbers2);
console.log(result2);

//? Qs: 3 : 👉 পাশের দুইটা number এর difference যদি 5 হয়
// Ans:
let numbers3 = [10, 15, 20, 18, 23];

const numberDifference = arrD => {
  let arr = [];
  for (let i = 0; i < arrD.length - 1; i++) {
    if (Math.abs(arrD[i] - arrD[i + 1]) === 5) {
      arr.push([i, i + 1]);
    }
  }
  return arr;
};

const result3 = numberDifference(numbers3);
console.log(result3);

//? Qs: 4 :
// Ans:
//? Qs: 5 :
// Ans:
//? Qs: 6 :
// Ans:
//? Qs: 7 :
// Ans:
//? Qs: 8 :
// Ans:
//? Qs: 9 :
// Ans:
//? Qs: 10 :
// Ans:
