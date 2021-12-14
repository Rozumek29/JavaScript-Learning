let bg_color = "bg-danger";
let image_src = "assets/1.jpg";

function generateCard() {
    document.getElementById("card-body").style.backgroundColor = document.getElementById("own-color").value;
    document.getElementById("card-img").src = image_src;

    let header = document.getElementById("header").value;
    let text = document.getElementById("text").value;
    let sign = document.getElementById("sign").value;

    console.log(header);
    if (header == ""){
        document.getElementById("card-header").innerText = "Drogi Kubusiu."
    }else {
        document.getElementById("card-header").innerText = header
    }
    if (text == ""){
        document.getElementById("card-text").innerText = "Życzę ci wszystkiego najlepszego, dużo zdrowia, szczęścia, pomyślności oraz spełnienia marzeń."
    }else {
        document.getElementById("card-text").innerText = text
    }
    if (sign == ""){
        document.getElementById("card-sign").innerText = "Kacper Wyrozumialski"
    }else {
        document.getElementById("card-sign").innerText = sign
    }
}

function FBgColor(color) {
    switch (color) {
        case "red":
            document.getElementById("own-color").value="#d9534f";
            break;
        case "green":
            document.getElementById("own-color").value="#5cb85c";
            break;
        case "blue":
            document.getElementById("own-color").value="#0275d8";
            break;
    }
}

function Fimmage(x) {
    switch (x) {
        case 1:
            image_src = "assets/1.jpg"
            break;
        case 2:
            image_src = "assets/2.jpg"
            break;
        case 3:
            image_src = "assets/3.jpg"
            break;
    }
}