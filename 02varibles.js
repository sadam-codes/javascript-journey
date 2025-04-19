// let , var and const

const specificID = 2;
let accoutEmail = "sadammuneer390@gmail.com";
var accoutPassword = "123445F";
accountCity = "Lahore";

// specificID = 3;
accoutEmail = "sadam@gmail.com";
accoutPassword = "1122";
accountCity = "Multan";

console.log(specificID, accoutEmail, accoutPassword, accountCity); // show all the data in simple form
console.table([specificID, accoutEmail, accoutPassword, accountCity]); // show all the data in table form

const email = "sadam@gmail.com";
const password = 233344;
const city = "Multan";
console.table([email, password, city]);

// Datatypes

// example of var
function exampleVar() {
  if (true) {
    var x = 10;
    console.log(x); // Accessible here
  }
  console.log(x); // Accessible here
}
exampleVar();

// Example of let
// function exampleLet() {
//   if (true) {
//     let y = 20;
//     console.log(y); // Accessible here
//   }
//   // Error: y is not defined here
//   console.log(y);
// }
// exampleLet();
