const prices = [20000, 40000, 30000, 56000, 120000];

const getMainPrice = function (prices) {
  let minPrice = prices[0];

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    }
  }

  return minPrice;
};

const minPriceResult = getMainPrice(prices);
console.log('get min price', minPriceResult);

// Mobile Object

const mobiles = [
  { name: 'samsung', price: 20000, camera: '12mp', color: 'black' },
  { name: 'redmi note 14', price: 20000, camera: '12mp', color: 'black' },
  { name: 'iphone 14', price: 10000, camera: '12mp', color: 'black' },
  { name: 'iphone 15', price: 120000, camera: '12mp', color: 'black' },
  { name: 'iphone 16', price: 150000, camera: '12mp', color: 'black' },
  { name: 'iphone 17 pro max', price: 500, camera: '12mp', color: 'black' },
];

const getCheapestPhone = function (phones) {
  let min = phones[0];

  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
};

const minPrice = getCheapestPhone(mobiles);
console.log('Min Price Phone Is', minPrice);

const getMaxPrice = function (phones) {
  let maxPricePhone = phones[0];

  for (let i = 0; i < phones.length; i++) {
    if (phones[i].price > maxPricePhone.price) {
      maxPricePhone = phones[i];
    }
  }

  return maxPricePhone;
};

const maxPricePhone = getMaxPrice(mobiles);
console.log(
  `Phone modal: ${maxPricePhone.name} || Phone Price: ${maxPricePhone.price} || Phone Color: ${maxPricePhone.color}`,
);
