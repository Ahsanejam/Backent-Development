const mongoose = require('mongoose')

main()
.then((res) => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// This is basically a shortcut writing but this is valid 
// const bookSchema = new mongoose.Schema({
//     title: String,
//     author: String,
//     price: Number,
// });

// And this is true syntax but both are same and in this syntax we can add constraints in previous 
// syntax we can't 
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low for Amazon selling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre: [String],
});


// In mongodb a required constraints are equal to SQL not null
// required means you have to enter key's value in this case required: true in title 
// so you have to enter value in title otherwise it shows error 



const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "Marvel Comics v2",
//     price: 600,
//     genre: ["comics", "superheroes", "fiction"],
// });

// book1
//     .save()
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     });




// We can pass any value in javascript object but internally when we sava data in mongodb 
// so whenever the value we send it converts to a number so when we use type constrants it means
// if i want i also send some string value but that string value when they store in db so that they 
// convert/pass so that it is called typeconversion or casting or parsing 
// In that we pass "299" when it stores in db it convert to 299
// but when you send like "abc" it shows error because when they try to store in db it converts
// to abc and this is not number and the schema i defice for price is number so it throw error


// This is basically schema for update the rules we define in schema is only for intertion time 
// not for updation time so that we can update price: -500 
// if we want that schema rules are also work in update so that it has special option to turn it true

// [options.runValidators] «boolean» if true, runs update validators on this command.
//  Update validators validate the update operation against the model's schema

Book.findByIdAndUpdate("6a5ad7bae1860a5566e19161", { price: -100 }, {runValidators: true})
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err.errors.price.properties.message);
    });
