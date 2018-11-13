function getthenews(){

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
      'q': "NFL",
      'begin_date': "20170101",
      'end_date': "20181101",
      'sort': "newest",
      'fl': "headline",
      'facet_field': "article"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(response) {
      console.log(response);
      var mydocs = response.docs
      console.log(mydocs);
    }).fail(function(err) {
      throw err;
    });

}
     
getthenews();

