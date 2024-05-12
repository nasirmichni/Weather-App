document.addEventListener("DOMContentLoaded", function() {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Peshawar&appid=560d95345447bb7733a509551edf52cc&units=metric')
    .then(function(response){
        console.log(response.data);
        let temperature = Math.round(response.data.main.temp);
        let tempElement = document.querySelector(".temp");
        tempElement.innerHTML = temperature + "°C";

        let feels = Math.round(response.data.main.feels_like);
        let feel_like = document.querySelector(".feels-like");
        feel_like.innerHTML = `Real feel <br> ${feels}`;

        let humadity = response.data.main.humidity;
        let humadityElement = document.querySelector(".humadity");
        humadityElement.innerHTML = `Humidity <br> ${humadity}`;

        let clouds = response.data.clouds.all;
        let cloudsElement = document.querySelector(".clouds");
        cloudsElement.innerHTML = `Clouds <br> ${clouds}`;

        let wind = response.data.wind.speed;
        let windSpeed = document.querySelector(".wind-speed");
        windSpeed.innerHTML = `Wind <br> ${wind}`;

        let sunriseTemplate = response.data.sys.sunrise * 1000;
        let sunriseTime = new Date(sunriseTemplate);
        let sunriseHours = sunriseTime.getHours();
        let sunriseMinutes = sunriseTime.getMinutes();
        let formattedSunriseTime = `${sunriseHours}:${sunriseMinutes < 10 ? '0' : ''}${sunriseMinutes}`;
        let sunriseElement = document.querySelector(".sunrise");
        sunriseElement.innerHTML = `Sunrise <br> ${formattedSunriseTime}`;

        let sunsetTemplate = response.data.sys.sunset * 1000;
        let sunsetTime = new Date(sunsetTemplate);
        let sunsetHours = sunsetTime.getHours();
        let sunsetMinutes = sunsetTime.getMinutes();
        let sunsetSuffix = sunsetHours >= 12 ? 'PM' : 'AM';
        sunsetHours = (sunsetHours % 12) || 12; // Convert hours to 12-hour format
        let formattedSunsetTime = `${sunsetHours}:${sunsetMinutes < 10 ? '0' : ''}${sunsetMinutes} ${sunsetSuffix}`;
        let sunsetElement = document.querySelector(".sunset");
        sunsetElement.innerHTML = `Sunset <br> ${formattedSunsetTime}`;
    })
    .catch(function(error){
        console.log(error);
    });
});
let currentYear = new Date().getFullYear();


document.getElementById("current-year").textContent = currentYear;