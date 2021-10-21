function generateRandom(){
    return Math.floor(Math.random() * (99 - 30 + 1) + 30)
}

let a = generateRandom()
let b = generateRandom()
document.write("<div id=\"content\"> <h1>Losowa suma liczb:</h1>")
document.write("<h1>"+a + " + "+b+" = "+(a+b)+"<h1>")
document.write("</div>")