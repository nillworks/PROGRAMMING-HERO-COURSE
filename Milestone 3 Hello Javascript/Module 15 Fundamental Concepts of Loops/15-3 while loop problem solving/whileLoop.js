// loop problems

// let num = 1;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// let numbers = [20, 10, 45, 54, 56, 34]; // 1 , 2

// function findIndex() {
//   let output = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] + numbers[i + 1] === 30) {
//       output.push(i, i + 1);
//     }
//   }
//   return output;
// }

// console.log(findIndex(numbers));

// for (let i = 0; i < numbers.length; i++) {
//   // console.log(numbers[i + );
//   if (numbers[i] + numbers[i + 1] === 99) {
//     console.log(i);
//   }
// }

// let numbers = [20, 30, 10, 40, 25, 25, 54, 56, 50, 49];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] + numbers[i + 1] === 99) {
//     console.log(i, i + 1);
//   }
// }

// const names = ['a', 'b', 'c', 'd'];
// for (let i = 0; i < names.length; i++) {
//   if (names[i] === 'd') {
//     console.log(i);
//   }
// }

// 1

// let numbers = [5, 5, 10, 20, 20, 30];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === numbers[i + 1]) {
//     console.log(i, i + 1);
//   }
// }

let numbers = [10, 15, 20, 18, 23];
const arr = [];

for (let i = 0; i < numbers.length - 1; i++) {
  if (Math.abs(numbers[i] - numbers[i + 1]) === 5) {
    arr.push(i, i + 1);
    // console.log(i, i + 1);
  }
}
console.log(arr);
