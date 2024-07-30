//!----- Loops Aufgabe 1 --------!

function getHighestNumber (numbers:number []):number {
    let highestNumber = numbers[0]
    for(let i: number = 1; i < numbers.length; i++){
        if (numbers[i] > highestNumber){
            highestNumber = numbers[i]
        }
    }
    return highestNumber
}
const numberArray = getHighestNumber([12, 23, 43, 1, 74, 2])
console.log(numberArray);


//!----- Loops Aufgabe 2 --------!
// ich brauche eine Variable die mir immer das ergebnis zwischenspeichert => ergebnisPizza
// ich brauche einen loop der bei i = 1 startet und bis maxNumber durchgeht
// in dem loop muss ich ergebnisPizza updaten => ergebnisPizza = ergebnisPizza + i
// ich muss ergebnisPizza zurueckgeben

function calculateSum (maxNumber: number) {
    let calc: number = 0
    for(let i: number = 1; i <= maxNumber; i++) {
        calc = calc + i
    }
    return calc
}
console.log(calculateSum(22));


//!----- Loops Aufgabe 3 --------!

function getNumberOfVowels(vowels: string){
    let countVowels: number = 0
    const allVowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
    for (let i = 0; i <= vowels.length; i++){
        const letters: string = vowels[i]
        if(vowels.includes(letters)) {
            countVowels++
        }
    }
    return countVowels
}

console.log(getNumberOfVowels("Hallo ich bin Steve"));
console.log(getNumberOfVowels("A, E, I, O, U und raus bist DU"));


//!----- Loops Aufgabe 4 --------!

function addToFifty(): void {
    let summe: number = 0;
    while (summe <= 50) {
        // Generiert eine Zufallszahl zwischen 1 und 10
        const zufallszahl: number = Math.floor(Math.random() * 10) + 1;

        // Addiert die Zufallszahl zur Summe
        summe += zufallszahl;

        // Gibt die Zufallszahl und die aktuelle Summe auf der Konsole aus
        console.log(`Zufallszahl: ${zufallszahl}, Aktuelle Summe: ${summe}`);
    }
    console.log("Die Summe hat 50 überschritten.");
}
addToFifty()