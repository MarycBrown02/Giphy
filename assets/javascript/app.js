

          var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5";

          $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            console.log(response);
          });