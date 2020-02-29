
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
	});
    return vars;
}

document.getElementById('thanks').innerHTML = '<h1> Thank you, '+getUrlVars()['fname'].replace('+',' ') + ' for submitting a report.</h1>';