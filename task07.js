const celsiusToFahrenheit = temperature => {
  let fahrenheitTemp = temperature * (9/5) + 32
  return `${temperature} degrees celsius is equal to ${fahrenheitTemp.toFixed(2)} fahrenheit`;
}

const fahrenheitToCelsius = temperature => {
  let celsiusTemp = (temperature - 32) * (5/9);
  return `${temperature} degrees fahrenheit is equal to ${celsiusTemp.toFixed(2)} degrees`;
}

console.log(celsiusToFahrenheit(17));
console.log(fahrenheitToCelsius(17));