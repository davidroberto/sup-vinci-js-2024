var fullName = "David Robert";
var age = 34;
var isAuthenticated = true;

var langages = ["PHP", "Javascript", "Rust", "react.js"];

// j'utilise l'instruction forEach pour faire une boucle.
// foreach me donnera pour chaque tour de boucle la valeur de l'élément
// je dois juste lui donner le nom de la variable (ici langage) dans laquelle la stocker

// pour chaque tour de boucle, j'éxecute une fonction, qui fait un
// console.log du langage
langages.forEach((langage) => {
  console.log(langage);
});
