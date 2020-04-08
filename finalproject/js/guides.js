const requestfile = "/finalproject/data/guides.json";
fetch(requestfile)
  .then(function (response) {
    return response.json()
  })
  .then(function (jsonObject) {
  
    // temporary checking for valid response and data parsing
    
    const guides=jsonObject['guides'];
    for (let i = 0; i < guides.length; i++) {
        let card = document.createElement('section');
        card.className = 'card';
       
        let imageDiv = document.createElement('div');

        let titleDiv = document.createElement("div");

        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let h3 = document.createElement('h3');
        let infoP = document.createElement('p');
        let yearsExperience = document.createElement('div');
        let certification = document.createElement('div');
        let email = document.createElement('div');
        let biography = document.createElement('div');
        

        h2.textContent = guides[i].name;
        h3.textContent = guides[i].motto;
        yearsExperience.textContent = "Experience: " + guides[i].yearsExperience +" years";
        certification.textContent = "Certification: " + guides[i].certification;
        email.textContent = "Email: " + guides[i].email;
        biography.textContent="Biography: " + guides[i].biography;


        image.setAttribute('src', "images/" + guides[i].photo);
        image.setAttribute('alt', "picture of: " + h2.textContent);

        titleDiv.appendChild(h2);
        imageDiv.appendChild(image);
        titleDiv.appendChild(imageDiv);
        titleDiv.appendChild(h3);
        infoP.appendChild(yearsExperience);
        infoP.appendChild(certification);
        infoP.appendChild(email);
        infoP.appendChild(biography);
        titleDiv.appendChild(infoP);
        
        card.appendChild(titleDiv)
        // card.appendChild(imageDiv)

        document.querySelector('div.cards').appendChild(card);
    }
  }
);