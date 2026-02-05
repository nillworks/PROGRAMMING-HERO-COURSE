/**
 * Problem 7: Text Stats Generator
Function name: textStats(text)
Statement:
 Return an object containing:
Characters count excluding spaces


Words count


Vowels count


Consonants count


Test case 1
Input:
 "JavaScript is fun to learn"
Output:
{ characters: 22, words: 5, vowels: 8, consonants: 14 }

Test case 2
Input:
 " I am OK "
Output:
{ characters: 5, words: 3, vowels: 3, consonants: 2 }


 */

// Ans:

const textStats = function (text) {
  let charactersCount = 0;
  const words = text.split(' ');
  const vowels = 'aeiou';

  let wordCount = 0;
  let vowelsCount = 0;
  let consonantsCount = 0;

  // letter counts
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      charactersCount++;
    }
  }

  // words Counts
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== '') {
      wordCount++;
    }
  }

  // vowels and consonants counts
  for (let i = 0; i < text.length; i++) {
    const toLowerCaseLetter = text[i].toLowerCase();

    if (toLowerCaseLetter >= 'a' && toLowerCaseLetter <= 'z') {
      if (vowels.includes(toLowerCaseLetter)) {
        vowelsCount++;
      } else {
        consonantsCount++;
      }
    }
  }

  return {
    characters: charactersCount,
    words: wordCount,
    vowels: vowelsCount,
    consonants: consonantsCount,
  };
};
const string = 'JavaScript is fun to learn';
const result = textStats(string);
console.log(result);
