document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault();
    const dateEntered = new Date(document.getElementById("fecha").value);

    const validDate = new Date("2019-05-05");

    if (isNaN(dateEntered.getTime())) {
        alert("Por favor, ingrese una fecha válida.");
    } else if (
        dateEntered.getDate() !== validDate.getDate() ||
        dateEntered.getMonth() !== validDate.getMonth() ||
        dateEntered.getFullYear() !== validDate.getFullYear()
    ) {
        alert("Fecha incorrecta☹️💔");
    } else {
        alert("Acertaste❤️🥹");
        window.location.href = "card.html";
    }

});
