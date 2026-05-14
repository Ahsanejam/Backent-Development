// let n = 5;

// for(let i = 0; i < n; i++) {
//     console.log("hello,", i);
// }


// console.log("bye!");


// --------------------------Process--------------------------------------------------------------------|
// Process: This object provides information about, and control over, the current Node.js process       |
//                                                                                                      |
// Process.argv: returns an array containing the command-line arguments passed when the Node.js process |
// was launched                                                                                         |
// -----------------------------------------------------------------------------------------------------|


// If you gave some argument in process.argv here is the output-------------------|
// node script.js hello bye Ahsan apnacollege 52                                  |
// [                                                                              |
//   'C:\\Program Files\\nodejs\\node.exe',                                       |
//   'C:\\Users\\Administrator\\Desktop\\Delta Web development\\Day 27\\script.js',|
//   'hello',                                                                      |
//   'bye',                                                                        |
//   'Ahsan',                                                                      |    
//   'apnacollege',                                                                |
//   '52'                                                                          |
// ]                                                                               |
//                                                                                 |
// --------------------------------------------------------------------------------|


// let args = process.argv;

// for(let i = 2; i < args.length; i++) {

//     // console.log("hello to ", args[i]);
//     console.log(`hello to ${args[i]}`);
// }

// console.log(process.argv);

// His code output 
// ------------------------------------------------------|
// $ node script.js Ahsan sufiyan rahul Anand Aman Deepak
// hello to  Ahsan
// hello to  sufiyan
// hello to  rahul
// hello to  Anand
// hello to  Aman
// hello to  Deepak
// -------------------------------------------------------|

// ------------------------------------------------------|
// module.exports ->requiring files
// require() a build-in function to include external modules that exist in separate files.

//  module.exports a special object
// require is use to use the export value in another file 


// const someValue = require("./math");
// console.log(someValue);

// output of this code 
// |------------------------------------------------------------------------------|
// |PS C:\Users\Administrator\Desktop\Delta Web development\Day 27> node script.js|
// |123                                                                           |
// |------------------------------------------------------------------------------|


// If nothing is exporting but we use require() function then the output is 
// PS C:\Users\Administrator\Desktop\Delta Web development\Day 27> node script.js
// {}



// ------------------------------------------------------------------------------
// const math = require("./math");
// console.log(math);
// This code output 
// PS C:\Users\Administrator\Desktop\Delta Web development\Day 27> node script.js
// { sum: [Function: sum], mul: [Function: mul], g: 9.8, PI: 3.14 }


// console.log(math.sum(2, 2));
// This code output node script.js
// 4

// console.log(math.PI); //Output 3.14

// ----------------------------------------------------------------------------------

// const info = require("./Fruits") // ../Fruits is for if your Fruits folder outside you Day 27 directory
// // // and ./Fruit is for if your Fruits folder inside your Day 27 directory
// console.log(info);
// console.log(info[0].name);



// output of this code
// [
//     { name: 'apple', color: 'red' },    
//     { name: 'banana', color: 'yellow' },
//     { name: 'orange', color: 'orange' } 
//  ]




// NPM(Node Package Manager) |
// --------------------------|
// npm is the standard package manager for Node.js
// It is the library of packages
// It is also command line tool




// |-------------------------------------------------------------------------------------|
// |Import                                                                               |
// |we can only use one at a time requir or import we cannot use both at the same project|
// |import give you choice what you want to import on this file in require all things is | 
// |imported in the file                                                                 |
// |-------------------------------------------------------------------------------------|
// If you want to use import statement then make your own package npm init command and then add
// "type": "module" this on you package.json file then it work perfectly

// for example i have a file called math.js and in math.js there are 100 of functions but i want only
// one funtion i want to use but i you use require to access funtion you can access all 100 of them
// because require can't give you choice but in import you can only access what you want you can go 
// on that function add export keyword and then you can access them only one function on other file
// import give you choice what you want to import

// require is synchronous import can be asynchronous

import {sum, PI} from "./math.js";
import { generate } from "random-words";


console.log(sum(1, 2));
// // console.log(PI);
console.log(generate());
