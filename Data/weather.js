  
const request = require("request");

const weather = (latitude , longitude , callback ) => { 
  const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q="+latitude+","+longitude;
    request({ url , json: true }, (error, response) => {
    
if (error) {
         callback("low level erorr connot reatch to the site " , undefined)
    } else if (response.body.error) {
        callback(response.body.error.message , undefined )
    }    
    else {
        const locationName = response.body.location.name;
        const conditionText = response.body.current.condition.text;
        const temp = response.body.current.temp_c;
        callback(undefined,  locationName + "  ,  it is : " + conditionText + "and temp is " + temp );
    }
 
    })
    
}

module.exports = weather;