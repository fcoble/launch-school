let readline = require('readline-sync');

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
  console.log('Enter the loan period, 1 to 30 years:');
  let periodInYears = readline.question();

  while (invalidNumber(periodInYears) || periodInYears > 30) {
    prompt('Oops! Try again. Please enter a valid number of years.');
    periodInYears = readline.question();
  }

  return periodInYears;
}

function outputResults(loanAmount, annualPercentageRate, periodInYears,
  monthlyInterestRate,loanPeriodInMonths, monthlyPayment) {

  console.log('Loan Amount: $' + loanAmount.toFixed(2));
  console.log('APR: ' + (annualPercentageRate * 100) + '%');
  console.log('Years: ' + periodInYears);
  console.log('Monthly Interest Rate: ' + ((monthlyInterestRate * 100).toFixed(2)) + '%');
  console.log('Months:' + loanPeriodInMonths + ' ...\n');

  prompt('-------------------------------');
  prompt(`Monthly Payment: $${monthlyPayment.toFixed(2)}\n`);
}

function runAgain() {

  prompt("Would you like calculate another loan?");
  prompt("Please enter Y/y for yes, or N/n for no");

  let proceed = readline.question().toLowerCase();
  while (proceed !== 'n' && proceed !== 'y') {
    prompt('Oops!Please enter Y/y for yes, or N/n for no.');
    proceed = readline.question().toLowerCase();
  }

  proceed = (proceed !== 'n');

  return proceed;
}

console.log('Welcome to the Mortgage Calculator!');
console.log('***********************************');

while (true) {
  let loanAmount = getLoanAmount();
  let annualPercentageRate = getPercentageRate();
  let periodInYears = getPeriodInYears();

  let monthlyInterestRate = annualPercentageRate / 12;
  let loanPeriodInMonths = periodInYears * 12;

  let monthlyPayment = loanAmount * (monthlyInterestRate /
                       (1 - Math.pow((1 + monthlyInterestRate),
                         (-loanPeriodInMonths))));

  outputResults(loanAmount, annualPercentageRate, periodInYears,
    monthlyInterestRate,loanPeriodInMonths, monthlyPayment);

  let proceed = runAgain();
  if (!proceed) break;

  console.clear();
}