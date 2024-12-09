var body = document.querySelector("body");

function createParagraph(textParagraph) {
  var paragraph = document.createElement("p");
  paragraph.textContent = textParagraph;
  body.appendChild(paragraph);
}

createParagraph("Bonjour");

createParagraph("Hello");

createParagraph("Au revoir");
