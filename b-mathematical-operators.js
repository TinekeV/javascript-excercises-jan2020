// ==========================================
// --> LOG DE WAARDE VAN IEDER ANTWOORD DIRECT IN DE TERMINAL <--
// ==========================================

// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van 4 plus 5 in op.                           // geeft 9
// ==========================================

const firstSum = 4 + 5;
console.log(firstSum);

// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van 7 maal 52 in op.                          // geeft 364
// ==========================================

const secondSum = 7 * 52;
console.log(secondSum);

// ==========================================
// 3. Declareer een variabele en sla daar de uitkomst van 4 + 3 in op, vermenigvuldigd met 7.       // geeft 49
// ==========================================

const thirdSum = (3 + 4) * 7;
console.log(thirdSum);

// ==========================================
// 4. Declareer een variabele en sla daar de uitkomst van 36 gedeeld door 6, maal 2 in op.          // geeft 12
// ==========================================

const fourthSum = 36 / 6 * 2;
console.log(fourthSum);

// ==========================================
// 5. Declareer twee variabelen en zet daarin respectievelijk de waardes 'zoet' en 'sappig'.
// Declareer nog een variabele en sla daarin de samenvoeging van bovenstaande variabelen in op.     // geeft 'zoetsappig'
// ==========================================

const tasteOne = "zoet";
const tasteTwo = "sappig";
const totalTaste = tasteOne + tasteTwo;
console.log(totalTaste)

// ==========================================
// 6. Declareer een variabele voor jouw voornaam en een variabele voor jouw achternaam en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw volledige naam en plak bovenstaande variabelen aan elkaar.
// Zorg dat er een spatie tussen zit zonder iets aan de originele variabelen te veranderen.        // geeft bijv. 'Henk Pieters'
// ==========================================

const firstName = "Tineke";
const lastName = "Vlieger";
const fullName = firstName + ' ' + lastName;
console.log(fullName);

// ==========================================
// 7. Declareer een variabele voor jouw woonplaats en een variabele voor provincie en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw locatie en plak jouw de woonplaats en provincie aan elkaar.
// Zorg dat er een komma en spatie tussen zit zonder iets aan de originele variabelen te veranderen. // geeft bijv. Maastricht, Limburg
// ==========================================

const placeOfResidence = "Leeuwarden";
const whichProvince = "Friesland";
const currentLocation = placeOfResidence + ", " + whichProvince
console.log(currentLocation)