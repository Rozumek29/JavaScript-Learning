let input = prompt("Wpisz dowolny tekst np Lorem Ipsum");
let lettersInRow = 80;
let inRow = 0;
for (let i = 0; i < input.length ; i++) {
    if (inRow >= lettersInRow){
        console.log("ADASD")
        document.write("-<br>");
        inRow = 0;
    }
    inRow++;
    document.write(input[i])
}