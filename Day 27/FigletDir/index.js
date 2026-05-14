const figlet = require("figlet");
// when you acquire a package you don't have to write / 

figlet("Arham Ejam", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
});