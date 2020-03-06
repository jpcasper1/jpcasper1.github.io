const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (jsonObject) {
  
    // temporary checking for valid response and data parsing
    
    const towns=jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if (["Fish Haven", "Preston", "Soda Springs"].indexOf(towns[i].name) > -1) {
        let card = document.createElement('section');
        card.className = 'card';
        // columnClass = { flex : flex-column}
        let imageDiv = document.createElement('div')

        let titleDiv = document.createElement("div");

        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let yearFounded = document.createElement('p');
        let currentPopulation = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        yearFounded.textContent = "Year Founded " + towns[i].yearFounded;
        currentPopulation.textContent = "Population: " + towns[i].currentPopulation;
        averageRainfall.textContent="Annual Rain Fall: " + towns[i].averageRainfall;


        image.setAttribute('src', "images/" + towns[i].photo);
        image.setAttribute('alt', "picture of: " + h2.textContent);

        titleDiv.appendChild(h2);
        titleDiv.appendChild(h3);
        titleDiv.appendChild(yearFounded);
        titleDiv.appendChild(currentPopulation);
        titleDiv.appendChild(averageRainfall);
        imageDiv.appendChild(image);
        card.appendChild(titleDiv)
        card.appendChild(imageDiv)

        document.querySelector('div.cards').appendChild(card);
    }
  }
});


WebFont.load({google: {families: ["Bree Serif", "Lato"]}});