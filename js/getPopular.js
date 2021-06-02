$(document).ready(getPopMovies());

function compare(aa, b) {
  aa = parseInt(aa.release_date.replaceAll("-", ""));
  b = parseInt(b.release_date.replaceAll("-", ""));
  if (aa < b) {
    return 1;
  }
  if (aa > b) {
    return -1;
  }
  return 0;
}

function getPopMovies() {
  var resJSON;
  rurl =
    "https://api.themoviedb.org/3/movie/popular?api_key=b41d5d290ccfdbf5e8f85a8f2e54eba3&language=pt-BR&page=1&region=BR";

  fetch(rurl)
    .then((res) => res.json())
    .then((data) => (resJSON = data))
    .catch((err) => console.error("ERRO: ", err));

  var results = resJSON["results"];
  var sortedR = results.sort(compare);

  console.log("results = ", results);

  /*for (let i = 0; i < results.length; i++) {
  console.log(sortedR[i]);
}*/

  var popListFinal = [];

  for (let i = 0; i <= 3; i++) {
    popListFinal.push(sortedR[i]);
  }

  for (let i = 0; i < popListFinal.length; i++) {
    $(".movie-title")[i].innerHTML = popListFinal[i]["title"];
  }
}
