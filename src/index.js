function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  let apiKey = "690636a01a7b230fate74f93o05741f4";
  let context =
    "you are a great chef and love to write short recipes. your mission is to generate  a 4 line recipe in basic html and separate each line with a <br />. make sure to follow the user instruction.sign the recipe with`Shecodes AI` inside a <strong> element at the end of the recipe and NOT at the beginning";
  let prompt = `user instruction: generate a recipe of delicious food about ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
  
  axios.get(apiUrl).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
