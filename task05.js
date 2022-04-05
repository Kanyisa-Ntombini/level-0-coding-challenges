const areaOfATriangle = (a, b, c) => {
  /*
  a, b and c stand for each side of the triange. s stands for the semiperimeter
  */

  let s = (1/2)*(a + b + c);
  let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

  return `The triangle with sides ${a}, ${b} and ${c} has an area of ${area} square units.`;
}
console.log(areaOfATriangle(3,4,5));