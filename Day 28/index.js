const express = require("express");

// express() it is a function which return some value and we can store the value in 
// variable name app and this app is object we can see the object using console.dir(app)

const app = express();
// console.dir(app);

// Port are the logical endpoints of a network connection that is used to exchange information
// between a web server and a web client.
// port aisa point jahan se hamara client server ke sath bat karega

// let port = 3000; //  or 8080
let port = 8080;

// listen is inside app object listen is basically listen incomming api request

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// jaise hi server par koi bhi request aayegi the app.use print karadega kaha hamare terminal par
// express by default request and response do parameter by default create karta hai

// app.use((req, res) => {

//     // console.log(req);

//     console.log("request received");


//     // res.send("this is a basic response");

//     // res.send({
//     //     name: "apple",
//     //     color: "red",
//     // });

//     // res.send() function use to send a response from our server
//     // express js convert js object to json format we can send multiple type of response in express

//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);

// });

// Routing 
// it is process of selecting a path for traffic in a network or between or across multiple networks

// app.post("/", (req, res) => {
//     res.send("you sent a post request to root");
// });

// app.get("/", (req, res) => {
//     res.send("hello, i am root");
// });

// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });

// app.get("/:path*", (req, res) => {
//     res.send("this path does not exist");
// });



// app.use((req, res) => {
//     res.send("this path does not exist");
// });





// Path parameter
app.get("/", (req, res) => {
    res.send("hello, i am root");
});

app.get("/:username/:id", (req, res) => {
    // console.log(req.params); // it basically show request parameter
    let { username, id } = req.params;
    // res.send("hello, i am root");
    let htmlStr = `<h1>welcome to the page of @${username}.</h1>`
    res.send(htmlStr);
});

// for example agar hum hoopscotch me jakar http://localhost:8080/apnacollege request bheje to 
// username me parameter apnacollege aa jayega 
// like this [Object: null prototype] { username: 'apnacollege' }
// we can also send multiple parameter 
// matlab usename kuch bhi ho sakta hai aur id bhi kuch bhi ho sakti hai
// output -> [Object: null prototype] { username: 'apnacollege', id: '123' }



// Query String
app.get("/search", (req, res) => {
    // console.log(req.query);
    let { q } = req.query;
    // res.send("no results");
    // If nothing searched in query then print this
    if(!q) {
        res.send("<h1>nothing searched</h1>");
    }
    res.send(`<h1>search results for query: ${q}</h1>`);

});

// If i send http://localhost:8080/search?q="apple" to hoopscotch the the q= means quary
// so the output is this [Object: null prototype] { q: '"apple"' }
// We can also send multiple things like if i send this link
// http://localhost:8080/search?q=apple&color=green then the output is 
// [Object: null prototype] { q: 'apple', color: 'green' } because we can print req.query
// paramter ke andar agar hum aditional information bhejte hai in the form of query strings 
// wo information app.get() ke andar req object me aati hai aur req object ke query parameter
// me aake store ho jati hai
// req.query ke andar wo sari ki sari query print hokar aa jati hai jo ek request ke sath aati hai
