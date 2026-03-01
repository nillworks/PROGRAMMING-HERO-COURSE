const person = {
  name: 'shipon roy',
  age: 23,
  dish: 'cofy',
  money: 24000,
  price: [234, 45, 56, 78, 78],
  isRich: false,
};

// Js Object With Notation

// json.stringify --> JSON Convert
// JSON.parse ---> Convert Objects

const personJson = JSON.stringify(person);
const personJsonObject = JSON.parse(personJson);

console.log(personJson, typeof personJson);
console.log(personJsonObject);
