const diaha = 46;
const shipon = 47;

if (diaha > shipon) {
  console.log(`disha wil get the strawberry`);
} else {
  console.log('salman will be thhe strawberry');
}

// Inside a function
function getMax(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
}
const max = getMax(129, 234);
console.log('max of two is: ', max);
