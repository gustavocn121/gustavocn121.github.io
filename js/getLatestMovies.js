const url_latest =
  "https://api.themoviedb.org/3/movie/latest?api_key=b41d5d290ccfdbf5e8f85a8f2e54eba3";

$(document).ready(loadPopularMovies(rurl));

function getMovieDetails(movie_id) {
  var url_details =
    "https://api.themoviedb.org/3/movie/" +
    movie_id +
    "?api_key=b41d5d290ccfdbf5e8f85a8f2e54eba3&language=pt-BR&append_to_response=videos,images";

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var reqJSON = JSON.parse(xhttp.responseText);
      var a = reqJSON.a;
    }
  };
  xhttp.open("GET", url_details);
  xhttp.send();
}

function loadPopularMovies(url_latest) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var reqJSON = JSON.parse(xhttp.responseText);
      var latest_id = reqJSON.id;
    }
  };
  xhttp.open("GET", rurl);
  xhttp.send();
}
