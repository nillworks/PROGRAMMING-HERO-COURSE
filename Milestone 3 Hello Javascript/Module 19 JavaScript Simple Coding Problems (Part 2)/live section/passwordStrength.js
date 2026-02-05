// PassWord Strength checker

const checkPassword = function (password) {
  const length = password.length;
  let reasons = [];
  let upCase = false;
  let numbers = false;

  for (let i = 0; i < password.length; i++) {
    const character = password[i];

    if (character >= '0' && character <= '9') {
      numbers = true;
    }
    if (character >= 'A' && character <= 'Z') {
      upCase = true;
    }
  }

  if (!numbers) {
    reasons.push('Missing Number');
  }
  if (!upCase) {
    reasons.push('Missing Capital Letter');
  }
  if (password.includes(' ')) {
    reasons.push('space Found !!!');
  }

  if (length >= 0 && length <= 8) {
    reasons.push('plasse 8 letter');
  }

  const isValid = reasons.length === 0;

  return { valid: isValid, reasons };
};

const password = 'namw1@W';
const output = checkPassword(password);
console.log(output);
