//ho selezionato il tag h1 e ho cambiato il suo contenuto con il metodo textContent

let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

//ho selezionato tutta la pagina html e ho aggiunto un evento click che mostra un alert
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
});

let myButton = document.querySelector("button");


//his prompt() function does more than alert(), asking the user to enter data, and storing it in a variable after the user clicks OK.
function setUserName() {
    const myName = prompt("Please enter your name.");
    //con prompt se faccio cancel mi restituisce null
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}

//e could call this initialization code, as it structures the app when it first loads.
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

//added an event listener to the button, so that when the button is clicked, the setUserName() function is run.
myButton.onclick = () => {
    setUserName();
};
