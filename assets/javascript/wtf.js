function buildQueryURL() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    var queryParams = { "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931" };
    queryParams.q = "NFL";
    queryParams.begin_date = "20170101";
    queryParams.end_date = "20180101";
    return queryURL + $.param(queryParams);
    }
  function updatePage(NFLNews) {
    var numArticles = 3
  
    for (var i = 0; i < numArticles; i++) {
      var article = NFLNews.response.docs[i];
      var headline = article.headline;
      console.log(headline.main)
      var headlinelink = article.web_url;
      console.log(headlinelink)
    }
}
 
    var queryURL = buildQueryURL();
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(updatePage);
 