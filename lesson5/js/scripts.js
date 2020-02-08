const hambutton = document.getElementsByClassName('hammenu')[0];

hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
};
document.getElementById("year").innerHTML = new Date().getFullYear();

const options = {weekday:"long", day:"numeric", month:"long", year:"numeric"};
document.getElementById("currentdate").textContent = new Date().toLocaleString("en-DE",options);

    var d = new Date();
	if(d.getDay() == 6) {document.getElementById("announce").style.display="block";}
	else{document.getElementById("announce").style.display="none";}