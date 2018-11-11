function displaynflteams(){
    
    var queryURL = "https://api.fantasydata.net/v3/nfl/scores/JSON/GameStatsByWeek/2018/8?key=ad398993c55d46449bde67a4095fef1b";

    console.log(queryURL); 
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
    .done(function(response) {
        var results = response.data; 
        if (results == ""){
          alert("There are no responses");
        }
        var tr;
        for (var i=0; i<results.length; i++){
            tr = $('<tr/>');
            tr.append("<td>" + data[i].HomeTeam + "</td>");
            tr.append("<td>" + data[i].AwayScore + "</td>");
            tr.append("<td>" + data[i].HomeScore + "</td>");
            $('table').append(tr);
        }
    });
}