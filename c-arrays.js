// ==========================================
// 1. Declareer een variabele en sla daar een array met vier jaartallen in op.              // bijv. 2020, 2019, 2018 en 2017
// ==========================================

let differentYears = ["2020", "2019", "2018", "2017"];
console.log(differentYears)

// ==========================================
// 2. Declareer een variabele en sla daar een array met drie van jouw hobbies in op.         // bijv. schaken, koekjes eten en muziek luisteren
// ==========================================

let favoriteHobbys = ["wijn drinken", "lezen", "muziek luisteren"];
console.log(favoriteHobbys)

// ==========================================
// 3a. Declareer een variabele met daarin een array met de waardes 3, 4, 5, 7 en 2
// 3b. Log de waarde 3 uit de array in de terminal                                          // geeft 3
// ==========================================

let differentNumbers = [3, 4, 5, 7, 2];
console.log(differentNumbers[0])

// ==========================================
// 4a. Declareer een variabele met daarin een array met de waardes groen, geel, rood, paars, blauw en oranje
// 4b. Log de waarde blauw uit de array in de terminal                                      // geeft blauw
// 4c. Log de waarde geel uit de array in de terminal                                       // geeft geel
// ==========================================

let multipleColors = ['groen', 'geel', 'rood', 'paars', 'blauw', 'oranje'];
console.log(multipleColors[4]);
console.log(multipleColors[1]);

// ==========================================
// 5a. Declareer een variabele met daarin een array met de waardes 21, 22, 23, 25, 25
// 5b. Pas een van de items in de array aan zodat de cijferreeks netjes doorloopt
// 5c. Log de de array in de terminal                                                       // geeft [ 21, 22, 23, 24, 25 ]
// ==========================================

let multipleNumbers = [21, 22, 23, 25, 25];
multipleNumbers [3] = 24;
console.log(multipleNumbers)

// ==========================================
// 6a. Declareer een variabele met daarin een array met de waardes bladerdeeg, knoflook, spinazie
// 6b. Verander daarna de waarde bladerdeeg in lasagne bladen
// 6c. Log de de array in de terminal                                                       // geeft [ 'lasagne bladen', 'knoflook', 'spinazie' ]
// 6d. Log de lengte van de array in de terminal                                            // geeft 3
// ==========================================

let ingredients = ['bladerdeeg', 'knoflook', 'spinazie'];
ingredients [0] = 'lasagne bladen';
console.log(ingredients)
console.log(ingredients.length)