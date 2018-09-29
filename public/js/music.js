$(function(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=d5b5be6843bcccdc67b939f08a9b21fa&format=json",
        "method": "GET"
      }
      
      $.ajax(settings).done(function (response) {

        $(response).each(function( index ) {
            let tracks = $(this)[index]
            

            $(tracks).each(function( index ) {
                let tracksName = tracks[0]

                console.log(tracksName, index)

                let tracksHTML = `
                <div class="track">
                    ${tracksName.name}
                </div>`  ;
                $('#containerTracks').append(tracksHTML)
            })  


          })

      });
})