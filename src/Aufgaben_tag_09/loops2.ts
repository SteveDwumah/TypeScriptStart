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
    console.log(`${summe} > 50. Stopping right here.`);
}
addToFifty()



//!----- Loops Aufgabe 5 --------!

//- 1. FN deklarieren + Parameter (number[])
//- 2. Durschnitt berechnen:
//-                            a. summe aller punkte => loop
//-                            b. berechnung => summe durch die anzahl der zahlen
//- 3. Bewertung ausgeben => if/else 

const results: number = [44, 11, 70, 80, 52, 88, 94, 3, 25, 46]

function calAverage(myResults: number[]) : string{
    //? Summe aller Punkte
    let sum: number = 0;
    for (let i: number = 0; i < myResults.length; i++) {
        sum += myResults[i]
    }
    console.log({sum});

    //? Durchschnitt berechnen
    const average: number = sum / results.length
    console.log({average});

    //? Bewerung ausgeben
    let level: string

    if(average < 50) {
        level = "ungenügend"
    }
    else if (average < 60) {
        level = "mangelhaft"
    }
    else if (average < 70) {
        level = "ausreichend"
    }
    else if (average < 80) {
        level = "befriedigent"
    }
    else if (average < 90) {
        level = "gut"
    } else{
        level = "sehr gut"
    }
    return level
}
const resultOfExam = calAverage(results)
console.log(resultOfExam);

//!----- Loops Bonus Aufgabe --------!

const allGermanLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  function encodeInROT13 (inputSentence: string) : string {
    const outputArray: string[];
    const uppercaseSentence = inputSentence.toLocaleUpperCase();

    for (const letter of uppercaseSentence) {
        const indexOfLetter = allGermanLetters.indexOf(letter)
        if(indexOfLetter === -1) {
            outputArray.push(letter)
        } else {
            const newIndex = (indexOfLetter + 13) % 26
            const newLetter = allGermanLetters[newIndex]
            outputArray.push(newLetter)
        }
    }
    return outputArray.join("")
  }
  const encodedSentence = encodeInROT13 ("Hello World")
  console.log(encodedSentence);