const express = require("express");
const path = require("path");

const app = express();

const port = 8080;

app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));



app.get("/", (req, res) => {
    res.render("home.ejs");
});

// app.get("/Hobbies/:username", (req, res) => {
//     let { username } = req.params;
//     res.render("Hobbies.ejs", {username});
// });


// app.get("/Education/:username", (req, res) => {
//     let { username, Education } = req.params;
//         res.render("Education.ejs", {username});
// });


// app.get("/Skills/:username", (req, res) => {
//     let { username } = req.params;
//     res.render("Skills.ejs", {username});
// });




app.get("/:data/:username", (req, res) => {
    let {username , data} = req.params;
    if(data === "Hobbies") {
        res.render("Hobbies.ejs", {username});
    }
    else if(data === "Education") {
        res.render("Education.ejs", {username});
    }
    else if(data === "skills") {
        res.render("Skills.ejs", {username});
    }
    else {
        res.render("home.ejs");
    }
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// app.use((req, res) => {
//     res.render("home.ejs");
// });

