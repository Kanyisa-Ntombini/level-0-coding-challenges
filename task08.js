const convertNumberToTime = number => {
  let hours = Math.floor(number / 60);
  let minutes = number % 60;

  if (hours === 1 && minutes === 1) {
    return `${number} is ${hours} hour and ${minutes} minute`;
  } else if (hours === 1 && minutes !== 1) {
    return `${number} is ${hours} hour and ${minutes} minutes`;
  } else if (hours !== 1 && minutes === 1) {
    return `${number} is ${hours} hours and ${minutes} minute`;
  } else if (hours !== 1 && minutes !== 1) {
    return `${number} is ${hours} hours and ${minutes} minutes`;
  }
  
  
}

//Tests
console.log(convertNumberToTime(61));
console.log(convertNumberToTime(93));
console.log(convertNumberToTime(121));
console.log(convertNumberToTime(365));
console.log(convertNumberToTime(0));
console.log(convertNumberToTime(55));
console.log(convertNumberToTime(120));