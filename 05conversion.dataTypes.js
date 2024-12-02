const score = "33abc";
console.log(typeof score);

const storeNumber = Number(score);
console.log(storeNumber); // NaN ( Not a Number)

//  convert String to Number

const convertNumber = 33;
const someNumber = String(convertNumber);
console.log(someNumber, typeof someNumber);

// show negative value
const value = 5;
const negativeValue = -value;
console.log(negativeValue);

//  ****** Operations *******

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 ** 3); //    2^3
console.log(2 % 2); //     2 % 2 = 0
console.log("2" + 2); // 22
console.log(2 + "2"); // 22
console.log(2 + 2 + "2"); // 42
console.log("2" + 2 + 2); // 222

console.log(true + true); // 2
console.log(+true); // 1
console.log(+false); // 0
console.log(true + false); // 1

// prefix increment and postfix increment

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

// question
/// difference b/w  prefix increment and postfix increment

let increment = 50;
increment++;
console.log(increment);

//  ****** Comparison *******
const compariosn = 10;
console.log(compariosn == 10);
console.log(compariosn > 5); // greater than
console.log(compariosn < 5); // less than
console.log(compariosn >= 5); // greater than or equal to
console.log(compariosn <= 5); // less than or equal to
console.log(compariosn != 5); // not equal to
console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);

// check and equality works different , comaprison convert null to false (0), but equality convert null to true (1)
console.log("2" === 2); // false  [also check the type ]
console.log("2" == 2); // true    [ only check values]

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // it will return the false bcz, they are two different types

const bigNumber = 12345678912345678910n;
console.log(typeof bigNumber); // bigint
 