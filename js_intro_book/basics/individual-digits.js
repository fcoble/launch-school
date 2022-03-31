const THE_NUMBER = 4936;

let thousands = THE_NUMBER;
let hundreds = THE_NUMBER % 1000;
let tens = THE_NUMBER % 100;
let ones = THE_NUMBER % 10;

console.log(`Thousands place is ${(thousands - hundreds) / 1000}`);
console.log(`Hundreds place is ${(hundreds - tens) / 100}`);
console.log(`Tens place is ${(tens - ones) / 10}`);
console.log(`Ones place is ${ones}`);