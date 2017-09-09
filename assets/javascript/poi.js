
$("#find").on("click",function(){

var place = $("#place").val();
var queryURL = "https://api.sygictravelapi.com/1.0/en/places/list?query="+place+"&level=poi&limit=7"

$.ajax({
    method: "GET",
    url: queryURL,
    headers: {
        "x-api-key":"N8heiy7BHB7WXPkzfIj6CalObVtTTWiUDwGMPW08"
    }
  })
  .done(function( response ) {
  	console.log(response);
    var places = response.data.places;
    $("#displayPoi").empty();
    for (var i = 0; i < places.length; i++){
     
      if(places[i].thumbnail_url != null && places[i].thumbnail_url !==''
        && places[i].perex != null && places[i].perex !=='' ){
        var newDiv = $('<div class="panel panel-default">');
        newDiv.addClass("new-display");


        var image = $("<img>");
        image.attr("src", places[i].thumbnail_url);
        newDiv.append(image);

        var title = $('<div class="panel-heading">');
        title.addClass("nameDisplay");
        title.html(places[i].name);
        newDiv.append(title);
        $("#displayTitle").append(newDiv);

        var descDiv = $('<div class="panel-body">');
        descDiv.html(places[i].perex);
        newDiv.append(descDiv);
        $("#displayPoi").append(newDiv);

        var infoButton = $('<a class="waves-effect waves-light btn" target="_blank" id="get-info">Get More Info</a>');
        infoButton.attr('href', places[i].url);
        newDiv.append(infoButton);
        $("#displayButton").append(newDiv);

      }
      
    }
  });

});

