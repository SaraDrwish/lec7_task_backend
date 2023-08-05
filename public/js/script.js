
document.addEventListener("DOMContentLoaded", () => {

    let form = document.getElementById("form1");
    let addressF = document.getElementById("address");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(addressF.value)
    })

    let errorF = document.getElementById("error");
    let locationF = document.getElementById("location");
    let forecastF = document.getElementById("forecast");

    // let weatherF = async () => {
    

    // }

}
)

