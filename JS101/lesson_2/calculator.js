// Ask the user for the first number..
// Ask the user for the second number.
// Ask the user for operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json')

function messages(message, lang='en') {
  return MESSAGES[lang][message];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  /* use trimStart to trim the leading whitespace, if nothing is left,
   * we ensure that we don't return a 0 from the Number() check on an empty
   * string */
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

while(true) {
  prompt(messages('welcome','es'));

  prompt(messages('firstNumber','es'));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages('invalidNumber','es'));
    number1 = readline.question();
  }

  prompt(messages('secondNumber','es'));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages('invalidNumber','es'));
    number2 = readline.question();
  }

  prompt(messages('operation','es'));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('errorOperation','es'));
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`${messages('result','es')} ${output}`);

  prompt(messages('again','es'));
  let continueCalculating = readline.question();

  if (continueCalculating[0].toLowerCase() !== 'y') break;

} 