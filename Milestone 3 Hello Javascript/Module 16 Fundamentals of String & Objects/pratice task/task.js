// Object problems solving

//? Qs: 1 : Access the golden rod color value in output.
// Ans:
const colors = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  'golden rod': '#daa520',
};

const goldenRodColor = colors['golden rod'];
console.log(goldenRodColor);

//? Qs: 2 : For this object below add a property named passenger capacity with value 5
// Ans:
const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020,
};
car['passenger capacity'] = 25;
console.log(car);

//? Qs: 3 : Display the physics marks as output.
// Ans:
const student = {
  name: 'Hamim Sakep',
  id: 5421,
  physics: {
    subject: 'HSC Physics',
    author: 'Shahjahan Tapan',
    marks: 30,
  },
};

console.log(student.physics.marks);

//? Qs: 4 : Count the number of properties.
// Ans:
let students = {
  name: 'Ariana Grande',
  age: 21,
  city: 'Gaibandha',
  isStudent: true,
};

const numberOfProperties = Object.keys(students).length;
console.log(numberOfProperties);

//? Qs: 5 : Loop through an object and print the key-value pairs with their types
// Ans:

const obj = {
  name: 'John Doe',
  age: 25,
  city: 'Example City',
  isStudent: true,
};
for (const i in obj) {
  console.log(`key: ${i} | Type: ${typeof obj[i]}`);
}
