

// Currying
//const multiply = (a,b) => a * b;
//Compose
//const compose = (f,g) => (a) => f(g(a));

//Advanced array
 
const array = [1,2,10,16];
// const double = []
// const newArray = array.forEach((num) => {
//    double.push(num * 2);
// })
// console.log(double);

// map,filter,reduce: Array functions
// Map skips the step where we have
// to push the elements into the array.
// const mapArray = array.map((num) => {
//     return num * 2
// });

// console.log(mapArray);

// Difference: 
// forEach ONLY ITERATES
// map MUST RETURN AN ELEMENT, ITERATES AND RETURNS INTO A NEW ARRAY.

// Filter Array

// const filterArray = array.filter(num => {
//     return num > 5
// })
// console.log(filterArray);

// Reduce
// We can do filtering and mapping with Reduce. most powerful
// Accumulator is something which can store the info
// during a function. BASICALLY i++
const reduceArray = array.reduce((accumulator, num) => {
        return accumulator + num
}, 0);
console.log(reduceArray);