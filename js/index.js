$("body").css("background-color", "#eeebdd");
$(".form-outline").hide();

$("#search-btn").click(() => {
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

$("#searchbar-inpt").bind("enterKey", function (e) {
  var page =
    "searchPage.html?movie=" + document.querySelector("#searchbar-inpt").value;
  redirectPage(page);
});

$("#searchbar-inpt").keyup(function (e) {
  if (e.keyCode == 13) {
    $(this).trigger("enterKey");
  }
});

$("#searchbar-inpt2").bind("enterKey", function (e) {
  var page =
    "searchPage.html?movie=" + document.querySelector("#searchbar-inpt2").value;
  redirectPage(page);
});

$("#searchbar-inpt2 ").keyup(function (e) {
  if (e.keyCode == 13) {
    $(this).trigger("enterKey");
  }
});

$(".burguer").click(() => {
  var menu = $(".menuBurguer");

  var altura = parseInt(
    menu.css("height").substring(0, menu.css("height").length - 2)
  );
  if (altura > 0) {
    menu.animate({ height: "toggle" }, 0);
  }
  if ((altura = 0)) {
    menu.animate({ height: "toggle" }, 0);
  }
});
