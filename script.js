/* script.js */
function updateQuote() {
  const quoteElement = document.getElementById("quote");
  const quotesArray = quotesData[currentLanguage] || quotesData["en"];
  const randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
  quoteElement.textContent = randomQuote;
}

document.addEventListener("DOMContentLoaded", function() {
  updateQuote();

  // Food recommendation logic with a fun message
  const recommendBtn = document.getElementById("recommend-btn");
  const foodSuggestionDiv = document.getElementById("food-suggestion");

  recommendBtn.addEventListener("click", function() {
    const currentFoodArray = foodData[currentLanguage] || foodData["en"];
    const randomFood = currentFoodArray[Math.floor(Math.random() * currentFoodArray.length)];
    let funMessage = "";
    switch (currentLanguage) {
      case "en":
        funMessage = `Enjoy your ${randomFood}!`;
        break;
      case "fr":
        funMessage = `Profitez de votre ${randomFood}!`;
        break;
      case "ar":
        funMessage = `استمتع ب${randomFood}!`;
        break;
      default:
        funMessage = `Enjoy your ${randomFood}!`;
    }
    foodSuggestionDiv.textContent = funMessage;
  });
});
