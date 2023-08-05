

const request = require("request");
const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
const x = path.join(__dirname, '../public'); 
app.use(express.static(x));

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
        title: "home page",
        desc: "lalalalalalalalalal home"
    });
})

app.get("/contact", (req, res) => {
    res.render("contact", {
        title: "contact page",
        desc: "contact contact contact "
    })
})

// app.get("/weather", (req, res) => {
//     res.render("weather", {
//         title: "weather page"
//         // data: data1,
 
//     })

//     //   res.render("weather", 
//     //      <h3> la renderr rr  </h3> 
//     // )
    
//     // res.send( <h3> send func </h3>)

// })

app.get("/products", (req, res) => {
    // record the data of all   keys and values 
    console.log(req.query)
    res.send(
        {
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

//task 7 --------------------------------------------------------------------------------------------------------------

const geocode = require("./Tools/geocode")
const forecast = require("./Tools/forecast")

app.get("/weather", (req, res) => {
    if (!req.query.address) {
        return res.send( {
            error: "enter adress"
        })
    }

        geocode(req.query.address, (error, data) => {
            if (error) { // geocode reorr 
                return res.send({error})
            }
            forecast(data.latitude, data.longitude, (error, dataForecadt) => {
                if (error) { //forecast erorr -- error
                    return res.send({error})
                }
                res.send(
                    {
                        forecast:dataForecadt,
                        location: req.query.address
                    }
                )
            })

      })
     
});



//task 7 end --------------------------------------------------------------------------------------------------------------



 
//at last 

app.get("*", (req, res) => {
    res.send("404 page not found sara said ")
})


// lastest

app.listen(port, () => {
    console.log(` the port is ${port} sara's code `)
})


// ------------------------
