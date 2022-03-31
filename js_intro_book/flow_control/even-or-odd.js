evenOrOdd(3.2);

function evenOrOdd(integer) {
    if (integer % 1 !== 0) {
        console.log('An error has occured...\n');
        console.log(`Invalid number type`);
        return;
    }
    console.log(integer + ` is an ${integer % 2 === 1 ? 'odd' : 'even'} number`);
}

