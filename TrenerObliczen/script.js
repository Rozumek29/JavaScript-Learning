let operacja = "dodawanie";
let dzialanie, wynik, test;
let zadanWTescie = 10;
let zadan = 1;
let punkty = 0;

window.onload = losuj(), changeBackground("blue");

function sprawdz(){
    if (document.getElementById("wynik").value == wynik){
        if (test){
            punkty++;
            generateRandomOperation();
        }else {
            losuj();
        }
        changeBackground("green");
    } else {
        if (test){
            losuj()
        }
        changeBackground("red");
    }
    zadan++;
    console.log(zadan)
    document.getElementById("points").innerText = "Twoje punkty: "+punkty+" \n Zadanie: "+zadan+" / "+zadanWTescie;
    if (zadan >= zadanWTescie && test){
        test = false;
        if (punkty <= 5){
            alert("Twój wynik to "+ punkty+"\nMogło być lepiej :(")
        }else if (punkty = 10){
            alert("Twój wynik to "+ punkty+"\nPerfekcyjnie ! :D")
        } else if (punkty > 5 && punkty < 9){
            alert("Twój wynik to "+ punkty+"\nBardzo dobrze ! :)")
        }
        zadan = 1;
        punkty = 0;
        document.getElementById("points").innerText = "Twoje punkty: "+punkty+" \n Zadanie: "+zadan+" / "+zadanWTescie;
    }
    wynik = 0;
}

function setDzialanie(operacjax){
    test = false;
    console.log(test);
    changeBackground("blue");
    document.getElementById("points").hidden = true;
    operacja = operacjax;
    losuj();
}

function losuj(){
    let a = generateRandom(1, 99);
    let b;

    switch (operacja){
        case "dodawanie":
            b = generateRandom(1,99)
            dzialanie = ""+a+" + "+b+"=";
            wynik = a+b;
            break;
        case "odejmowanie":
            b = generateRandom(1, a)
            dzialanie = a+" - "+b+"=";
            wynik = a-b;
            break;
        case "mnozenie":
            a = generateRandom(1, 10);
            b = generateRandom(1, 10);
            dzialanie = a+" * "+b+"=";
            wynik = a*b;
            break;
        case "dzielenie":
            do {
                b = generateRandom(1,99);
            }while (a % b);
            dzialanie = a+" / "+b+"=";
            wynik = a/b;
            break;
    }

    document.getElementById("obliczenia").innerText= dzialanie;
}

function generateRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function changeBackground(color){
    let container = document.getElementById("container");
    let navBar = document.getElementById("navbar");
    container.classList.remove("container_blue_background");
    container.classList.remove("container_green_background");
    container.classList.remove("container_red_background");
    navBar.classList.remove("nav_blue_background");
    navBar.classList.remove("nav_green_background");
    navBar.classList.remove("nav_red_background");

    switch (color){
        case "blue":
            container.classList.add("container_blue_background");
            navBar.classList.add("nav_blue_background");
            break;
        case "green":
            container.classList.add("container_green_background");
            navBar.classList.add("nav_green_background");
            break;
        case "red":
            container.classList.add("container_red_background");
            navBar.classList.add("nav_red_background");
            break;
    }
}

function startTest(){
    generateRandomOperation();
    punkty = 0;
    zadan = 1;
    document.getElementById("points").hidden = false;
    document.getElementById("points").innerText = "Twoje punkty: "+punkty+" \n Zadanie: "+zadan+" / "+zadanWTescie;
    test = true;
}

function generateRandomOperation(){
        let x = generateRandom(0, 3);
        switch (x){
            case 0:
                operacja = "dodawanie";
                break;
            case 1:
                operacja = "odejmowanie";
                break;
            case 2:
                operacja = "mnozenie";
                break;
            case 3:
                operacja = "dzielenie";
                break;
        }
        losuj();
}
