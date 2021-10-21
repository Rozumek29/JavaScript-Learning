function losuj(){
    let min = 50;
    let max = 250;
    random = Math.random();
    let wynik = Math.floor(Math.random() * (max - min + 1) + min)
    return wynik;
}
for (let i = 0; i < 25; i++){
    document.write(losuj() + "<br>");
}