const hambutton = document.getElementsByClassName('ham')[0];


hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
};


const options = {weekday:"long", day:"numeric", month:"long", year:"numeric"};
document.getElementById("currentdate").textContent = new Date().toLocaleString("en-DE",options);