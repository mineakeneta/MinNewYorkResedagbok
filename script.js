// Hämtar formuläret, textfältet och elementet där svaret ska visas från HTML
const formular = document.getElementById("tips-formular");
const input = document.getElementById("tips-input");
const svar = document.getElementById("tips-svar");

// Kör funktionen när användaren skickar formuläret
formular.addEventListener("submit", function(event) {
  // Hindrar sidan från att laddas om när formuläret skickas
  event.preventDefault();

  // Visar tackmeddelandet på sidan
  svar.innerText = "Tack för ditt tips, jag ska se till att besöka det inför min nästa vistelse. ;) ";

  // Tömmer textfältet så att det är redo för ett nytt tips
  input.value = "";
});