$(document).ready(() => {
  const queryStr = window.location.href;
  const usp = new URLSearchParams(queryStr);

  const movie = usp.get("movie");

  for (const [key, value] of usp) {
    console.log(`${key} => ${value}`);
  }
});
