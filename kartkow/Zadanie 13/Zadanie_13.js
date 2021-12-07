let date = new Date();
let months = ["Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia"];

function getMonths(x) {
    return months[x];
}

function getImieniny(day, month) {
    let imieninyX = Array.from(imieniny);
    return imieninyX[month][day]
}

document.write("Dzisiaj jest " + date.getDate() + " " + getMonths(date.getMonth()) + " " + date.getFullYear() + "roku. Imieniny: " + getImieniny(date.getDate(), date.getMonth()))