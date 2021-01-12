// ==========================================
// 1. Maak een for-loop die 3 keer "Hoera!" in de console logt
// ==========================================
for (let i = 0; i < 3; i++) {
    console.log('Hoera!')
}

// ==========================================
// 2. Maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan.
// Vanaf het getal 6 komt er >> voor ieder getal te staan.
// geeft:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 9
// ==========================================
for (let number = 0; number < 10; number++) {
    if (number <= 2) {
        console.log(number);
    }
    if ((number >= 3 && number < 6)) {
        console.log('> ' + number);
    }
    if (number >= 6) {
        console.log('>> ' + number);
    }
}

// ==========================================
// 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// geeft:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// ....
// 15 is oneven

// tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over..
// hier bestaat een speciale operator voor
// ==========================================

for (let digit = 0; digit < 16; digit++) {
    if (digit % 2) {
        console.log(digit + ' is oneven');
    }
    else {
        console.log(digit + ' is even');
    }
}
