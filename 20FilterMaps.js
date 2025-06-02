const coding = ["javaScript", "Java", "C++", "Python"];
const store = coding.forEach((item) => {
  console.log(item);
});
console.log(store); // give undefined , bcx foreach loop doest return any value

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const storeNums = numbers.filter((num) => num > 5);
console.log(storeNums);

// OR:
const number = [3, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 , 12, 13 , 14, 15];
const storeNum = number.filter((num) => {
  return num > 5;
});
console.log(storeNum);

const newArray = [];
newArray.forEach((num) => {
  if (num > 4) {
    newArray.push(num);
  }
});
console.log(newArray);

// const books = [
//   { title: "BookOne", auther: "sadam1", publish: "2020" },
//   { title: "Booktwo", auther: "sadam2", publish: "2021" },
//   { title: "Bookthree", auther: "sadam3", publish: "2022" },
//   { title: "Bookfour", auther: "sadam4", publish: "2023" },
//   { title: "Bookfive", auther: "sadam5", publish: "2024" },
// ];
// const userBooks = books.filter((bk) => bk.publish === "2024");
// console.log(userBooks);

const books = [
  { title: "BookOne", auther: "sadam1", publish: "2020" },
  { title: "Booktwo", auther: "sadam2", publish: "2021" },
  { title: "Bookthree", auther: "sadam3", publish: "2022" },
  { title: "Bookfour", auther: "sadam4", publish: "2023" },
  { title: "Bookfive", auther: "sadam5", publish: "2024" },
];
const userBooks = books.filter((bk) => {
  if (bk.publish >= "2020" && bk.title === "Bookthree") {
    return bk;
  }
});
console.log(userBooks);

//Map Method
const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const store2 = myNumber.map((num3) => {
  return num3 + 10;
});

console.log(store2);

// same but with foreach method
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const store3 = myNumbers.forEach((item) => {
  console.log(item + 10);
});
console.log(store3);

//chaining Method with map and filter

const myNumber4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const store4 = myNumber4
  .map((num4) => {
    return num4 * 10;
  })
  .map((num4) => {
    return num4 + 1;
  })
  .filter((num4) => {
    return num4 > 20;
  });
console.log(store4);
