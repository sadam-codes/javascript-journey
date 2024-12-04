const myNumbers = [1, 2, 3, 4, 5];
const myTotal = myNumbers.reduce((accumulator, current) => {
  console.log(
    `Accumulator value is : ${accumulator} and current value is : ${current}`
  );
  return accumulator + current;
}, (initialval = 0));
console.log(myTotal);

// // Assignment
// const shoppingCart = [
//   {
//     name: "Shirt",
//     price: "1000",
//   },
//   {
//     name: "pent",
//     price: "1300",
//   },
//   {
//     name: "Trouser",
//     price: "700",
//   },
//   {
//     name: "shoes",
//     price: "1500",
//   },
// ];
// const search = shoppingCart.filter((item) => {
//   if (item.price > 1000) {
//     return item;
//   }
// });
// console.log(search);

// Assignment

// Assignment
const shopping_Cart = [
  {
    name: "Shirt",
    price: 1000,
  },
  {
    name: "pent",
    price: 1300,
  },
  {
    name: "Trouser",
    price: 700,
  },
  {
    name: "shoes",
    price: 1500,
  },
];
const total = shopping_Cart.reduce((acc, curr) => {
  console.log(`You have purchased ${curr.name} in ${curr.price} R/s `);
  return acc + curr.price;

  // if the price is in string, the we use this following method
  //   const extract = parseFloat(curr.price);
  //   return acc + extract;
}, 0);
console.log(`Your total Bill is : ${total}`);
