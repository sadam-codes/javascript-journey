// const useerOne = {
//   username: "sadam",
//   f_name: "Muneer Abbas",
//   dept: "CS",
//   regNum: 1972,
// };
// const useerTwo = {
//   username: "Ahmad",
//   f_name: "Abbas",
//   dept: "CS",
//   regNum: 1973,
// };
// const useerThree = {
//   username: "Ali",
//   f_name: "Junaid",
//   dept: "CS",
//   regNum: 1974,
// };

// console.log(useerOne);
// console.log(useerTwo);
// console.log(useerThree);

// so , instead of using that , we use the following methods

function users(username, f_name, dept, regNum) {
  this.username = username;
  this.f_name = f_name;
  this.dept = dept;
  this.regNum = regNum;
  return this;
}
users.prototype.welcome = function () {
  console.log(`welcome to our site ${this.username}`);
};
const userOne = new users("sadam", "Muneer Abbas", "CS", 1972);
const usertwo = new users("Ali", "Hassan Junaid", "IT", 1932);
userOne.welcome();
console.log(userOne);
// console.log(userOne instanceof users);
// console.log(userOne.constructor);
usertwo.welcome();
console.log(usertwo);
// console.log(usertwo.constructor);
