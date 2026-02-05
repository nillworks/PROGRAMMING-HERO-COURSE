const towSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result;
};

console.log(towSum([2, 7, 11, 15], 9));

function longestCommonPrefix(strs) {
  if (strs.length === 0) return '';

  let prefix = strs[0];

  for (let i = 0; i < prefix.length; i++) {
    let char = prefix[i];

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return prefix.slice(0, i);
      }
    }
  }

  return prefix;
}

// Test examples
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ""
