

function updateWindChill(){
    temp = document.getElementById('temperature').textContent;
    windSpeed = document.getElementById('windSpeed').textContent;
    if (windSpeed<3 || temp > 50){
        document.getElementById('windChill').textContent = 'N/A'
    } else {
        windChill = Math.round((35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed,0.16)) + (0.4275 *  temp * Math.pow(windSpeed,0.16)))*100 )/100;
        document.getElementById('windChill').innerHTML = windChill+' &#176;F';
    }
}

updateWindChill();