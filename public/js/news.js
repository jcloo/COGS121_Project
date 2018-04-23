
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	$('.clickMe').click(gotData);
}


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bebd5673446e40c0a0613cd3ea327a8d";


function setup() {
	noCanvas();
	loadJSON(url, gotData);
}

function gotData(data) {
	var articles = data.response.docs;

	for (var i = 0; i < articles.length; i++) {
		createElement('h1', articles[i].headline.main);
		createP(articles[i].snippet);
	}
}
