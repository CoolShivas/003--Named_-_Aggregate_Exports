// const add = require("./math");
// const sub = require("./math");

// console.log(add(5,3)); // 8
// console.log(sub(5,3)); // 2

// // If we move to terminal for the result. We are expecting the result should be for the first console i.e, addition be 8 and second console i.e, subtraction be 2.

// // But, we are getting the output on the node terminal be 2 and 2. Because, it is considering the final console or the last console only i.e, subtraction not the addition.


// // To over come from such type of thing we have to use the object method and then destructing method.


const {add , sub} = require("./math");

console.log(add(5,3)); // 8
console.log(sub(5,3)); // 2

//////***************************************************************************************** */
