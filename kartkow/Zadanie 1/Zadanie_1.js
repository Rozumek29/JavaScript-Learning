let zadanie = prompt("Wpisz zdanie");
let samogloski = ['a', 'ą', 'e', 'ę', 'i', 'o', 'u', 'ó', 'y'];
let map = new Map();

samogloski.forEach(item => map.set(item, 0));

for (let i = 0; i < zadanie.length; i++) {
    if (samogloski.includes(zadanie[i])) {
        let x = map.get(zadanie[i]);
        map.set(zadanie[i], x +1);
    }
}

let output = "";

function logMapElements(value, key) {
    output += (`${key} = ${value} \n`);
}

map.forEach(logMapElements);

alert(output);
