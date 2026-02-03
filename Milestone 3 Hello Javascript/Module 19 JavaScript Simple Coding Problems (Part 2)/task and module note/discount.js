// 19-6 (advanced) Multi-layer discount price calculation

/*
 *Upto 100: ----> 100
 *More Then 101-200: ----> 90
 *More Then 200 : --->70
 */

const getDiscount = function (quantity) {
  if (quantity <= 100) {
    const total = quantity * 100;
    return total;
  } else if (quantity <= 200) {
    const total = quantity * 90;
    return total;
  } else {
    const total = quantity * 70;
    return total;
  }
};

const productNo = 9;
const resultProduct = getDiscount(productNo);
console.log(resultProduct);
