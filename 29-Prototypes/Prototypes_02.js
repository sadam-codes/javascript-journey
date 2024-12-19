const myName = "   sadam66        ";
console.log(myName.trim().length);

// but we make the one method and use it in everwhere
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
};
"Ali".trueLength();
"sadam".trueLength();

let my_heros = ["sadam", "Ali"];
let hero_power = {
  sadam: "MERN developer",
  Ali: "Python developer",
  getsadamPower: function () {
    console.log(`Sadam power is ${this.sadam}`);
  },
};
Object.prototype.hitesh = function () {
  console.log(`Hitesh is present in all objects`);
};
Array.prototype.hitesh2 = function () {
  console.log(`Hitesh is present in all Arrays`);
};
String.prototype.hitesh3 = function () {
  console.log(`Hitesh is present in all Strings`);
};
myName.hitesh3();
my_heros.hitesh2();
hero_power.hitesh();

// inheritance

const user = {
  username: "sadam",
  email: "sadammuneer390@gmail.com",
};

const teacher = {
  makeVideo: true,
};

const teachingAssistance = {
  isAvailable: false,
};

const TA_Support = {
  makeAssignment: "JS Assignment",
  fulltime: true,
  __proto__: teachingAssistance,
};

Object.setPrototypeOf(teachingAssistance, teacher);

console.log("User:", user);
console.log("Teacher:", teacher);
console.log("Teaching Assistance:", teachingAssistance);
console.log("TA Support:", TA_Support);
