// inch Feet Convert

function inchToFeetConvert(inch) {
  const feetConvert = inch / 12;
  return feetConvert;
}
console.log(inchToFeetConvert(75));

// inch feet convert To

const inchToFeetConvert2 = function (inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = `${feetNumber} Ft ${inchRemaining} inch`;
  return result;
};

const inchResult = inchToFeetConvert2(58);
console.log(inchResult);

// Mile to  Kilometer Convert

const mileToKilometerConvert = function (mile) {
  const kiloMeter = mile * 1.60934;
  return kiloMeter;
};

const resultMileToKilometer = mileToKilometerConvert(53);
console.log(resultMileToKilometer);

// kiloMeter to mile Convert

function kiloMeterToMileConvert(kiloMeter) {
  const mile = kiloMeter * 0.621371;
  return mile;
}

console.log(kiloMeterToMileConvert(5));
