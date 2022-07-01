const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const https = require("https");
const port = 3000;

app.use(express.static("public")); // its the folder in which all our static data is stored (local files)
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", (req, res) => {
    const firstName = req.body.fname;
    const lastName = req.body.lnmae;
    const email = req.body.email;
    // console.log("First name is: " + firstName);
    // console.log("Last name is: " + lastName);
    // console.log("Email is: " + email);

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_field: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);

    const url = "https://us11.api.mailchimp.com/3.0/lists/c0fa84b6cf";

    const options = {
        method: "POST",
        auth: "jatin:9aea50de197cab11f4bfe2dbe7bbe9d5-us11"
    }
    const request = https.request(url, options, (response) => {
        response.on("data", (data) => {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();

})

app.listen(port, () => {
    console.log(`Server is running on port localhost:${port}`);
})

// API key
//9aea50de197cab11f4bfe2dbe7bbe9d5-us11

// List Id / Audience id -> it is where we are gonna store our mail subscriber
//c0fa84b6cf.
