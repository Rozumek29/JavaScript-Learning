function kwadrat(){
    let a = Number.parseInt(document.getElementById("kw_a").value);
    document.getElementById("kwadrat_wynik").innerHTML = "<h5>Pole kwadratu: "+(a*a)+"</h5><h5>Obwód kwadratu: "+(4*a)+"</h5>";
}

function trojkat(){
    let a = Number.parseInt(document.getElementById("tr_a").value);
    let h = Number.parseInt(document.getElementById("tr_h").value);

    document.getElementById("trojkat_wynik").innerHTML = "<h5>Pole Trójkąta: "+(a*h)+"</h5>"+"<h5>Obwód Trójkąta:"+(3*a)+"</h5>";
}

function trapez(){
    let a = Number.parseInt(document.getElementById("tp_a").value);
    let b = Number.parseInt(document.getElementById("tp_b").value);
    let c = Number.parseInt(document.getElementById("tp_c").value);
    let h = Number.parseInt(document.getElementById("tp_h").value);

    document.getElementById("trapez_wynik").innerHTML = "<h5>Pole Trapezu: "+(((a+b)*h)/2)+"</h5>"+"<h5>Obwód Trapezu:"+(a+b+c)+"</h5>";
}

function kolo(){
    let r = Number.parseInt(document.getElementById("ko_r").value);
    let pi = Math.PI;

    document.getElementById("kolo_wynik").innerHTML = "<h5>Pole Koła: "+Math.pow((pi*r), 2).toString()+"<h5>Obwód Koła:"+(2*pi*r)+"</h5>";
}3