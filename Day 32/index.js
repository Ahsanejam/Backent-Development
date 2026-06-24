const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");



app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Ahsan960866'
});



// A simple SELECT query
// connection object jo form hui yaha par uske andar query name ka fuction hota hai jiska kam hota hai 
// database ke andar koi bhi query run karna hamne kya query run ki SHOW TABLES

// We can also write queries in variable this is better approach
// Inserting New Data
// Connection.query kya karega es query ke andar agar use koi placeholders milenge to un placeholders ko user
// ke andar agar koi value hai to waha se uthakar apni query ke andar input karne ki kosish karege 

// placeholder kya hai (?, ?, ?, ?)

// Using placeholder





// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [
//     ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//     ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
// ];

// try {
//     connection.query(q, [users], (err, result) => {
//         if(err) throw err;
//         console.log(result); // result is acually an array
//     });
// }
// catch(err) {
//     console.log(err);
// }









// |-------------------------------------------------------|
// |This the way how you access database from index.js     |
// |let q = "SELECT * FROM user";                          |
// |try {                                                  |
// |    connection.query(q, (err, result) => {             |
// |       if(err) throw err;                              |
// |        console.log(result);                           |
// |    });                                                |
// |}                                                      |
// |catch (err){                                           |
// |    console.log(err);                                  |
// |}                                                      |
// |-------------------------------------------------------|



// -------------------|
// Insert Data in Bulk| 100 users using faker
// -------------------|

// So first what we do is that we change getRandomUser he return objects but we change to return an array

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];
// for(let i=1; i<=100; i++) {
//     // console.log(getRandomUser());
//     // push all 100 getRandomUser() data to data array
//     data.push(getRandomUser());
// }

// try{
//     connection.query(q, [data], (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     })
// } 

// catch (err){
//     console.log(err);
// }

// connection.end(); // this is for ending the connection








// |------------------------------------------------------------------------------------|
// |OUTPUT                                                                              |
// |PS C:\Users\Administrator\Desktop\Delta Web development\Day 32> node index.js       |
// |[ { Tables_in_delta_app: 'temp' } ]                                                 |
// |matlab hamne SHOW TABLES name ka query  run kiya to output aaya Tables in delta app |
// |means delta app me kon kon se name ki tables hai temp name ki tables hai            |
// |------------------------------------------------------------------------------------|

// let getRandomUser = () => {
//     return {
//       id: faker.string.uuid(),
//       username: faker.internet.username(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     };
// }

// console.log(getRandomUser());

// Home Route
app.get("/", (req, res) => {
    // This command returns the total number of users in user table
    let q = `SELECT count(*) FROM user`;
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            // console.log(result[0]["count(*)"]);
            // res.send(result[0]["count(*)"]);

            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    } 

    catch (err){
        console.log(err);
        res.send("some error in DB");
    }
});


// Show Route
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try{
        connection.query(q, (err, users) => {
            if(err) throw err;
          
            // console.log(result);
            // res.send(result);
            res.render("showusers.ejs", { users });
        });
    } 

    catch (err){
        console.log(err);
        res.send("some error in DB");
    }
    
});

// Edit Route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            // console.log(result);
            let user = result[0];
            res.render("edit.ejs", { user });
        });
    } 

    catch (err){
        console.log(err);
        res.send("some error in DB");
    }
});

// UPDATE (DB) Route
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsename } = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            // console.log(result);
            let user = result[0];
            if(formPass != user.password) {
                res.send("WRONG password");
            }
            else{
                let q2 = `UPDATE user SET username='${newUsename}' WHERE id = '${id}'`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    } 

    catch (err){
        console.log(err);
        res.send("some error in DB");
    }
});
// Create newUser
app.get("/user/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/post", (req, res) => {
    let { username }  = req.body;
    let id = faker.string.uuid();
    let email = faker.internet.email();
    let password = faker.internet.password();

    // console.log(username);
    // console.log(id);
    // console.log(email);
    // console.log(password);
    let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
    let newUser = [id, username, email, password];
    try {
        connection.query(q, newUser, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.redirect("/user");
        });
    }
    catch(err) {
        console.log(err);
    }
});

// Delete post 
app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            // console.log(result);
            let user = result[0];
            res.render("delete.ejs", { user });
        });
    } 

    catch (err){
        console.log(err);
        res.send("some error in DB");
    }
});

app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password, email } = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            // console.log(result);
            let user = result[0];
            if(password != user.password && email != user.email) {
                res.send("WRONG entry");
            }
            // elif(email != user.email) {
            //     res.send("WROND email");
            // }
            else{
                // let q2 = `UPDATE user SET username='${newUsename}' WHERE id = '${id}'`;
                // connection.query(q2, (err, result) => {
                //     if(err) throw err;
                //     res.redirect("/user");
                // });
                let q2 = `DELETE FROM user WHERE id = '${id}'`;
                connection.query(q2 , (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    } 

    catch (err){
        console.log(err);
        res.send("some error in DB");
    }

});

app.listen("8080", () => {
    console.log("server is listening to port 8080");
});
