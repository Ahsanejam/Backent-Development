// const sum = (a, b) => a+b;
// const mul = (a, b) => a*b;
// const g = 9.8;
// const PI = 3.14;

// module.exports -> requiring files --It is a special object
// It export some values in this example it export 123

// module.exports = 123;

// This is one technique 
// let obj = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI
// };

// module.exports = obj;



// This is another types of exports an object
// module.exports = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI
// };

// And This is another technique to module.exports 
// module.exports.sum = (a, b) => a+b;
// module.exports.mul = (a, b) => a*b;
// module.exports.g = 9.8;
// module.exports.PI = 3.14;

// And Their is another short form of module.exports
// exports.sum = (a, b) => a+b;
// exports.mul = (a, b) => a*b;
// exports.g = 9.8;
// exports.PI = 3.14;

// but this is not widely used for example
// if i write this 
// module.exports = 5;
// And 
// exports = 5;
// both are different because js recognise exports is js normal variable so if exprts = 5 is show some error 
// So that we cannot widely used it
// it only work when you treat exports is an object and inside the object we can add function and properties 
// like this 
// exports.sum = (a, b) => a+b;
// Not this
// exports = 6; 




// |------------------------------------------------------------------------------------------|
// |export -> It is an actual keyword it cannot export on object form it exports individually |                                   
// |If you want to use import you have to use export which code you want to be                |
// |------------------------------------------------------------------------------------------|               
export const sum = (a, b) => a+b;
export const mul = (a, b) => a*b;
export const g = 9.8;
export const PI = 3.14;

