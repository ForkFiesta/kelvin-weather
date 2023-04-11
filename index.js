
// today's temperature in kelvin
const kelvin = 293;

// convert kelvin to celsius
let celsius = kelvin - 273;

// convert celsius to fahrenheit
let fahrenheit = celsius * (9/5) +32;

// rounds fahrenheit to lower integer
fahrenheit = Math.floor(fahrenheit);

// logs the string to the console using string interpolation

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
