let zdanie = prompt("Wpisz dowolne zdanie");
let wyraz = prompt("Wpisz dowolny wyraz");

if (zdanie.includes(wyraz)){
    alert("Zdanie zawiera wyraz "+ wyraz)
}else {
    alert("Zdanie nie zawiera wyrazu "+ wyraz);
}