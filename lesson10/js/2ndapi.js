const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c833d7604b7d2b470b27b47d3ae39add&units=imperial";

fetch(apiURL)
    .then(function (response)  {
        return response.json()
    })
    .then(function (jsObject) {
        console.log(jsObject);
        document.getElementById('currently').textContent = jsObject.weather[0].main;
        document.getElementById('current-temp').textContent = jsObject.main.temp + " ˚F";
        document.getElementById('humidity').textContent = jsObject.main.humidity + " %";
        document.getElementById('windspeed').textContent = jsObject.wind.speed + " mph";
        

        // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  
        // const desc = jsObject.weather[0].description;  // the weather array
        // document.getElementById('imagesrc').textContent = imagesrc;  
        // document.getElementById('icon').setAttribute('src', imagesrc);  //imagesrc is set in the const above
        // document.getElementById('icon').setAttribute('alt', desc); //desc is set in the const above

        console.log(jsObject);
});

function updateWindChill(){
    temp = document.getElementById('current-temp').textContent;
    windspeed = document.getElementById('windspeed').textContent;
    if (windspeed<3 || temp > 50){
        document.getElementById('windChill').textContent = 'N/A'
    } else {
        windChill = Math.round((35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed,0.16)) + (0.4275 *  temp * Math.pow(windspeed,0.16)))*100 )/100;
        document.getElementById('windChill').innerHTML = windChill+' &#176;F';
    }
}

updateWindChill();

// const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c833d7604b7d2b470b27b47d3ae39add&units=imperial";

// fetch(forecast)
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function (jsObject) {
//         document.getElementById('')
//     }
//     })
