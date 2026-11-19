const formular = document.getElementById("tips-formular");
const input = document.getElementById("tips-input");
const svar = document.getElementById("tips-svar");

formular.addEventListener("submit", function(event) {
  event.preventDefault();
  
  svar.innerText = "Tack för ditt tips, jag ska se till att besöka det inför min nästa vistelse. ;) ";
  input.value = "";
});