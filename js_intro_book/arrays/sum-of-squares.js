let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

function sumOfSquares(inputArray) {
    return inputArray.reduce((accumulator, element) => accumulator + (element * element), 0);
}