const express = require("express");
const app = express();

const port = 8080;

// ye basically kya hota hai jaise ham to jan gaye ki app.get() me data jab ham submit karte hai to 
// wo req.query se access kar sakte hai ye app.post() me data access karne ke liye hame req.body;
// ka use karna padta hai but jab hum directly req.body ko print karte hai to hame undefined dikhaye deta
// hai kyuki data express ko readable format me nhi dikhta data ko readable format me  banane ke liye 
// ham app.use(express.urlencoded({extended: true})); iska use karte hai  ye line isliye bhi zarori hai 
// ki ham is line se batate hai ki ham kis type ka data bhejna chahte hai express me agar hum nhi 
// batayenge to undefined print ho kar aa jayega hame batana padta hai 
app.use(express.urlencoded({extended: true}));

// aur agar ham json me data ko bhejna chahte hai to iska use kar sakte hai
app.use(express.json());


app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`standard GET response. Welcome ${user}!`);
});

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(`standard POST response. Welcome ${user}!`);
});


app.listen(port, () => {
    console.log(`listening to port ${port}`);
});