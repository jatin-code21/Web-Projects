const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const port = 3000;

app.use(express.static("public")); // its the folder in which all our static data is stored (local files)
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", (req, res) => {
    let firstName = req.body.fname;
    let lastName = req.body.lnmae;
    let email = req.body.email;
    console.log("First name is: " + firstName);
    console.log("Last name is: " + lastName);
    console.log("Email is: " + email);
})

app.listen(port, () => {
    console.log(`Server is running on port localhost:${port}`);
})