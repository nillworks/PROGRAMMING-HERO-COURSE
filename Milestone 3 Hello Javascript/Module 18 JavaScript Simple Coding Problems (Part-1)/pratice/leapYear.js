// leap your convert function

function isLeapYear(year) {
  if (year % 4 == 0 && year % 4 !== 0) {
    return 'isLeapYear';
  }
  if (year % 100 === 0 && year % 400 === 0) {
    return 'isLeapYear';
  }
  return 'isNotLeapYear';
}

const result = isLeapYear(2024);
console.log(result);
