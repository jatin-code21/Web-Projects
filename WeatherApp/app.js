const { response } = require("express");
const express = require("express")
const app = express();
const port = 5000;
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html")
    // res.send("Server is up and running"); // cant have to send function in a same file
})

app.post("/", (req, res) => {
    // console.log(req.body.cityName);
    const query = req.body.cityName;
    const apiKey = "c08d8727c4b46d1a5561281609f9f3d2"
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units + ""
    https.get(url, (response) => {
        console.log(response.statusCode);

        response.on("data", (data) => {
            const weatherData = JSON.parse(data); // converting json to pure JS object
            //if we dont parse the data then the output we will get will be hexadecimal code.

            // there is also  JSON.stringify() method which just does the opposite
            const temp = weatherData.main.temp;
            const weatherDisription = weatherData.weather[0].description
            const area = weatherData.name;
            const icon = weatherData.weather[0].icon;
            const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            res.write("<h1>The temperature in " + query + " " + temp + " degree celsius</h1>");
            res.write("<h4>The weather in " + query + " " + weatherDisription + "</h4>");
            res.write("<img src = " + imageUrl + ">");
            res.send();
            console.log(weatherData);
        })
    });
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})