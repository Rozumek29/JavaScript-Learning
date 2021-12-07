let alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9']

let a = Math.floor(Math.random() * (15 - 7)) + 7;

let email = "";

for (let i = 0; i <= a ; i++) {
    let x = Math.floor(Math.random() * (alfabet.length - 1)) + 1;
    if (i === 0){
        email += alfabet[x].toUpperCase();
    }else {
        email += alfabet[x];
    }
}

email += "@testowa.pl"

alert("Twoj losowy adres email to \n "+email);
