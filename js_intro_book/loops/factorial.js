console.log(computeFactorial(6));

function computeFactorial(n) {
    if (n < 2) return 1;

    return n * computeFactorial(n - 1);
}