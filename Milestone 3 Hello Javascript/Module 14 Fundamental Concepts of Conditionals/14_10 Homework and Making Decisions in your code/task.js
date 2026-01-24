//? Qs:1 : Free Drinks - Burger more than 500tk: free Coke - Else Coke: 30tk
// Ans:

const freeDrinks = 501;
if (freeDrinks > 500) {
  console.log('free Coke');
} else {
  console.log('Else Coke: 30Tk');
}

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const weight = 30;
const height = 1.6;
const BMI = weight / (height * height);

if (BMI < 18.5) {
  console.log('You are underweight');
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log('your are normal');
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log('You are overweight');
} else {
  console.log('Otherwise,You Are Obese');
}

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const marks = 40;

if (marks >= 90 && marks <= 100) {
  console.log('A');
} else if (marks >= 80 && marks <= 89) {
  console.log('B');
} else if (marks >= 70 && marks <= 79) {
  console.log('C');
} else if (marks >= 60 && marks <= 69) {
  console.log('D');
} else {
  console.log('F');
}

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const myScore = 85;
const friendScore = 35;

if (myScore > 80) {
  if (friendScore > 80) {
    console.log('Go for a lunch');
  } else if (friendScore >= 60) {
    console.log('Good luck next time');
  } else if (friendScore >= 40) {
    console.log("Keep your friend's message unseen");
  } else {
    console.log('Block your friend');
  }
} else {
  console.log('Go to home and sleep and act sad');
}

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.
*/

const num1 = 30;
const num2 = 30;
let result;

const numbers = num1 > num2 ? (result = num1 * 2) : (result = num1 + num2);
console.log(numbers);

/*
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const ticketFare = 40;
const age = 20;
const student = true;

let finalFare;

if (age < 10) {
  finalFare = 0;
} else if (student) {
  finalFare = ticketFare - (ticketFare * 50) / 100;
} else if (age >= 60) {
  finalFare = ticketFare - (ticketFare * 15) / 100;
} else {
  finalFare = ticketFare;
}
console.log(finalFare);
