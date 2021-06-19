$(document).ready(() => {
  loadSearchResults();
});

function loadSearchResults() {
  const queryStr = document.location.search.substring(1);
  const usp = new URLSearchParams(queryStr);

  const movie = usp.get("movie");

  var searchURL = `https://api.themoviedb.org/3/search/movie?api_key=b41d5d290ccfdbf5e8f85a8f2e54eba3&language=pt-BR&query=${movie}&page=1&include_adult=false&region=pt-BR`;
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

      if (getObjLenght(results) > 0) {
        for (let i = 0; i < getObjLenght(results); i++) {
          if (i >= 3) {
            break;
          }
          if (results[i].overview.length == 0) {
            results[i].overview = "Sinopse ainda não disponível...";
          }
          if (results[i].title.length == 0) {
            results[i].title = "Título não disponível";
          }

          var item = `<div id="item${i}" class="col-12 resultadoItem d-lg-inline-flex d-sm-block justify-content-between">
                              <div id="img${i}" class="resultadoImg col-lg-4 col-sm-12">
                              </div>
                              <div  class="resultadoText col-12 text-center">
                                  <div class="col-lg-8 col-sm-12 resultadoTitle">
                                      <h1>${results[i].title}</h1>
                                  </div>
                                  <div class="col-lg-8 col-sm-12 resultadoDesc">
                                      <p>${results[i].overview}</p>
                                  </div>
                                  <div class="resultadoBtn col-lg-8 col-sm-12">
                                      <a id="btn${i}" href="#" class="btn btn-dark">Saiba mais +</a>
                                  </div>
                              </div>
                          </div>
      `;

          document.querySelector("#resultadosBusca").innerHTML =
            document.querySelector("#resultadosBusca").innerHTML + item;

          var bt = "#btn" + i;
          var it = "#item" + i;
          var im = "#img" + i;

          var link = `https://themoviedb.org/movie/${results[i].id}`;
          document.querySelector(bt).setAttribute("href", link);
          document.querySelector(bt).setAttribute("target", "_blank");
          var bgURL =
            "https://image.tmdb.org/t/p/original" + results[i].backdrop_path;

          var bgImg = `linear-gradient(rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.2)), url("${bgURL}")`;
          $(it).css("background-image", bgImg);

          var imgUrl =
            "https://image.tmdb.org/t/p/original" + results[i].poster_path;

          var posterImg = `url("${imgUrl}")`;
          $(im).css("background-image", posterImg);
        }
      } else {
        document.querySelector(
          "#resultadosBusca"
        ).innerHTML = `<h1 style="font-size: large;" class="msgErro col-12" >Nenhum resultado para o filme "${movie}"!!</h1>`;
      }
      var main = $("main");
      var header = $("header");
      var hh = main.css("height").substring(0, main.css("height").length - 2);

      if (hh < screen.height) {
        var newHeight = `${
          screen.height -
          header.css("height").substring(0, header.css("height").length - 2)
        }px`;
        main.css("height", newHeight);
      }
    }
  };
  xhttp.open("GET", searchURL);
  xhttp.send();
}
