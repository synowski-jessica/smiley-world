const translateText = document.getElementById("translateText");
const translateEmoji = document.getElementById("translateEmoji");
const paragraph = document.querySelector("p").innerText;

wordsList = paragraph.split(", ");
console.log(wordsList);
console.log(wordsList.includes("sucre"));

for (let word = 0; word < wordsList.length; word++) {}

translateText.addEventListener("click", () => {
  paragraph.innerHTML = "🍎";
});
