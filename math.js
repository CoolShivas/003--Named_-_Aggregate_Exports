// const add = (a, b) => {
//     return a + b;
// };

// const sub = (a, b) => {
//     return a - b;
// };


// // module.exports = add;
// // module.exports = sub;

// // // module.exports is a single object or value
// // // When you reassign module.exports(e.g., module.exports = add), it completely replaces whatever was the previously assigned.

// // If you reassign it again (module.exports = sub), the previous value (add) is replace with sub.

// // Avoid mixing module.exports and exports.property incorrectly. If you reassign module.exports, it will override any previous exports.property assignments.



// ////////***************************************************************************************** */



// // // // Use consistent syntax for clarity:
// // // // Assign properties individually with module.exports.property.
// // // // OR
// // // // Assign everything at once with module.exports = {...}

// module.exports.add = add;
// module.exports.sub = sub;



// ////////***************************************************************************************** */



const addition = (a, b) => {
    return (a + b);
};

const subtraction = (a, b) => {
    return (a - b);
};

const multiply = (a, b) => {
    return (a * b);
};

const division = (a, b) => {
    return (a / b);
};

const PI = 3.214;


module.exports = {addition, subtraction, multiply, division, PI};