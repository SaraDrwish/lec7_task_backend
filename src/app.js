

const request = require("request");
const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

const hbs = require("hbs");

app.set('view engine', 'hbs');

const viewsPath = path.join(__dirname , "../Temp1/views")
app.set("views", viewsPath)

const partialPath = path.join(__dirname , "../Temp1/Partials")
hbs.registerPartials(partialPath)

app.get("/", (req, res) => {
    res.render("index", {
        title: "welcome home , ",
        desc: "write down the country that you want to know its weather now : "
    });
})

const geocode = require("./Tools/geocode")
const forecast = require("./Tools/forecast")

app.get("/weather", (req, res) => {
    res.render("weather", {
        title: "Weather Page",
    });
});

app.get("/getWeather", (req, res) => {
    const address = req.query.address;

    if (!address) {
        return res.status(400).json({ error: "Please provide an address" });
    }

    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.status(500).json({ error });
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json({
                location,
                latitude,
                longitude,
                forecastData,
            });
        });
    });
});


//at last 

app.get("*", (req, res) => {
    res.send("404 page not found sara said ")
})

// lastest

app.listen(port, () => {
    console.log(` the port is ${port} sara's code `)
})

// ------------------------
