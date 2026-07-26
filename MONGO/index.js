const mongoose = require('mongoose')

// It is a method which is use to connect Mongodb Database
// mongodb://127.0.0.1:27017/test this is the database like which we want to connect
// mongoose.connect('mongodb://127.0.0.1:27017/test');


main()
.then((res) => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// Schema defines the shape of the documents within that collection
// In MongoDb schema define for any collection when you define schema then all the document follow that 
// Schema or structur how to put data on that document 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});


// Models -> Model in mongoose is a class with which we construct documents.
// mongoose models are javascript classes which are representation of how our every single 
// documents in our  collections looks like 

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);


// INSERT 
// Inserting One

// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 48,
// });

// const user2 = new User({
//     name: "Eve",
//     email: "eve@yahoo.in",
//     age: 48,
// });

// This is also a async function which return a promise 
// And this is use to sava data to users collections 

// user1.save(); 
// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });





// Inserting Multiple -> this is use to insert multiple document at once
// This function return promise so that we use then and catch in this function

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "Peter", email: "peter@gmail.com", age: 30},
//     {name: "Bruce", email: "bruce@gmail.com", age: 47}
// ]).then((res) => {
//     console.log(res);
// });



// FIND 
// basically find method cannot return promise but it return query object 
// Query object is not promist but still we can use .then() and .catch() method

// User.find({ age: { $gt: 47 } })
//     .then((res) => {
//         // This result return in array form so that we use indexes to print the value of object 
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });



// FindOne method -> It only returns a single resule
// User.findOne({ _id: '6a5951d57fb914b16e2fa5de' })
//     .then((res) => {
//         // This result doesnot comes with array so that it reutrns the real object/result
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// In companies or maximum time we use id to search any user from database
// You know id is use so frequently such that they have special method in mongoose 
// like .findById()


// FindById() method -> it returns Query and still we can use .then() and .catch() method 
// in this method we can simply pass the id value not like this {_id: "id_number"} 

// User.findById('6a5951d57fb914b16e2fa5de')
//     .then((res) => {
//         // This result doesnot comes with array so that it reutrns the real object/result
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });




// UpdateOne method -> It also return query object so that we can use then and catch there also
// In mongoshell when you want to update any value you write like this 
// db.User.updateOne({name: "Bruce"}, {$set: {age: 49}} ) for this wen don't use set operator 

// User.updateOne( {name: "Bruce"}, {age: 49} )
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });


// UpdateMany -> It also return query object so that we can use then and catch

// User.updateMany({ age: { $gt: 48 }}, { age: 55 } )
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });



// findOneAndUpdate() -> first find then print and then update it also return query object
// the findOneAndUpdate() method is basically return actual document not like this acknowledge: true
// So basically this method return your previous data not updated data the updated data you check
// in mongosh
// User.findOneAndUpdate({ name: "Bruce" }, { age: 35 } )
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// If you want to print the updated data in terminal so then the pass {new: true} option in findOneAndUpdate
// if new value set true then it return the modified document rather than the original
// means updated document rather than previous

// User.findOneAndUpdate({ name: "Bruce" }, { age: 42 }, { new: true } )
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });




// findByIdAndUpdate() -> it also return Query objects 
// It takes id and then update the value of this document's id 
// {new: false} by default «boolean» if true, return the modified document rather than the original
// User.findByIdAndUpdate('6a5951d57fb914b16e2fa5de', { age: 35 }, {new: true})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });



// DELETE 
// Model.deleteOne() -> it also return query object 
// It delete only one document in collections

// User.deleteOne( {name: "Bruce"} ) 
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     });




// Model.deleteMany() -> it also return query object so that we can use then and catch method
// It is use to delete many documents in collections 
// User.deleteMany( {age: 48} ) 
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     });


// They both have same problem they only show output like { acknowledged: true, deletedCount: 1 } this
// but what is deleted they never show so we also want to see what what documents is deleted
// from collections so we use another method like .findByIdAndDelete() and .findOneAndDelete()
// They show which documents is deleted from collections

// User.findByIdAndDelete('6a5951d57fb914b16e2fa5dd')
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     });



// I will add another documents 
// const user2 = new User({
//     name: "Eve",
//     email: "eve@yahoo.in",
//     age: 48,
// });

// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });




// findOneAndDelete() -> it also return Query object 
User.findOneAndDelete( {name: "Tony"} )
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    });