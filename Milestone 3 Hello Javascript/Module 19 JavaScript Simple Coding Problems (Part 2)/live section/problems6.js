/**
 * Problem 6: Phonebook Prefix Search
Function name: searchByPrefix(phonebook, prefix)
Statement:
 Return an array of names that start with the given prefix.
Test case 1
Input:
phonebook = { rahim: "0181", karim: "0172", rafi: "0193" };
prefix = "ra";

Output:["rahim", "rafi"]

Test case 2
Input:
phonebook = { mina: "013", mim: "014", rina: "015" };


Output:
["mina", "mim"]


 */

// Ans:

const searchByPrefix = function (phoneBook, prefix) {
  let result = [];

  for (const key in phoneBook) {
    if (key.startsWith(prefix)) {
      result.push(key);
    }
  }

  return result;
};

const phoneBook = { rahim: '0181', karim: '0172', rafi: '0193' };
const prefix = 'ra';
const result = searchByPrefix(phoneBook, prefix);
console.log(result);
