const apiKey="cc3cc2e50b8f77e8572cfabd37ba64a5";
//Please don't use my apiKey. You can generate your own in "https://openweathermap.org"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");

async function checkWeather(city){
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".icon").style.display="inline";
        document.querySelector(".title").style.display="block";
        document.querySelector(".weather").style.display="none";
        document.querySelector(".card").style.background= "linear-gradient(135deg,#ff3b3b8c, #1b0a0b)";
    }
    else{

        var data= await response.json();

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

        if (data.weather[0].main=="Clouds"){
            weatherIcon.src= "images/clouds.png";
            document.querySelector(".card").style.background= "linear-gradient(135deg, #34a9ec, #042e3f)";
        }
        else if (data.weather[0].main=="Clear"){
            weatherIcon.src= "images/clear.png";
            document.querySelector(".card").style.background= "linear-gradient(135deg, #fffed2, #f7b131)";
        }
        else if (data.weather[0].main=="Rain"){
            weatherIcon.src= "images/rain.png";
            document.querySelector(".card").style.background= "linear-gradient(135deg, #001e2e, #000000)";
        }
        else if (data.weather[0].main=="Drizzle"){
            weatherIcon.src= "images/drizzle.png";
            document.querySelector(".card").style.background= "linear-gradient(135deg, #49434e, #8b34fc)";
        }
        else if (data.weather[0].main=="Mist"){
            weatherIcon.src= "images/mist.png";
            document.querySelector(".card").style.background= "linear-gradient(135deg, #9da3a7,  #6c4c96)";
        }
        else if (data.weather[0].main=="Snow"){
            weatherIcon.src= "images/snow.png";
            document.querySelector(".card").style.background= "linear-gradient(135deg, #def0f7, #018cff)";
        }
        else if (data.weather[0].main=="Thunderstorm"){
            weatherIcon.src= "images/thunderstorm.png";
            document.querySelector(".card").style.background= "linear-gradient(135deg, #1c1850, #090155)";
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
        document.querySelector(".icon").style.display="none";
        document.querySelector(".title").style.display="none";
        
        
    }

    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
