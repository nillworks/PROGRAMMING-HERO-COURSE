const wordFrequency = function (sentence) {
  const words = sentence.split(' ');
  let wordsCount = {};
  for (const word of words) {
    const wordsToLowerCase = word.toLowerCase();

    if (wordsCount.hasOwnProperty(wordsToLowerCase)) {
      wordsCount[wordsToLowerCase]++;
    } else {
      wordsCount[wordsToLowerCase] = 1;
    }
  }

  return wordsCount;
};

const string = 'i love and i love coding and js is fun  Fun';

const output = wordFrequency(string);

console.log(output);

// Extra Problems

const letterFrequency = function (letters) {
  let letterCount = {};

  for (let i = 0; i < letters.length; i++) {
    const elementLowerCase = letters[i].toLowerCase();

    if (letterCount.hasOwnProperty(elementLowerCase)) {
      letterCount[elementLowerCase]++;
    } else {
      letterCount[elementLowerCase] = 1;
    }
  }

  // for (const letter of letters) {
  //   const elementLowerCase = letter.toLowerCase();

  //   if (letterCount.hasOwnProperty(elementLowerCase)) {
  //     letterCount[elementLowerCase]++;
  //   } else {
  //     letterCount[elementLowerCase] = 1;
  //   }
  // }

  return letterCount;
};

const letterResult = letterFrequency(string);
console.log(letterResult);
