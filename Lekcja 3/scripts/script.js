int1 = Number.parseInt(prompt("Podaj pierwsza liczbę"));
int2 = Number.parseInt(prompt("Podaj drugą liczbe"));

if (Number.isNaN(int1) || Number.isNaN(int2)){
    alert("[ERROR] Podana wartość musi być liczbą")
    console.error("[ERROR] Podana wartość musi być liczbą")
    document.write("<h1>[ERROR] Podana wartość musi być liczbą</h1>")
}else {
    if (int2 !== 0){
        dzielenie = int1/int2;
    }else {
        dzielenie = "ERROR"
        alert("[ERROR], nie mozna dzielić przez 0");
        console.error("[ERROR], nie mozna dzielić przez 0")
    }
    dodawanie = int1 + int2;
    odejmowanie = int1 - int2;
    mnozenie = int1 * int2;

    document.write("<table>" +
        "<tr>" +
        "<td>Dodawanie</td>" +
        "<td>"+mnozenie+"</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Odejmowanie</td>" +
        "<td>"+odejmowanie+"</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Mnożenie</td>" +
        "<td>"+mnozenie+"</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Dzielenie</td>" +
        "<td>"+dzielenie+"</td>" +
        "</tr>" +
        "</table>"
    );
}
