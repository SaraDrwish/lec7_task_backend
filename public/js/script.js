
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
    form.reset();
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
    
 