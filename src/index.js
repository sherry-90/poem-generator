function generateRecipe(event) {
  event.preventDefault();
  new Typewriter("#recipe", {
    strings: "delicious food",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}
let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
