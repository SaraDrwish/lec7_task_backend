
document.addEventListener("DOMContentLoaded", () => {

// const async = require("hbs/lib/async");  //returns promis
  
// -------------------------------------------------------------------------------------
    // let form = document.getElementById("form1");
    // let addressF = document.getElementById("address");

    // form.addEventListener("submit", (e) => {
    //     e.preventDefault();
    //     console.log(addressF.value)
    //     weatherF();
    //     form.reset();
    // })

    // let errorF = document.getElementById("error");
    // let locationF = document.getElementById("location");
    // let forecastF = document.getElementById("forecast");

    // let weatherF = async () => {
        
    //     try {
    //         // const addresasncF = document.getElementById("address").value;
    //         const addresasncF = addressF.value;
    //         const res = await fetch("http://localhost:3000/weather?address="+addresasncF);
    //         const data = await res.json()
    //         console.log(data)
    //         if (data.error) {
    //             errorF.innerText = "there is an error here : " + data.error;
    //             forecastF.innerText = "";
    //             locationF.innerText = ""
    //         } else {
    //             locationF.innerText ="country name is :  " + data.location;
    //             forecastF.innerText = "the forecast is : " + data.forecast;
    //             errorF.innerText = ""
    //         }
    //     } catch(e){
    //         console.log(e);
    //     }
    
    // }
// -------------------------------------------------------------------------------------


// start task 7

//    let form = document.getElementById("form1");
//     let addressF = document.getElementById("address");
    
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         console.log(addressF.value)
//         weatherF();
//         form.reset();
//     })

//     let errorF = document.getElementById("error");
//     let locationF = document.getElementById("location");
//     let latitudeF = document.getElementById("latitude");
//     let longitudeF = document.getElementById("longitude");
//     let weatherStatusF = document.getElementById("weatherStatus");

//     let weatherF = async () => {
//         try {
//             const addresasncF = addressF.value;
//             const res = await fetch("http://localhost:3000/weather?address="+addresasncF);
//             const data = await res.json()
//             console.log(data)
//             if (data.error) {
//                 // await delay(500);
//                 errorF.innerText =  "there is an error here : " + data.error;
//                 locationF.innerText = "";
//                 longitudeF.innerText = "";
//                 latitudeF.innerText = "";
//                 weatherStatusF.innerText = "";
//             } else {
//                 // await delay(500);
//                 locationF.innerText ="country name is :  " + data.location;
//                 latitudeF.innerText = "the forecast is : " + data.latitude;
//                 longitudeF.innerText = "the forecast is : " + data.longitude;
//                 weatherStatusF.innerText = "the forecast is : " + data.conditionText;
//                 errorF.innerText = ""
//             }
//         } catch(e){
//             console.log(e);
//         }
    
//     }

    
    
    // ---------------------------------------


// const form = document.getElementById("form1");
// const addressInput = document.getElementById("address");
// const locationParagraph = document.getElementById("location");
// const latitudeParagraph = document.getElementById("latitude");
// const longitudeParagraph = document.getElementById("longitude");
// const weatherStatusParagraph = document.getElementById("weatherStatus");
// const errorParagraph = document.getElementById("error");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const address = addressInput.value;

//     fetch(`/getWeather?address=${encodeURIComponent(address)}`)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then((data) => {
//             locationParagraph.textContent = data.location;
//             latitudeParagraph.textContent = `Latitude: ${data.latitude}`;
//             longitudeParagraph.textContent = `Longitude: ${data.longitude}`;
//             weatherStatusParagraph.textContent = data.forecastData;
//             errorParagraph.textContent = "";
//         })
//         .catch((error) => {
//             errorParagraph.textContent = "Error: " + error.message;
//             locationParagraph.textContent = "";
//             latitudeParagraph.textContent = "";
//             longitudeParagraph.textContent = "";
//             weatherStatusParagraph.textContent = "";
//         });
// });

// -----------------end task 7
    
    
    // start task 7 other way  -----------------------------

const form = document.getElementById("form1");
const addressInput = document.getElementById("address");
const locationParagraph = document.getElementById("location");
const latitudeParagraph = document.getElementById("latitude");
const longitudeParagraph = document.getElementById("longitude");
const weatherStatusParagraph = document.getElementById("weatherStatus");
const errorParagraph = document.getElementById("error");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const address = addressInput.value;

    fetch(`/getWeather?address=${encodeURIComponent(address)}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            const { location, latitude, longitude, forecastData } = data;

            locationParagraph.textContent = location;
            latitudeParagraph.textContent = `Latitude: ${latitude}`;
            longitudeParagraph.textContent = `Longitude: ${longitude}`;

            setTimeout(() => {
                weatherStatusParagraph.textContent = forecastData;
            }, 500);

            errorParagraph.textContent = "";
        })
        .catch((error) => {
            errorParagraph.textContent = "Error: " + error.message;
            locationParagraph.textContent = "";
            latitudeParagraph.textContent = "";
            longitudeParagraph.textContent = "";
            weatherStatusParagraph.textContent = "";
        });
});
    
    
    // ------------------------------------end task 7 other way
 





}
)

