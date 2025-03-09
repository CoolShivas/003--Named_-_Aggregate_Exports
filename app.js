// const add = require("./math");
// const sub = require("./math");

// console.log(add(5,3)); // 8
// console.log(sub(5,3)); // 2

// // If we move to terminal for the result. We are expecting the result should be for the first console i.e, addition be 8 and second console i.e, subtraction be 2.

// // But, we are getting the output on the node terminal be 2 and 2. Because, it is considering the final console or the last console only i.e, subtraction not the addition.


//////***************************************************************************************** */


// // To over come from such type of thing we have to use the object method and then destructing method.


// const {add , sub} = require("./math");

// console.log(add(5,3)); // 8
// console.log(sub(5,3)); // 2


//////***************************************************************************************** */


// // Here, we know the files data coming from math.js that's why we require and destructure all by there name such as add, sub and all;
// // If we don't know the names such as add, sub and all. Then have a look on the last one;

const {addition , subtraction, multiply, division , PI} = require("./math");

console.log(addition(5,3));     // 8
console.log(subtraction(5,3));  // 2
console.log(multiply(5,3));     // 15
console.log(division(5,3));     // 1.6666666666666667
console.log(PI);                // 3.214