function oblicz(){
    var liczba_gosci = document.getElementById("goscie").value;
    var poprawiny = document.getElementById("poprawiny").checked;

    if (liczba_gosci > 0){
        let koszt = liczba_gosci * 100;
        if (poprawiny){
            koszt = koszt*1.3;
        }
        document.getElementById("wynik").innerText = "Koszt twojego wesela to "+koszt+" złoych."
    }
}