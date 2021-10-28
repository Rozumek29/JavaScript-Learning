function setText(){
    let text = document.getElementById("text").value;
    document.getElementById("krolikTestowy").innerText = text;
}

function setColor(color){
    switch (color){
        case "red":
            document.getElementById("krolikTestowy").style.backgroundColor = "red";
            break;
        case "blue":
            document.getElementById("krolikTestowy").style.backgroundColor = "blue";
            break;
        case "yellow":
            document.getElementById("krolikTestowy").style.backgroundColor = "yellow";
            break;

    }
}

function setBorder(){
    let borderType = document.getElementById("borderType").value;
    switch (borderType){
        case "Kropkowane":
            document.getElementById("krolikTestowy").style.border = "dotted 1px black";
            break;
        case "Kreskowane":
            document.getElementById("krolikTestowy").style.border = "dashed 1px black";
            break;
        case "Ciągłe":
            document.getElementById("krolikTestowy").style.border = "solid 1px black";
            break;
    }
}

function setFontSize(){
    let size = document.getElementById("fontSize").value
    document.getElementById("krolikTestowy").style.fontSize = size+"px";
}

function setBorderCollor(){
    let collor = document.getElementById("color_picker").value;
    document.getElementById("krolikTestowy").style.borderColor = collor;
}

function setBorderSize(){
    let size = document.getElementById("borderSize").value;
    document.getElementById("krolikTestowy").style.borderWidth = size+"px";
}
function UpperCase(type){
    switch (type){
        case "uppercase":
            document.getElementById("krolikTestowy").style.textTransform = "uppercase";
            break;
        case "none":
            document.getElementById("krolikTestowy").style.textTransform = "none";
            break;
    }

}

function fontWeight(){

    document.getElementById("krolikTestowy").style.fontWeight = "normal";
    document.getElementById("krolikTestowy").style.fontStyle = "normal";
    document.getElementById("krolikTestowy").style.textDecoration = "none";

    if (document.getElementById("cBold").checked == true){
        document.getElementById("krolikTestowy").style.fontWeight = "bold";
    }
    if (document.getElementById("cItalic").checked == true){
        document.getElementById("krolikTestowy").style.fontStyle = "italic";
    }
    if (document.getElementById("cUnderline").checked == true){
        document.getElementById("krolikTestowy").style.textDecoration = "underline";
    }
}