const options = {day:"numeric", weekday:"long", month:"long", year:"numeric"};
document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("currentdate").textContent = new Date(document.lastModified).toLocaleDateString("en-US",options);