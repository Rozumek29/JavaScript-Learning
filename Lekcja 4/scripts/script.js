alert("Podaj oceny z przedmiotów");
polski = prompt("Podaj ocenę z polskiego");
matematyka = prompt("Podaj ocenę z Matematyka");
angielski = prompt("Podaj ocenę z Angielski");
wf = prompt("Podaj ocenę z wf");
if (Number.isNaN(polski) || Number.isNaN(matematyka) || Number.isNaN(angielski) || Number.isNaN(wf)){
    alert("Podane wartości muszą być liczbami");
}else {
    sum = Number.parseInt(polski) + Number.parseInt(matematyka) + Number.parseInt(angielski) + Number.parseInt(wf);
    srednia = sum/4;
    document.write("<table>" +
        "<tr>" +
        "<td>Polski</td>" +
        "<td>"+polski+"</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Angielski</td>" +
        "<td>"+angielski+"</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Matematyka</td>" +
        "<td>"+matematyka+"</td>" +
        "</tr>" +
        "<tr>" +
        "<td>WF</td>" +
        "<td>"+wf+"</td>" +
        "</tr>" +
        "</table>" + "<br>" + "<center>><h1>Średnia: "+srednia+"</h1></center"
    );
}