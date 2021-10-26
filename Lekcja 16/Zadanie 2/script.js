var x = prompt("Podaj Tekst") ;
var y =  prompt("Podaj szukaną frazę");

if (x.includes(y)){
    alert("Podany tekst posiada frazę " + y)
}else {
    alert("Podany tekst nie posiada frazy " + y)
}