let numArray = [
	  1, 3, 6, 11,
	  4, 2, 4, 9,
	  17, 16, 0,
];


let descArray = numArray.map(num => (num % 2 === 0) ? 'even' : 'odd');

console.log(descArray);

