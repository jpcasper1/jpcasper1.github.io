 const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c833d7604b7d2b470b27b47d3ae39add&units=imperial";

 fetch(apiURL)
     .then((response) => response.json())
      .then((jsObject) => {
        console.log(jsObject);

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
        console.log(fivedayforecast);

        for (let i=0; i<fivedayforecast.length; i++) {
            document.getElementById(`forecast${i+1}`).textContent=fivedayforecast[i].main.temp;

        }
    });
//need to do math to get the day of the week (class dow)
//

//lots of shit that probaly wont work....

    // let card=document.createElement('flex-container');
    // let col=document.createElement('col');
    // let dow=document.createElement('img');
    // let temp=document.createElement('class.data')

    // const weathericon = "https://openweathermap.org/img/w/${day.weather[0].icon}.png";

    // class.data.textcontent = main[i].temp

    // image.setAttribute('src', weathericon);
    // image.setAttribute('alt', day.weather[0].description);

    //     card.appendChild()
    //     card.appendChild()
    //     card.appendChild(image)


//Trying to imitate filter in towns

        // const fivedayforecast = jsObject["list"];
        // for (let i=0; i < fivedayforecast.length; i++){
        //     if(["18:00:00"].indexOf(fivedayforecast[i].dt_txt) > -1){
        //         document.getElementById('forecast${i+1').textContent=fivedayforecast[i];
        //     }
        // }        
        
        //filter(x => x.dt_txt.includes('18:00:00'));
        //console.log(fivedayforecast);


//What the instructor was trying to show us


        // for (let i=0; i<fivedayforecast.length; i++) {
        //     document.getElementById('forecast${i+1}').textContent=fivedayforecast[i];
        // }



       

        

//extra crap from doing the weather? instead of forecast?
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
        


