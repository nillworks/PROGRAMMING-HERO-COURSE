const shipon = 56;
const joy = 80;
const shovoSarkar = 60;

// loop use
if (shipon > joy && shipon > shovoSarkar) {
  console.log('shipon is the ultimate boss');
} else if (joy > shipon && joy > shovoSarkar) {
  console.log('joy is the ultimate boss');
} else {
  console.log('shovo is the ultimate boss');
}

// Function Use
const maxMarks = function (n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    console.log(`big number is ${n1}`);
  } else if (n2 > n1 && n2 > n3) {
    console.log(`big number is ${n2}`);
  } else {
    console.log(`big number is ${n3}`);
  }
};

const resultMaxMarks = maxMarks(shipon, joy, shovoSarkar);
console.log(resultMaxMarks);

// array of Max Number fiend

const arrNumbers = [23, 34, 45, 56, 67, 78, 789];

const MaxNumberFind = function (numbers) {
  let maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
};

const resultMaxArrNumbers = MaxNumberFind(arrNumbers);
console.log(resultMaxArrNumbers);

// sampull taknik

const maxnumberOn = Math.max(...arrNumbers);
console.log(maxnumberOn);
