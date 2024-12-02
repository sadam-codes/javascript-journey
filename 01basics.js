{
  // data types
  //1) primitive data types {number, Null,string,boolean,undefined}
  //2) object / user define data types

  let a, b, c;
  a = 5;
  b = 4;
  c = a + b;
  console.log("The answer is :" + c);

  let m = 1;
  let h = 1.33;
  let f = "sadam";
  console.log(typeof m, typeof f, typeof h);

  //2)  object / user define data types

  const sadam = {
    name: "ali",
    class: "BSCS",
    uni: "MNUSAM",
  };

  const sadamtwo = {
    name: "sadam",
    class: "BSCS",
    uni: "MNUSAM",
  };

  console.log(sadam);

  // / for checking the data type

  let x = "Sadam";
  let y = 22;
  let z = 3.25;
  const p = true;
  let q = undefined;
  let j = "Sadam";
  let r = null;
  console.log(x, y, x, p, q, r);
  console.log(
    typeof x,
    typeof y,
    typeof x,
    typeof p,
    typeof q,
    typeof r,
    typeof j
  );

  // interview question
  //  1) why type of null is object
  //  2) agar hm typeof null likhen ge to console me kya aye ga ?? null / object ??
}
