const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || 
         Number(number) < 1;
}

function getPercentageRate() {

  console.log('Enter the Annual Percentage Rate in as a whole number.');
  console.log('For example, .05% = 5 and .10% = 10');
  let annualPercentageRate = readline.question();

  while (invalidNumber(annualPercentageRate) || (annualPercentageRate > 100)) {
    prompt('Oops! Try again. Please enter a valid whole number.');
    annualPercentageRate = readline.question();
  }

  return .01 * Number(annualPercentageRate);
}

function getLoanAmount() {
  console.log('Please enter the loan amount in whole US Dollars:');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt('Oops! Try again. Please enter a valid number.');
    loanAmount = readline.question();
  }
  return Number(loanAmount);
}

function getPeriodInYears() {
  console.log('Enter the loan period in number of years.');
  let periodInYears = readline.question();

  while (invalidNumber(periodInYears) || periodInYears > 30) {
    prompt('Oops! Try again. Please enter a valid whole number.');
    periodInYears = readline.question();
  }

  return periodInYears;
}

console.log('Welcome to the Mortgage Calculator!');
console.log('***********************************');

while (true) {


  let loanAmount = getLoanAmount();
  let annualPercentageRate = getPercentageRate();
  let periodInYears = getPeriodInYears();

  const MONTHLY_INTEREST_RATE = annualPercentageRate / 12;
  const LOAN_PERIOD_IN_MONTHS = periodInYears * 12;

  let monthlyPayment = loanAmount * (MONTHLY_INTEREST_RATE /
                       (1 - Math.pow((1 + MONTHLY_INTEREST_RATE),
                         (-LOAN_PERIOD_IN_MONTHS))));

  console.log('Loan Amount: $' + loanAmount.toFixed(2));
  console.log('APR: ' + (annualPercentageRate * 100) + '%');
  console.log('Years: ' + periodInYears);
  console.log('Monthly Interest Rate: ' + ((MONTHLY_INTEREST_RATE * 100).toFixed(2)) + '%');
  console.log('Months:' + LOAN_PERIOD_IN_MONTHS + ' ...\n');

  prompt('-------------------------------');
  prompt(`Monthly Payment: $${monthlyPayment.toFixed(2)}`);

  prompt("Would you like calculate another loan?");

  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}