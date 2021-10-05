const liczby = document.querySelectorAll(".liczba");
const operatory = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const wynikPoprzednie = document.querySelector('.poprzednie-dzialanie');
const wynikAktualne = document.querySelector('.aktualne-dzialanie');

let aktualneDzialanie = '';
let operacja = undefined;
let poprzednieDzialanie = '';


const oblicz = () => {
    let dzialanie
    if(!poprzednieDzialanie || !aktualneDzialanie) {
        return
    }

    const poprzednie = parseFloat(poprzednieDzialanie)
    const aktualne = parseFloat(aktualneDzialanie)

    if(isNaN(poprzednie) || isNaN(aktualne)) {
        return
    }

    switch (operacja) {
        case '+':
            dzialanie = poprzednie + aktualne
            break
        case '-':
            dzialanie = poprzednie - aktualne
            break
        case '×':
            dzialanie = poprzednie * aktualne
            break
        case '÷':
            if(aktualne === 0)
            {
                wyczyscWynik()
                return
            }
            dzialanie = poprzednie / aktualne
            break
        case '%':
            dzialanie = poprzednie / 100 * aktualne
            break
        default:
            return
    }
    aktualneDzialanie = dzialanie
    operacja = undefined
    poprzednieDzialanie = ''
}

const wybierzOperacje = (operator) => {
    if(aktualneDzialanie === '') {
        return
    }
    if(poprzednieDzialanie !== '') {
        const poprzednie = wynikPoprzednie.innerText
        if(aktualneDzialanie.toString() === '0' &&  poprzednie[poprzednie.length - 1] === '÷') {
            wyczyscWynik()
            return
        }
        oblicz()
    }

    operacja = operator
    poprzednieDzialanie = aktualneDzialanie
    aktualneDzialanie = ''
}

const dodajLiczbe = (liczba) => {
    if(liczba === ',') {
        if(aktualneDzialanie.includes('.')) {
            return
        }
        liczba = '.'
    }

    aktualneDzialanie = aktualneDzialanie.toString() + liczba.toString()
}

const usunLiczbe = () => {
    aktualneDzialanie = aktualneDzialanie.toString().slice(0, -1)
}

const zaktualizujWynik = () => {
    wynikAktualne.innerText = aktualneDzialanie

    if(operacja != null) {
        wynikPoprzednie.innerText = poprzednieDzialanie + operacja
    } else {
        wynikPoprzednie.innerText = ''
    }
}

const wyczyscWynik = () => {
    aktualneDzialanie = ''
    operacja = undefined
    poprzednieDzialanie = ''
}

liczby.forEach((liczba) => {
    liczba.addEventListener('click', () => {
        dodajLiczbe(liczba.innerText)
        zaktualizujWynik()
    })
})

operatory.forEach((operator) => {
    operator.addEventListener('click', () => {
        wybierzOperacje(operator.innerText)
        zaktualizujWynik()
    })
})

equals.addEventListener('click', () => {
    oblicz()
    zaktualizujWynik()
})

clear.addEventListener('click', () => {
    wyczyscWynik()
    zaktualizujWynik()
})

