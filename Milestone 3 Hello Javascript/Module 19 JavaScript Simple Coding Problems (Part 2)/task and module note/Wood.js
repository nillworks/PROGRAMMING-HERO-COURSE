function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairTotalWood = chairQuantity * perChairWood;
  const tableTotalWood = tableQuantity * perTableWood;
  const bedWoodWood = bedQuantity * perBedWood;

  const totalWood = chairTotalWood + tableTotalWood + bedWoodWood;
  return totalWood;
}

const chair = 2;
const table = 3;
const bed = 4;

const result = woodQuantity(chair, table, bed);

// console.log('Wood Needed', result);

/**
 * Shirt Price = 500
 * pant Price = 300
 * Shoe Price = 900
 */

const totalQuantity = function (shirtQuantity, pantQuantity, shoeQuantity) {
  const shirtPrice = 500;
  const pantPrice = 300;
  const ShoePrice = 900;

  const totalShirtQuantity = shirtQuantity * shirtPrice;
  const totalPantQuantity = pantQuantity * pantPrice;
  const totalShoeQuantity = shoeQuantity * ShoePrice;

  const totalPrice = totalShirtQuantity + totalPantQuantity + totalShoeQuantity;

  if (totalPrice >= 3000) {
    const discount = (totalPrice * 50) / 100;
    const discounts = totalPrice - discount;
    return `your price : ${totalPrice} BDT ||| Your Discount ${50}%  Your Total Price is ${discounts} BDT`;
  } else {
    return `Your Price is: ${totalPrice} BDT `;
  }
};

const shirt = 3;
const pant = 4;
const shoe = 3;
const totalBroth = totalQuantity(shirt, pant, shoe);
console.log(totalBroth);
