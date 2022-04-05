const convertNumberToTime = number => {
  let hours = Math.floor(number / 60);
  let minutes = number % 60;
  
  return `${number} is ${hours} hours and ${minutes} minutes`
}

console.log(convertNumberToTime(95));