for (let value = 0; value <= 10; value++) {
  if (value == 5) {
    console.log("5 is my lucky Number");
  }
  console.log(value);
}

// Nested for Loop

for (let value1 = 0; value1 <= 10; value1++) {
  console.log(`The outer loop value is : ------- ${value1}`);
  for (let value2 = 0; value2 < 10; value2++) {
    console.log(`The inner loop value is : ${value2}`);
  }
}
// Print the table of 1 to 10 ?

for (let number = 1; number <= 10; number++) {
  console.log(`The table of ${number} is here`);
  for (let number2 = 1; number2 <= 10; number2++) {
    console.log(number + "*" + number2 + "=" + number * number2);
  }
}
// Print the table of 2 only ?
for (let var1 = 2; var1 <= 2; var1++) {
  console.log(`The tale of 2 is here`);
  for (let var2 = 1; var2 <= 10; var2++) {
    console.log(var1 + "*" + var2 + "=" + var1 * var2);
  }
}

// print from basic syntax

let myArray = ["sadam", "Ali", "Ahmad", "Husnain"];
console.log(`The Array is :`);
for (let index = 1; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

// print in reverse

let myArray2 = ["sadam", "Ali", "Ahmad", "Husnain"];
console.log(`The Revers Array is :`);
for (let index = myArray2.length - 1; index > -1; index--) {
  const element = myArray2[index];
  console.log(element);
}

// Break and continue

// break
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`5 is detected and the loop has been ended`);
    break; // it will break the loop
  }
  console.log(`The number is : ${index}`);
}

// continue
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`5 is detected and the loop is stil continued`);
    continue; // it will skip the 5 and continue the loop
  }
  console.log(`The number is : ${index}`);
}
