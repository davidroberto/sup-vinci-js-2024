var button1 = document.getElementById("button1");

button1.addEventListener("click", () => {
  var paragraph = document.createElement("p");
  paragraph.textContent = "Bravo, tu as bien cliqué sur le bouton";

  var body = document.getElementById("body");
  body.appendChild(paragraph);
});
