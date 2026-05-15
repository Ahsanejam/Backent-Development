// EJS(Embedded javascript templates) ye kya hota hai to man lo ki mai instagram ke kisi profile me 
// gaya to waha e bohot sari chize bani hui hoti hai to agar mai har instagram ke page me jao to 
// lagbhag sab same hoti hai to kya sab alag alag banaya gayi hoti hai nhi ek hi page me alag 
// information ko de diya jata hai usi ko templating kehte hai



const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// app.set("view engine", "ejs") iska matlab ham templates ki bat kar rahe hai wo package jo hamare template
// ko create karne ke kam aayega render karne ke dikhne ke wo hone wala hai hamare ejs


// Serving Static Files
// This is use for if you want to use css and js so make a public folder and inside the folder you can make
// style.css and give some stylling
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));




app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// agar kisi html code ko bhejna hota hai in the form of file uske liye ham res.render() ko use karte hai
// res.render() ko ham koi normal file ko nhi bhejte balki ham home.ejs ko bhej rahe honge
// express by default jab res.render() ko call lageyenge to by default views wala folder dhondhega 
// views wale folder ke andar home ko search karega



app.get("/", (req, res) => {
    // res.send("this is home");
    // res.render("home"); we can also write this 

    res.render("home.ejs");
});

// Instagam ejs
// app.get("/ig/:username", (req, res) => {
//     // Loops in ejs
//     const followers = ["adam", "bob", "steve", "abc"];
//     let { username } = req.params;
//     res.render("instagram.ejs", { username, followers });
// });


app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    // console.log(instaData);
    const data = instaData[username];
    // console.log(data);
    if(data) {
        res.render("instagram.ejs", { data });
    }
    else {
        res.render("error.ejs");
    }
});





app.get("/hello", (req, res) => {
    res.send("hello");
});

// Passing data to EJS
app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    // res.render("rolldice.ejs", { num: diceVal }); // hum ya to object ke key value pairs  pass kar sakte hai 
    res.render("rolldice.ejs", { diceVal }); // nhi to single value bhi pass kar sakte ha 
    // hum jo second value pass karenge to wo in the form of object hoga
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});