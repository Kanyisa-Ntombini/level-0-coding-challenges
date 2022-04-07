const areaOfATriangle = (sideA, sideB, sideC) => {
  const semiPerimeter = (1/2)*(sideA + sideB + sideC);
  const area = Math.sqrt(semiPerimeter*(semiPerimeter-sideA)*(semiPerimeter-sideB)*(semiPerimeter-sideC));

  return area;
}

//Tests
//console.log(areaOfATriangle(3,4,5));
//console.log(areaOfATriangle(9,12,15));