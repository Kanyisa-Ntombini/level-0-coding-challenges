function maximumNumber () {
  let max = -1000;

  for (let property in arguments) {
    if (arguments[property] > max) {
      max = arguments[property];
    }
  }

  return `${max} is the maximum number`;
}

//Tests
console.log(maximumNumber(3, 8, 1, 5));
console.log(maximumNumber(3, 2));
console.log(maximumNumber(8));
console.log(maximumNumber(15, 7, 10, 41, 9, 2, 3));