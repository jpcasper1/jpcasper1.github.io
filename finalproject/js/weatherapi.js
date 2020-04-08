const WEATHER_CURRENT_API = "https://api.openweathermap.org/data/2.5/weather?appid=c833d7604b7d2b470b27b47d3ae39add&units=imperial";

const CITY_INFO = {
    "Riggins" : {
        "zip": "83549"
    },
}
	
var townName = document.getElementById('townName').textContent

fetch(WEATHER_CURRENT_API+'&zip='+CITY_INFO[townName].zip)
    .then(function (response)  {
        return response.json()
    })
    .then(function (jsObject) {
        
        document.getElementById("currently").textContent = jsObject.weather[0].main;
        document.getElementById("current-temp").textContent = jsObject.main.temp;
        document.getElementById("humidity").textContent = jsObject.main.humidity;
		document.getElementById("windspeed").textContent = jsObject.wind.speed;
		temp = document.getElementById('current-temp').textContent;
      
        windspeed = document.getElementById('windspeed').textContent;
        if (windspeed<3 || temp > 50){
            document.getElementById('windChill').textContent = 'N/A';
        } else {
            windChill = Math.round((35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed,0.16)) + (0.4275 *  temp * Math.pow(windspeed,0.16)))*100 )/100;
            console.log(windChill,'WINDCHILL')
            document.getElementById('windChill').innerHTML = windChill;
        }
});