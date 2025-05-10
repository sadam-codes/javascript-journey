
// convert string into number
console.log(typeof +"12");
//------------------------

const names = [
  {
    first_name1: "Sadam1",
    second_name2: "Sadam2",
    second_name3: "Sadam3",
  },
  {
    first_name1: "Sadam1",
    2: "Sadam2",
    1: "Sadam3",
  },
];

console.log(names);
console.log(Object.keys(names));
console.log(Object.values(names));

const name = {
  first_name1: "Sadam1",
  2: "Sadam2",
  1: "Sadam3",
};

console.log(Object.values(name));


const myVar = 10;
console.log(myVar); 
