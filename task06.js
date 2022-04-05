function maximumNumber () {
  let max = -1000;

  for (let property in arguments) {
    console.log(arguments[property]);
    if (arguments[property] > max) {
      max = arguments[property];
    }
  }

  return `${max} is the maximum number`;
}
console.log(maximumNumber(90, 120, 50));