const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { randomUUID } = require("crypto");
// it creater randomly creates new id like this // ⇨ 6b300318-c927-4e00-a988-6678a6fc5b81

const methodOverride = require("method-override");



app.use(express.urlencoded({ extended: true }));
// override with POST having ?_method=PATCH or anything you want to override
app.use(methodOverride('_method'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: randomUUID(),
        username: "apnacollege",
        content: "I love coding!",
    },
    {
        id: randomUUID(),
        username: "shradhakhapra",
        content: "Hard work is important to achieve success",
    },
    {
        id: randomUUID(),
        username: "rahulkumar",
        content: "I got selected for my 1st internship!",
    },
];



app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});


app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = randomUUID();
    posts.push({ id, username, content });
    // res.send("post request working");
    // ye Express.js mein res.redirect() ka istemal user ko 
    // ek URL se doosre URL par bhejne (redirect karne) ke liye kiya jata hai. and ye automatically
    // app.get(/post) ko call karega
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});


// PATCH/PUT for Update specific post
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});


app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});


app.listen(port, () => {
    console.log("listening to port : 8080");
});