$("body").css("background-color", "#eeebdd");
$(".form-outline").hide();

$("#search-btn").click(() => {
  // $(".form-outline").toggle();
  $(".form-outline").animate({ width: "toggle" }, 350);
  var element = document.getElementById("search-btn"),
    style = window.getComputedStyle(element),
    img = style.getPropertyValue("background-image");

  if (img == 'url("' + window.location.href + 'img/lupa.svg")') {
    $("#search-btn").css("background-image", "url('/img/closeBtn.png')");
  } else if (img == 'url("' + window.location.href + 'img/closeBtn.png")') {
    $("#search-btn").css("background-image", "url('/img/lupa.svg')");
  }

  $("#searchbar-inpt").focus();
});

function redirectPage(link) {
  window.location.replace(link);
}

$("#searchbar-inpt").change((e) => {
  var filmeBuscar = e.target.value;
  console.log(filmeBuscar);
});

$("#populares").css("background-img");
