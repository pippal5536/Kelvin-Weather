/ Declared a constant variable named 'kelvin
const kelvin = 0;
// Declared a let variable named celsius that converts from kelvin to calsius 
let celsius = kelvin - 273;
// declared a let variable called farenheit
// 'floor()' method of the built in object 'Math' to round-down and return the largest integer less than or equal to the given number
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);


console.log(`The temperature is ${fahrenheit} degrees farenheit.`)
