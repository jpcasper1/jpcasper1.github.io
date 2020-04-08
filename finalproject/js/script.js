const hambutton = document.getElementsByClassName('hammenu')[0];

hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("sidebar")[0].classList.toggle("responsive");
};


function getQuote(element){
	fetch("/finalproject/data/quotes.json").then(function(response){
	  return response.json()
	}).then(function (jsonObject){
	  let e = document.getElementById(element);
	  e.innerHTML='';
	  let quotes = jsonObject.quotes;
	  let quote = quotes[Math.floor(Math.random() * quotes.length)];

	  let quotequote = document.createElement('span');
	  quotequote.className = 'quotequote';
	  quotequote.textContent = quote.quote

	  let author = document.createElement('span');
	  author.className = 'quoteauthor';
	  author.textContent = ' -'+quote.author

	  e.appendChild(quotequote);
	  e.appendChild(author);


	  //document.getElementById(element).textContent = quote.quote +' -'+quote.author;
	})
  }
  
if(document.getElementById('refreshingquotebar')) getQuote('refreshingquotebar')