/**
 * 
 *? Problem 5: Remove Duplicates From Array Function name: removeDuplicates(arr)
Statement:
 Return a new array where duplicate values are removed, keeping the original order.
Test case 1
Input:
 [5, 3, 5, 2, 3, 9, 2, 7]
Output:
[5, 3, 2, 9, 7]

Test case 2
Input:
 [1, 1, 1, 1]
Output:
[1]

 * 
 */

// Ans:

const removeDuplicates = function (arr) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }

  return res;
};

const input = [5, 3, 5, 2, 3, 9, 2, 7];
const result = removeDuplicates(input);
console.log(result);
