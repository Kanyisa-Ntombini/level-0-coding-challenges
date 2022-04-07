const celsiusToFahrenheit = temperature => {
  const fahrenheitTemp = temperature * (9/5) + 32
  return fahrenheitTemp;
}

const fahrenheitToCelsius = temperature => {
  const celsiusTemp = (temperature - 32) * (5/9);
  return celsiusTemp;
}

//Tests
/*console.log(celsiusToFahrenheit(17));
console.log(fahrenheitToCelsius(17));*/