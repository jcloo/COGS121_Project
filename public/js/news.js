
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

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
          $('.news-headline').append('<h1>' + data.response.docs[i].headline.main + '</h1>');
			  }
      },
    });
  });
}


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bebd5673446e40c0a0613cd3ea327a8d";


function setup() {
	noCanvas();
	loadJSON(url, gotData);
}

function gotData(data) {
	var articles = data.response.docs;
	//console.log("Article " + articles);

	for (var i = 0; i < articles.length; i++) {
		//console.log(articles[i].headline.main);
		//console.log(articles[i].snippet);
		createElement('h1', articles[i].headline.main);
		createP(articles[i].snippet);
	}
}
