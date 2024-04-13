//ho selezionato il tag h1 e ho cambiato il suo contenuto con il metodo textContent
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

//ho selezionato tutta la pagina html e ho aggiunto un evento click che mostra un alert
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
});