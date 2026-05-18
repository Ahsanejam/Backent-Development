// OOPS (object oriented programming)
// The basic work of oops is to structure our code



// const stu1 = {
//     name: "adam",
//     age: 25,
//     marks: 95,
//     getMarks: function() {
//         return this.marks;
//     },
// };

// const stu2 = {
//     name: "eve",
//     age: 25,
//     marks: 99,
//     getMarks: function() {
//         return this.marks;
//     },
// };

// const stu3 = {
//     name: "casey",
//     age: 23,
//     marks: 85,
//     getMarks: function() {
//         return this.marks;
//     },
// };

// This is not correct method for build object



// Object prototype 
// Ye kya hota hai iska matlab ye hai ki [1, 2, 3];
// (3) [1, 2, 3]0: 11: 22: 3length: 3[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// let arr = [1, 2, 3];
// undefined
// arr.pop();
// 3
// arr.push(3);
// 3
// arr
// (3) [1, 2, 3]0: 11: 22: 3length: 3[[Prototype]]: Array(0)

// Yaha jo prototype hai uske andarsare in build function hote hai to arr ko nhi pata hota ki pop kya 
// hota hai push kya hota hai but prototype ko pata hota hai to wo waha se array inherit kar leta hai
// javascript me hair array bhi ek object hota hai 
// Jitni object js andar exist karti hai un sabke pass ek built-in property hoti hai jise ham kehte hai 
// prototype



// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// arr1.sayHello = () => {
//     console.log("hello!, i am arr");
// };

// arr2.sayHello = () => {
//     console.log("hello!, i am arr");
// }; 

// array protype ka matlab hota hai ki ham ek function banaye aur use ek single array me save kar de 
// but ham chahte hai ye function sare array jo bhi array ham create kare un sab me ho isi ko
// array prototype kehte hai

// isi tarah object prototype bho hota hai ki ek object me create kare aur sab me access kare paye


// arr1.sayHello === arr2.sayHello 
// false
// Isme dono array me slag alag sayHello function define hai 

// "abc".toUpperCase === "xyz".toUpperCase
// true
// but isme dono string toUpperCase matlab ek hi toUpperCase ko point out / refer kar rahe hai




// Factory Functions
// A function that creates objects 
// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }

// let p1 = PersonMaker("adam", 25);
// let p2 = PersonMaker("eve", 25);

// Ye bhi efficient tarika nhi hai jab ham factory function se koi object ko banate hai p1 ko banaya
// p2 ko banaya to har object ke pass apni khud ki copy jati hai jo function talk() har object ke
// liye common hai uski bhi copy har object khud ke liye create karega iike this
// even though hamne factory function me ek hi bar likha hai  par p1 me uski alga se ek copy bani hai
// and p2 me bhi uski alag se ek copy bani hai ab agar ham memory me 1000 logo ka data store karaenge
// to 1000 logo ki copy banegi which is insufficient for their memory


// p1.talk === p2.talk
// false





// Constructors - it doesn't return anything & starts with capital letter


// ab agar ham koi function Person ke andar banate hai to p1 and p2 ke andar alag se copy nhi banegi 
// balki wo same copy ko hi refer karenge

// jaise first object me this.name means p1.name and this.age means p1.age
// and second object me this.name means p2.name and this.age means p2.age

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// Person.prototype.talk = function() {
//     console.log(`Hi, my name is ${this.name}`);
// }

// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 25);



// p1.talk === p2.talk
// true




// Classes -> classes are a template for creating objects

// The constructor method is a special method of a class for creating and initializing an object
// instance of that class.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 25);



// Inheritance 
// Inheritance is a mechanism that allows us to create new classes on the basic of already existing classes

// class Person {
//     constructor(name, age) {
//         console.log("person class constructor");
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, I am ${this.name}`);
//     }
// }

// class Student extends Person{ 
//     constructor(name, age, marks) {
//         console.log("student class constructor");
//         super(name, age); // parent class constructor is being called
//         this.marks = marks;
//     }

// }

// // let stu1 = new Student("adam", 25, 95);


// class Teacher extends Person{ 
//     constructor(name, age, subject) {
//         super(name, age); // parent class constructor is being called
//         this.subject = subject;
//     }

// }



class Mammal { // base class / parent class
    constructor(name) {
        this.name = name;
        this.type = "worm-blodded";
    }

    eat() {
        console.log("I am eating");
    }
}

class Dog extends Mammal { // child
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("woof..");
    }

    eat() { // This override old eat 
        console.log("dog is eating");
    }
}



class Cat extends Mammal { //child
    constructor(name) {
        super(name);
    }

    meow() {
        console.log("meow..");
    }
}

// ham dusre class me constructor(name) ki jagah khuc bhi name de sakte hai like
// constructor(lets) / constructor(gg)
