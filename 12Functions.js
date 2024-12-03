// define functions // differnece b/w parameters and argument
function myName() {
  console.log("SADAM");
}
myName();
myName();
myName();

// check if the argument is number and their data type is equal
function addTwoNumbers(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
    console.log("Hello"); // this will not be executed bcz after return keyword , no statement will be executed
  } else {
    console.error("Error: Both arguments must be numbers");
  }
}

let result = addTwoNumbers(10, 20);
console.log("Result is:", result);

// check if the user login or not

function userLoggedIN(username) {
  if (typeof username === "string" && username.length > 0) {
    return `welcome ${username}`;
  } else if (!username) {
    return `Undefined : Please Enter username`;
  }
}
const storedvalue = userLoggedIN("sadam");
const storedvalue2 = userLoggedIN();
console.log(storedvalue);
console.log(storedvalue2);

// function userLogged(username2 = "Default value is Sadam") {
//   if (typeof username2 === "string" && username2.length > 0) {
//     return `${username2} looged in`;
//   } else if (!username2) {
//     return `Undefined : Please Enter username`;
//   }
// }
// const storedvalue1 = userLogged("sadam");
// const storedvalue3 = userLogged();
// console.log(storedvalue1);
// console.log(storedvalue3);

// very inportant in E-Commerce websites

function calculateCartsPrice(...quantity1) {
  const sum = quantity1.reduce((acc, current) => acc + current, 0);
  return sum;
}
console.log(calculateCartsPrice(10, 20, 30, 40, 50, 60)); // Output: 210

// function with object

function add(anyuser) {
  return `The customer named by "${anyuser.name}" bought the ${anyuser.product} at ${anyuser.price} Price`;
}
let store = add({
  name: "sadam",
  product: "Laptop",
  price: 5000,
});
console.log(store);

// get value from array using function

const myArray = [100, 200, 300, 400, 500];
function findvalue(getArray) {
  return getArray[1];
}
console.log(findvalue(myArray));
