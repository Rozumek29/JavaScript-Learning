const $name = prompt("Podaj swoję imię:", "Andrzej");
const $surname = prompt("Podaj swoję nazwisko:", "Kowalski");
const $email = prompt("Podaj swój email", "andrzejkowalski@gmail.com");
const $address = prompt("Podaj swój adres zamieszkania", "Warszawa, kowalskiego 1");
document.write("<table>" +
    "<tr>" +
    "<td>Imię</td>" +
    "<td>"+$name+"</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Nazwisko</td>" +
    "<td>"+$surname+"</td>" +
    "</tr>" +
    "<tr>" +
    "<td>E-Mail</td>" +
    "<td>"+$email+"</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Adres</td>" +
    "<td>"+$address+"</td>" +
    "</tr>" +
    "</table>"
);