let zdanie = prompt("Wpisz zdanie zawierające słowo 'amet'");
let target = "amet";
let replaceTarget = target.toUpperCase();

if (zdanie.includes(target)){
    var output = zdanie.replace(target, replaceTarget);
}

alert(output);