let nameMeal = document.getElementById("nameMeal");

//fonction qui renvoie une recette aléatoire via l'API
const emojiList = async () => {
  let requestString = `https://emoji-api.com/emojis?search=dog&access_key=e63b644430be1398fa2d795ccee0113fd8b7837e`;
  let data = await fetch(requestString);
  let response = await data.json();
  console.log(response);
};
emojiList();

//permet de récupérer 1 nom de recette aléatoire
//nameMeal.textContent = response.meals[0].strMeal;}
