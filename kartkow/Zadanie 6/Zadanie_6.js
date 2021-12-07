let date = new Date();

const monthNames = ["Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia"];
const weekNames= ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]

function daysIntoYear(date){
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}

document.write(
    "Dzisiaj jest "+ weekNames[date.getDay()]+", "+date.getDate()+" "+monthNames[date.getMonth()]+" "+date.getFullYear()+" roku. To jest "+daysIntoYear(date) + " dzień roku."
);