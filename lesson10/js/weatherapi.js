const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c833d7604b7d2b470b27b47d3ae39add&units=imperial";

fetch(apiURL)
    .then(function (response)  {
        return response.json()
    })
    .then(function (jsObject) {
        console.log(jsObject);
        // document.getElementById('current-temp').textContent=jsObject.main.temp;
        // document.getElementById('humidity').textContent=jsObject.main.humidity;
        // // document.getElementById('humidity').textContent=jsObject.main.humidity;
        // // document.getElementById('humidity').textContent=jsObject.main.humidity;
        // // document.getElementById('windSpeed').textContent=jsObject.wind.speed;
        

        // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  
        // const desc = jsObject.weather[0].description;  // the weather array
        // // const wCurrent=jsObject.weather[0].main;
        // // const humidity=jsObject.weather[0].
        // document.getElementById('imagesrc').textContent = imagesrc;  
        // document.getElementById('icon').setAttribute('src', imagesrc);  //imagesrc is set in the const above
        // document.getElementById('icon').setAttribute('alt', desc); //desc is set in the const above
        

});
