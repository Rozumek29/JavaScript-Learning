dzien = prompt("Podaj dzień tgodnia")
switch (dzien){
    case "piątek":
        alert("Piątek weekendu początek")
        break
    case "sobota":
    case "niedziela":
        alert("Miłego weekendu");
        break;
    default:
        alert("Miłej pracy");
}