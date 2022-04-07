const convertNumberToTime = number => {
  const hours = Math.floor(number / 60);
  const minutes = number % 60;

  if (hours === 1 && minutes === 1) {
    return `${hours} hour, ${minutes} minute`;
  } else if (hours === 1 && minutes !== 1) {
    return `${hours} hour, ${minutes} minutes`;
  } else if (hours !== 1 && minutes === 1) {
    return `${hours} hours, ${minutes} minute`;
  } else if (hours !== 1 && minutes !== 1) {
    return `${hours} hours, ${minutes} minutes`;
  }
  
  
}

//Tests
/*console.log(convertNumberToTime(61));
console.log(convertNumberToTime(93));
console.log(convertNumberToTime(121));
console.log(convertNumberToTime(365));
console.log(convertNumberToTime(0));
console.log(convertNumberToTime(55));
console.log(convertNumberToTime(120));*/