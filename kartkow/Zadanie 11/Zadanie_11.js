let x = Number.parseInt(prompt("Podaj liczbe"));
if (Number.isNaN(x)){
    alert("To co wpisałeś nie jest liczbą")
}else {
    let z = (Math.pow(x, 5)) + (Math.pow(x, 3)) - Math.sqrt(x);
    alert(z.toFixed(2));
}


