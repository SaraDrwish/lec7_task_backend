

const request = require("request");
const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

const hbs = require("hbs");


// ---------------------


// ----------------------


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


// app.get("/weather", (req, res) => {
//     res.render("weather", {
//         title: "weather page"
//         // locationF,
//         // latitudeF,
//         // longitudeF,
//         // weatherStatusF
//     })

    //   res.render("weather", 
    //      <h3> la renderr rr  </h3> 
    // )
    
    // res.send( <h3> send func </h3>)

// })

// app.get("/weather", (req, res) => {
//     res.json({
//         title: "weather page"
//     });
// })



app.get("/products", (req, res) => {
    // record the data of all   keys and values 
    console.log(req.query)
    // res.send(
    //     {
    //         product: "bmw", 
    //         date: "2023"
    //         }
    // )
    res.render(
        "products" , {
        product: "bmw",
        date: "2023"
         }
    )
});


//task 0

// app.get("/forcast", (req, res) => {
//     if (!req.query.adress) {
//         return res.send( {
//                 erorr: "enter adress"
//             } ) }
       
//     res.send({
//       location: req.query.adress,
//       forecast: "cold"
//     })
      
// });

// --------------------------

// --------------------------------------------------------------------------------------------------------------

const geocode = require("./Tools/geocode")
const forecast = require("./Tools/forecast")

// app.get("/weather", (req, res) => {
//     console.log("Received request for /weather:", req.query);
//     if (!req.query.address) {
//         return res.send( {
//             error: "enter adress"
//         })
//     }

//         geocode(req.query.address, (error, data) => {
//             if (error) { // geocode reorr
//                 return res.send({error})
//             }
//             forecast(data.latitude, data.longitude, (error, dataForecast) => {
//                 if (error) { //forecast erorr -- error
//                     return res.send({error})
//                 }
//                 res.send(
//                     {
//                         forecast:dataForecadt,
//                         location: req.query.address
//                     }
//                 )
//             })

//       })
     
// });

// ------------------------------------task 7-----------------------------------------------------------------------------------

  
    app.get("/weather", (req, res) => {
    res.render("weather", {
        title: "Weather Page",
        location: "",
        latitude: "",
        longitude: "",
        forecastData: "",
    });
 

});


app.get("/getWeather", (req, res) => {
    const address = req.query.address; // Get the address from the query parameter

    if (!address) {
        return res.status(400).json({ error: "Please provide an address" });
    }

    // Use the geocode function to fetch the latitude, longitude, and location based on the address.
    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.status(500).json({ error });
        }

        // Use the forecast function to fetch the weather data based on the latitude and longitude.
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.status(500).json({ error });
            }

            // Return the weather data as JSON response.
            res.json({
                location,
                latitude,
                longitude,
                forecastData,
            });
        });
    });
});

// ---------------------------------------------


 

// ---------------------------------------------





 
//at last 

app.get("*", (req, res) => {
    res.send("404 page not found sara said ")
})


// lastest

app.listen(port, () => {
    console.log(` the port is ${port} sara's code `)
})


// ------------------------
