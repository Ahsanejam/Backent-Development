const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

let fruits = [apple, banana, orange];

module.exports = fruits;

// If you want to export all values of you directory then it you make file index.js always give index.js 
// same name then export it 