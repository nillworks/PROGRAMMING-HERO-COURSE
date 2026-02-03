/**
 *? Qs : 1 : Find the lowest number in the array below. const heights2 = [167, 190, 120, 165, 137];
 */
// Ans:
const heights2 = [167, 190, 120, 165, 137];

const lowest = function (numbers) {
  let lowestNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < lowestNumber) {
      lowestNumber = numbers[i];
    }
  }

  return lowestNumber;
};

const heights2Result = lowest(heights2);
console.log('lowest Number is :', heights2Result);

/**
 *? Qs : 2 :
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

 */
// Ans:

const friendNames = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const getSmallestName = function (names) {
  let nameLength = names[0];
  for (const name of names) {
    if (name.length < nameLength.length) {
      nameLength = name;
    }
  }
  return nameLength;
};

const smallestName = getSmallestName(friendNames);
console.log(smallestName);

/**
 *? Qs : 3 :
  **Your task is to calculate the total budget required to buy electronics:
    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
**Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

 */

// Ans:

const calculateElectronicsBudget = function (
  LaptopQuantity,
  tabletQuantity,
  mobileQuantity,
) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  const totalLaptopPrice = laptopPrice * LaptopQuantity;
  const totalTabletPrice = tabletPrice * tabletQuantity;
  const totalMobilePrice = mobilePrice * mobileQuantity;

  const total = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
  return total;
};

const laptop = 2;
const tablet = 1;
const mobile = 1;

const result3 = calculateElectronicsBudget(laptop, tablet, mobile);
console.log(`Total Price : ${result3} Tk`);

/**
 *? Qs : 4 : 
 *You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

 */

// Ans:
const phones = [
  { model: 'PhoneA', brand: 'Iphone', price: 95000 },
  { model: 'PhoneB', brand: 'Samsung', price: 40000 },
  { model: 'PhoneC', brand: 'Oppo', price: 26000 },
  { model: 'PhoneD', brand: 'Nokia', price: 35000 },
  { model: 'PhoneE', brand: 'Iphone', price: 105000 },
  { model: 'PhoneF', brand: 'HTC', price: 48000 },
];

const findAveragePhonePrice = function (phones) {
  let totalPrices = phones[0].price;

  for (let i = 1; i < phones.length; i++) {
    totalPrices = totalPrices + phones[i].price;
  }

  const averagePrice = totalPrices / phones.length;
  return averagePrice;
};

const result4 = findAveragePhonePrice(phones);
console.log(`Average Price is: ${result4.toFixed(2)} BDT`);

/**
 *? Qs : 5 :
 *For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
 */
// Ans:

const employees = [
  { name: 'shahin', experience: 5, starting: 20000, increment: 5000 },
  { name: 'shihab', experience: 3, starting: 15000, increment: 7000 },
  { name: 'shikot', experience: 9, starting: 30000, increment: 1000 },
  { name: 'shohel', experience: 0, starting: 29000, increment: 4000 },
];

const employeesSalary = function (employees) {
  let companyMonthSalary = 0;

  for (const employee of employees) {
    const total = employee.starting + employee.increment * employee.experience;
    const monthSalary = total / 12;
    companyMonthSalary += monthSalary;
  }
  return companyMonthSalary;
};

const result5 = employeesSalary(employees);
console.log(
  `total salary has to be provided by the company in a month: ${result5.toFixed(2)}`,
);
