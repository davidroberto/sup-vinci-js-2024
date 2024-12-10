var pokemonData = {
  name: "Dracofeu",
  type: "feu",
  attack: 50,
  defense: 60,
  attackSpecial: "lance-flamme",
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

  var typeElement = document.createElement("p");
  typeElement.textContent = "Type : " + pokemonData.type;

  article.appendChild(typeElement);

  var attackElement = document.createElement("p");
  attackElement.textContent = "Attaque : " + pokemonData.attack;

  article.appendChild(attackElement);

  var defenseElement = document.createElement("p");
  defenseElement.textContent = "Défense : " + pokemonData.attack;

  article.appendChild(defenseElement);

  var attackSpecialElement = document.createElement("p");
  attackSpecialElement.textContent = "Attaque spéciale : " + pokemonData.attackSpecial;

  article.appendChild(attackSpecialElement);

  var resistanceElement = document.createElement("p");
  resistanceElement.textContent = "Résistance : " + pokemonData.resistance;

  article.appendChild(resistanceElement);
});
