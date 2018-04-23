// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {


	// name listener
	$("").click();

	let $articles = $('#articles');

	$("button").click(function(){
	        $.getJSON("https://newsapi.org/v2/top-headlines?country=us&apiKey=4ee54ee8064c4fc4af6a51b03fe81d17", function(result){
	            $.each(result, function(i, field){
	                $($articles).append(field.title + " ");
	            });
	        });
	    });
	$.ajax({
		dataType: 'json',
		url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=4ee54ee8064c4fc4af6a51b03fe81d17',
		success: (articles) => {
				$.each(articles, (i, article) => {
					$articles.append(`<li>name: ${article.title}</li>`);
				});
		}
	});

}
