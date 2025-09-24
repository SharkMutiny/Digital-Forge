// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragon = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragon.includes('John');
// returns false



// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.filter(name => name.includes('John'));
// returns ['Johnathan']



// #3) Create a function that calculates the power of 100 of a number entered as a parameter
const power100 = (num) => num**100;
// console.log(power100(2)); returns 12676506002282294e+30

// #4) Using your function from #3, put in the parameter 10000. What is the result?
// Research for yourself why you get this result
// console.log(power100(10000)); returns Infinity because it's too large a number for JavaScript to handle

