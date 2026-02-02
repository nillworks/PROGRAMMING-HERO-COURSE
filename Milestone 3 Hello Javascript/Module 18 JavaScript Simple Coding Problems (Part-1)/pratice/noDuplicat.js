// array has some duplicate elements

const names = [1, 5, 5, 56, 7, 7, 8, 8, 9, 9, 9];

function noDuplicateElement(arr) {
  let unique = [];

  for (const item of arr) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }

  return unique;
}
const result = noDuplicateElement(names);
console.log(result);
