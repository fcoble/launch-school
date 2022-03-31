
theValue = 3;

console.log(isNotNumber(theValue));

function isNotNumber(inputValue) {

    //NaN is the only JS value that is not equal to itself
    //I must admit, I stumbled upon the answer reviewing the MDN documentation for NaN,
    //it was listed as an example, however I knew that it was the answer immediately when I saw the code,
    //so I give myself a little bit of credit
    return inputValue !== inputValue;
}