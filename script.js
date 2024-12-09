function createPokemon() {
  var article = document.createElement("article");

  var title = document.createElement("h2");
  title.textContent = "Mew";

  var image = document.createElement("img");
  image.src = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/151.png";

  article.appendChild(title);
  article.appendChild(image);

  var body = document.querySelector("body");

  body.appendChild(article);
}

setTimeout(createPokemon, 5000);
