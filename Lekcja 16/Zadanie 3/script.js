let x = prompt("Podaj tekst");
let samogloski = ['a', 'ą', 'e', 'ę', 'i', 'o', 'u', 'ó', 'y'];
let suma = 0;

for (var i = 0; i <= x.length; i++){
    if (samogloski.includes(x[i])){
        suma++;
    }
}

alert("Liczba samogłosek w tekście = "+suma)