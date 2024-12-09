var question = document.querySelector(".question");

var isResponseDisplayed = false;

var response = document.createElement("p");
response.textContent = "pour faire plus d'oseille";
var body = document.querySelector("body");

question.addEventListener("click", () => {
  if (isResponseDisplayed === false) {
    body.appendChild(response);

    isResponseDisplayed = true;
  } else {
    body.removeChild(response);
    isResponseDisplayed = false;
  }
});
