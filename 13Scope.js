// let a = 10;
// const b = 20;
// var c = 30;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
console.log(c);

// Q=> what is closure in javascript

// Nested fubctions
function one() {
  const name = "sadam";
  function two() {
    const username = "Ahmad";
    console.log(name);
    console.log(username);
  }

  two();
}
one();

// +++ Interesting concept
// console.log(addone(3)); can access before initialization
function addone(num) {
  return num + 1;
}
console.log(addone(3));
//..........................
// console.log(addtwo(5)); But this can't access before initialization
const addtwo = function (num) {
  return num + 2;
};
console.log(addtwo(5));


