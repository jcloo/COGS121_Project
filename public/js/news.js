$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	//const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bebd5673446e40c0a0613cd3ea327a8d";
	const $articles = $('#articles');

	$('#refreshFeed').click(function(e) {
		e.preventDefault();
		console.log('button clicked');
		$.ajax({
			type: 'GET',
			url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bebd5673446e40c0a0613cd3ea327a8d',
			dataType: 'json',
			success: function(articles) {
				$.each(articles.response.docs, function(i, article){
					$articles.append(`<li>NY Times: <b>${articles.response.docs[i].headline.main}</b></li>`);
					console.log(articles.response.docs[i]);
				});
			}
		});
		$.ajax({
			type: 'GET',
			url: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4ee54ee8064c4fc4af6a51b03fe81d17',
			dataType: 'json',
			success: function(articles) {
				$.each(articles.articles, function(i, article){
					$articles.append(`<li>News API: ${articles.articles[i].title}, image: <img id='articleImg' src='${articles.articles[i].urlToImage}'</li>`);
					console.log(articles.articles[i]);
				});
			}
		});
	});
	console.log('test');
	//$('.clickMe').click(gotData);
};

/*
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
*/
