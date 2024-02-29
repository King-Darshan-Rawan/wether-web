const apiKey = "7aee6b9e4966b233dc6c1ecaa103232f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

let data;
let city = document.querySelector(".search.input")
async function checkWeather(city){
    const response = await fetch(apiUrl + "&q=" + city + `&appid=${apiKey}`);
    data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";



    if(data.weather[0].main == "Haze"){
        weatherIcon.src = "Haze.png"
    }
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png"
    }
    
    if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png"
    }
    
    
    if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png"
    }
    
    
    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png"
    }
    
    if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png"
    }
    
    if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png"
    }
    
}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
});
