const rurl =
  "https://api.themoviedb.org/3/movie/popular?api_key=b41d5d290ccfdbf5e8f85a8f2e54eba3&language=pt&page=1&region=BR";

$(document).ready(loadPopularMovies(rurl));

function loadPopularMovies(rurl) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var reqJSON = JSON.parse(xhttp.responseText);

      var results = reqJSON.results;

      function getObjLenght(Obj) {
        var key,
          count = 0;

        for (key in Obj) {
          if (Obj.hasOwnProperty(key)) count++;
        }
        objectLenght = count;
        return objectLenght;
      }
      var remove = [];
      for (let i = 0; i <= 3; i++) {
        var ok = 0;

        while (ok == 0) {
          var numAleatorio = Math.round(
            Math.random() * (getObjLenght(results) - 1)
          );

          for (let i = 0; i < remove.length; i++) {
            if (numAleatorio == remove[i]) {
              ok = 0;
              break;
            } else {
              ok = 1;
            }
          }

          if (remove.length == 0) {
            ok = 1;
          }

          if (results[numAleatorio].overview.trim().length == 0) {
            ok = 0;
          }
        }
        remove.push(numAleatorio);
        $(".movie-title")[i].innerHTML = results[numAleatorio].title;
        $(".movie-desc")[i].innerHTML = results[numAleatorio].overview;
        $(".notaPopular .notaFilme")[i].innerHTML =
          results[numAleatorio].vote_average;

        item = "#carouselItem" + [i + 1];

        bgURL =
          "https://image.tmdb.org/t/p/original" +
          results[numAleatorio].backdrop_path;
        bgimg =
          'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.5)), url("' +
          bgURL +
          '")';

        document.querySelector(item).style.backgroundImage = bgimg;
      }
    }
  };
  xhttp.open("GET", rurl);
  xhttp.send();
}
