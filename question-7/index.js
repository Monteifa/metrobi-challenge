// Think that you have an unlimited number of carrots, but a limited number of carrot
// types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
// weight and a price. Write a function that takes carrotTypes and capacity and return the
// maximum value the bag can hold. [Python or Javascript]

// carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]
// capacity = 36 //kg
// getMaxValue(carrotTypes, capacity)

const array1 = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 },
];

const question7 = (types, capacity) => {
  const bag = [];
  let bagWeight = 0;

  const carrots = types
    .map((carrot) => ({
      ...carrot,
      'price/kg': carrot.price / carrot.kg,
    }))
    .sort((a, b) => b['price/kg'] - a['price/kg']);

  for (const carrot of carrots) {
    while (bagWeight + carrot.kg <= capacity) {
      bag.push(carrot);

      bagWeight += carrot.kg;
    }
  }

  return bag.reduce((acc, curr) => acc + curr.price, 0);
};

console.log(question7(array1, 36));
