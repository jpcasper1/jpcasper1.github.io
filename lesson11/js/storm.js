function adjustRating(severity) {
    document.getElementById("severityvalue").innerHTML = severity;
}


document.getElementById("fullName").oninvalid = function(event){
event.target.setCustomValidity('This must be longer than 5 characters, with no numbers.')
event.target.style.borderBottom = '3px solid red';
}