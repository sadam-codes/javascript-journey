let value = 0;
while (value <= 10) {
  console.log(`The value is : ${value}`);
  value = value + 2;
}

let myArray = ["sadam", "Ali", "Ahmad"];
let arr = 0;
while (arr < myArray.length) {
  console.log(`The value is ${myArray[arr]}`);
  arr = arr + 1;
}

// do-while loop

let score = 111;
do {
  console.log(`The score is : ${score}`);
  score++;
  if (score == 50) {
    console.log(`Fakhar made the 50 Runs`);
    break;
  }
} while (score <= 100);
