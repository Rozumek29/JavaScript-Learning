let email = prompt("Podaj adres email.");
let domain = email.slice(email.indexOf('@')+1);
alert("Twoja domena to: "+domain);
