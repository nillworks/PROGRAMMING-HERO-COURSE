// 19-6 (advanced) Multi-layer discount price calculation

/**
 * First 100 product ----> 100 tk
 * 100 to 200 product -----> 90 tk
 * Above 200 product ------> 70
 */

const layerDiscount = function (quantity) {
  const first100ProductPrice = 100;
  const price101To200 = 90;
  const priceAbove200 = 70;

  if (quantity <= 100) {
    const total = quantity * first100ProductPrice;
    return total;
  } else if (quantity <= 200) {
    const first100Total = 100 * first100ProductPrice;
    const remainingQuantity = quantity - 100;
    const remainingTotal = remainingQuantity * price101To200;
    const total = first100Total + remainingTotal;
    return total;
  } else {
    const first100Total = 100 * first100ProductPrice;
    const second100Total = 100 * price101To200;
    const remainingQuantity = quantity - 200;
    const remainingTotal = remainingQuantity * priceAbove200;
    const total = first100Total + second100Total + remainingTotal;
    return total;
  }
};

const result = layerDiscount(250);
console.log(result);
