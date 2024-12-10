var pokemonData = {
  name: "Dracofeu",
  type: "feu",
  attack: 50,
  attackSpecial: "lance-flamme",
  defense: 60,
  resistance: "plante",
  image: "https://www.pokepedia.fr/images/thumb/1/17/Dracaufeu-RFVF.png/800px-Dracaufeu-RFVF.png",
};

var article = document.querySelector(".pokemon");

article.addEventListener("click", () => {
  var titleElement = document.createElement("h1");
  titleElement.textContent = pokemonData.name;

  article.appendChild(titleElement);

  var imageElement = document.createElement("img");
  imageElement.src = pokemonData.image;

  article.appendChild(imageElement);
});
