// j'utilise l'"objet" "document"
// qui me permet d'utiliser des fonctionnalité sur le DOM
//(cibler un élement HTML, en créer un, en supprimer un etc)

// le DOM est une sorte de "schéma" du HTML que le navigateur génère
// et qui permet au javascript de manipuler le HTML

// ici j'utilise la "fonction" getElementById, qui me permet
// de trouver dans le DOM (donc dans le HTML) un élément par rapport à son id

// une fois trouvé, je stocke l'élément dans une variable
var button1 = document.getElementById("button1");

// j'utilise la référence vers le bouton (donc ma variable)
// et je lui ajoute un event listener
// qui executera une fonction au click sur le bouton
button1.addEventListener("click", () => {
  console.log("hello");
});
