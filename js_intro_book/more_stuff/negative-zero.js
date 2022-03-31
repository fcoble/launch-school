console.log(isNegativeZero(-0));

function isNegativeZero(inputValue) {
    return (inputValue === 0 && (1/inputValue) === -Infinity);
}