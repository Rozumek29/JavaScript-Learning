let date1 = new Date();
let date2 = new Date();

function countDifference(){
    date1.setDate(document.getElementById("day1").value);
    date1.setMonth(document.getElementById("month1").value);
    date1.setFullYear(document.getElementById("year1").value);
    date2.setDate(document.getElementById("day2").value);
    date2.setMonth(document.getElementById("month2").value);
    date2.setFullYear(document.getElementById("year2").value);

    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    alert("Upłyneło "+diffDays+" dni");
}