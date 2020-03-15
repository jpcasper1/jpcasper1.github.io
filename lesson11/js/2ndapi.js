const WEATHER_CURRENT_API = "https://api.openweathermap.org/data/2.5/weather?appid=c833d7604b7d2b470b27b47d3ae39add&units=imperial";
const WEATHER_FORECAST_API = "https://api.openweathermap.org/data/2.5/forecast?appid=c833d7604b7d2b470b27b47d3ae39add&units=imperial";
const WEATHER_IMAGE_API = "https://openweathermap.org/img/w/";
const CITY_INFO = {
    "Soda Springs" : {
        "id": 5607916,
        "name": "Soda Springs",
        "state": "ID",
        "country": "US",
        "coord": {
          "lon": -111.604668,
          "lat": 42.654369
        }
    },  
    "Preston" :{
        "id": 5604473,
        "name": "Preston",
        "state": "ID",
        "country": "US",
        "coord": {
          "lon": -111.876617,
          "lat": 42.09631
        }
      }
      {
        "id": 5601299,
        "name": "Fish Haven",
        "state": "ID",
        "country": "US",
        "coord": {
          "lon": -111.297699,
          "lat": 42.322151
        }
      },
}

const DAYS_OF_WEEK = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var townName = document.getElementById('townName').textContent

fetch(WEATHER_CURRENT_API+'&id='+CITY_INFO[townName].id)
    .then(function (response)  {
        return response.json()
    })
    .then(function (jsObject) {
        console.log(jsObject);
        document.getElementById("currently").textContent = jsObject.weather[0].main;
        document.getElementById("current-temp").textContent = jsObject.main.temp;
        document.getElementById("humidity").textContent = jsObject.main.humidity;
        document.getElementById("windspeed").textContent = jsObject.wind.speed;
        console.log(jsObject);
        console.log(humidity)

        temp = document.getElementById('current-temp').textContent;
        console.log(temp,'TEMPERATURE')
        windspeed = document.getElementById('windspeed').textContent;
        if (windspeed<3 || temp > 50){
            document.getElementById('windChill').textContent = 'N/A'
        } else {
            windChill = Math.round((35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed,0.16)) + (0.4275 *  temp * Math.pow(windspeed,0.16)))*100 )/100;
            console.log(windChill,'WINDCHILL')
            document.getElementById('windChill').innerHTML = windChill;
        }
});


fetch(WEATHER_FORECAST_API+'&id='+CITY_INFO[townName].id)
    .then((response) => response.json())
     .then((jsObject) => {
       console.log(jsObject);

       const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
       console.log(fivedayforecast);
        
       var fiveDayContainer = document.getElementById('fiveForecastContainer');
       for (let i=0; i<fivedayforecast.length; i++) {
            var dayContainer = document.createElement('div');
            dayContainer.className = 'col';

            var dayName = document.createElement('span');
            dayName.className = 'dow';
            
            var ourDay = new Date(fivedayforecast[i].dt_txt)
            dayName.textContent = DAYS_OF_WEEK[ourDay.getDay()];

            var img = document.createElement('img');
            img.setAttribute('src',WEATHER_IMAGE_API + fivedayforecast[i].weather[0].icon + '.png');
            img.setAttribute('alt',fivedayforecast[i].weather[0].description);

            var weatherData = document.createElement('span');
            weatherData.className = 'data';
            weatherData.innerHTML = fivedayforecast[i].main.temp + '&#8457';

            dayContainer.appendChild(dayName);
            dayContainer.appendChild(img);
            dayContainer.appendChild(weatherData);

            fiveDayContainer.appendChild(dayContainer)

       }
   });