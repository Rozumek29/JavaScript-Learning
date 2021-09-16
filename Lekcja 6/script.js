imie = prompt("Podaj imię:");
if (imie.length > 0){
    alert(imie);
    document.write("<h1>Witaj "+imie+"</h1>");
}else {
    alert("Podaj to imię debilu...")
    document.write("<h1>[ERROR]</h1>");
}