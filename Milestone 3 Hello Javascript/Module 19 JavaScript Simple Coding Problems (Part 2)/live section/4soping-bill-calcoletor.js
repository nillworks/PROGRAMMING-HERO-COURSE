/*

Problem 4: Shopping Bill Calculator
Function name: calcBill(prices, items)
Statement:  Calculate total bill amount and count how many times each item appears.
Test case 1
Input: 
     prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
     items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

Output:
{
  total: 376,
  itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 }
}

Test case 2
Input:
prices = { pen: 10, book: 50 };
items = ["pen", "pen", "book", "pen"];

Output:
{
  total: 80,
  itemCount: { pen: 3, book: 1 }
}


*/

// Ans:

const calcBill = function (prices, itemCount) {
  let count = {};
  let total = 0;

  for (let i = 0; i < itemCount.length; i++) {
    const item = itemCount[i];

    if (count.hasOwnProperty(item)) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  }

  for (const price in count) {
    total = total + count[price] * prices[price];
  }

  return { total: total, count };
};

const price = { pen: 10, book: 50 };
const items = ['pen', 'pen', 'book', 'pen'];

const result = calcBill(price, items);
console.log(result);
