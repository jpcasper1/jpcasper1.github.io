var d = new Date();

const hambutton = document.getElementsByClassName('hammenu')[0];

hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
};
document.getElementById("year").innerHTML = d.getFullYear();

const options = {weekday:"long", day:"numeric", month:"long", year:"numeric"};
document.getElementById("currentdate").textContent = d.toLocaleString("en-DE",options);

    
	if(d.getDay() == 5) {document.getElementById("announce").style.display="block";}
	else{document.getElementById("announce").style.display="none";}