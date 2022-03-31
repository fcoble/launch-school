let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(inputArray) {
    return inputArray.map(num => num.length).filter(num => num % 2 !== 0);
}