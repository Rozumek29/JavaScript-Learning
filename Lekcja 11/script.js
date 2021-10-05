var tablica = []
for (var i = 0; i <= 100; i++){
    if (i <= 49){
        tablica[i] = i+1;
    }else if (i >= 50){
        tablica[i] = 100 - (i - 50)
    }
}
for (var tablicaKey in tablica) {
    document.write(tablica[tablicaKey]+"<br>");
}