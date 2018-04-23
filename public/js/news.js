<<<<<<< HEAD

=======
>>>>>>> gflo
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

<<<<<<< HEAD
	// $('.clickMe').click(gotData);

	$('.clickMe').click(() => {
    $.ajax({
      url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bebd5673446e40c0a0613cd3ea327a8d',
      type: 'GET',
      dataType : 'json',
      success: (data) => {
        console.log('You received some data!', data);
				const num_Articles = data.response.docs.length;
				for(i=0; i<num_Articles; i++) {
					const web_url = data.response.docs[i].web_url;
          $('.news-headline').append('<h1><a href="' + web_url + '">' + data.response.docs[i].headline.main + '</h1>');
			  }
      },
    });
  });
}


=======
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
>>>>>>> gflo
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bebd5673446e40c0a0613cd3ea327a8d";


function setup() {
	noCanvas();
	loadJSON(url, gotData);
}

function gotData(data) {
	var articles = data.response.docs;
<<<<<<< HEAD
	//console.log("Article " + articles);

	for (var i = 0; i < articles.length; i++) {
		//console.log(articles[i].headline.main);
		//console.log(articles[i].snippet);
=======

	for (var i = 0; i < articles.length; i++) {
>>>>>>> gflo
		createElement('h1', articles[i].headline.main);
		createP(articles[i].snippet);
	}
}
<<<<<<< HEAD
=======
*/
>>>>>>> gflo
