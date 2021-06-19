$(document).ready(() => {
  const result =
    '<div class="col-12 resultadoItem d-inline-flex justify-content-between"><div class="resultadoImg col-4"></div><div class="resultadoText col-12 text-center"><div class="col-8 resultadoTitle"><h1>Cruella</h1></div><div class="col-8 resultadoDesc"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit ducimus repellat similique labore numquam, excepturi sint accusamus delectus magni iste reiciendis impedit earum consectetur, error nobis veritatis perferendis consequuntur perspiciatis provident dolorem laboriosam cumque veniam fuga. Voluptatum nulla dicta perspiciatis maxime provident deleniti officiis.</p></div><div class="resultadoBtn col-8"><button type="button" class="btn btn-dark">Saiba mais +</button></div></div></div>';

  const queryStr = window.location.href;
  const usp = new URLSearchParams(queryStr);

  const movie = usp.get("movie");

  for (const [key, value] of usp) {
    console.log(`${key} => ${value}`);
  }

  $("#caixaResultados").innerHTML = result;
  console.log(result);
  console.log($("#caixaResultados").innerHTML);
});
