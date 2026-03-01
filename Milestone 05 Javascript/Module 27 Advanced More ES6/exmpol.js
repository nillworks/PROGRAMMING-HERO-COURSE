// const obj1 = {};
// const obj2 = {};

// console.log(obj1 === obj2);

// const totalMarks = marks.reduce((t, curr) => {
//   return (total = t + curr);
// }, 0);

// /*
// ? Qs: 6 reduce ব্যবহার করে সব marks যোগ করে total বের করো। const marks = [70, 80, 90, 60]; Expected Output: 300 */ // Ans:
// const marks = [70, 80, 90, 60];
// const totalMarks = marks.reduce((t, curr) => {
//   return t + curr;
// }, 0);

// console.log(totalMarks);

/*
? Qs: 7
reduce ব্যবহার করে total user সংখ্যা বের করো।

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
  { name: "C", age: 30 }
];

Hint: accumulator + 1
Expected Output:
3
*/
// Ans:

// const userCount = users2.reduce(acc => acc + 1, 0);
// console.log(userCount);

const users2 = [
  { name: 'A', age: 20 },
  { name: 'B', age: 25 },
  { name: 'C', age: 30 },
];
const userCount = users2.reduce(count => {
  return (count = count + 1);
}, 0);
console.log(userCount);
