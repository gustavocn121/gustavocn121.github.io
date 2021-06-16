//SEÇÃO: NO CINEMA
const np_url =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=b41d5d290ccfdbf5e8f85a8f2e54eba3&language=pt-BR";

$(document).ready(() => {
  loadNP();
});

function loadNP() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var reqJSON = JSON.parse(xhttp.responseText);
      var results = reqJSON.results;
      for (let i = 0; i < 4; i++) {
        var link = "https://www.themoviedb.org/movie/" + results[i].id;
        document.querySelectorAll(".saiba-mais")[i].setAttribute("href", link);
        document
          .querySelectorAll(".saiba-mais")
          [i].setAttribute("target", "_blank");

        // TÍTULO FILME
        $(".card-title")[i].innerHTML = results[i].title;
        var desc = results[i].overview;

        // DESCRIÇÃO FILME
        if (desc.length >= 300) {
          $(".card-text")[i].innerHTML = desc.substring(0, 200) + "...";
        } else {
          $(".card-text")[i].innerHTML = desc;
        }

        //IMAGEM/POSTER FILME
        let imgURL =
          "https://image.tmdb.org/t/p/original" + results[i].poster_path;
        $(".card-img-top")[i].setAttribute("src", imgURL);

        //TAG GÊNERO
        var genre_ids = results[i].genre_ids;

        getGenreName(genre_ids);
        function getGenreName(genre_ids) {
          var genreList_URL =
            "https://api.themoviedb.org/3/genre/movie/list?api_key=b41d5d290ccfdbf5e8f85a8f2e54eba3&language=pt-BR";
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              var RJSON = JSON.parse(xhttp.responseText);
              var genreList = new Object();
              genreList = RJSON.genres;
              function getObjLenght(Obj) {
                var key,
                  count = 0;

                for (key in Obj) {
                  if (Obj.hasOwnProperty(key)) count++;
                }
                objectLenght = count;
                return objectLenght;
              }

              for (let k = 0; k < genre_ids.length; k++) {
                for (var j = 0; j < getObjLenght(genreList); j++) {
                  if (genreList[j].id == genre_ids[k]) {
                    var genreName = genreList[j].name;

                    $(".tagDiv")[i].innerHTML =
                      $(".tagDiv")[i].innerHTML +
                      '<p class="tag">' +
                      genreName +
                      "</p>";
                    break;
                  }
                }
              }
            }
          };

          xhttp.open("GET", genreList_URL);
          xhttp.send();
        }
      }
    }
  };
  xhttp.open("GET", np_url);
  xhttp.send();
}
