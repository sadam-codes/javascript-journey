
// convert string into number
console.log(typeof +"12");
//------------------------

const names = [
  {
    first_name1: "sadam1",
    second_name2: "sadam2",
    second_name3: "sadam3",
  },
  {
    first_name1: "sadam1",
    2: "sadam2",
    1: "sadam3",
  },
];

console.log(names);
console.log(Object.keys(names));
console.log(Object.values(names));

const name = {
  first_name1: "sadam1",
  2: "sadam2",
  1: "sadam3",
};

console.log(Object.values(name));


const myVar = 5;
console.log(myVar); 
