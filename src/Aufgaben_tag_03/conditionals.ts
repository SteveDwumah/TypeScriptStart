//!----- Aufgabe 1 --------!

const johnGroesse: number = 170
const johnAge: number = 22
const johnScore: number = johnGroesse + (johnAge * 5)


const meikeGroesse: number = 168
const meikeAge: number = 34
const meikeScore: number = meikeGroesse + (meikeAge * 5)

console.log(`john score:` + johnScore);
console.log(`meike score:` + meikeScore);

if (johnScore > meikeScore)
    console.log(`John gewinnt das Spiel mit: ` + johnScore + ` Punkten!`);
else if (meikeScore > johnScore)
    console.log(`Meike gewinnt das Spiel mit: ` + meikeScore + ` Punkten!`)
else if (johnScore === meikeScore)
    console.log("Draw!");

//!----- Aufgabe 2 --------!

const randomNumber1: number = Math.floor(Math.random() * 77) + 1
const randomNumber2: number = Math.floor(Math.random() * 77) + 1

if (randomNumber1 === randomNumber2)
    console.log("Was ein Zufall");
else if (randomNumber1 > randomNumber2)
console.log("Erste Zahl größer");
else if (randomNumber1 < randomNumber2)
console.log("Zweite Zahl größer");

switch (true) {
    case (randomNumber1 === randomNumber2):
        console.log("Was ein Zufall");
        break
    case (randomNumber1 > randomNumber2):
        console.log("Erste zahl größer");
        break
    case (randomNumber1 < randomNumber2):
        console.log("Zweite Zahl größer");
        break
}

//!----- Aufgabe 3 --------!
// const weekdayAsNumber: number = Number(window.prompt("Please insert a number from 1 to 7"))

// switch (true) {
//     case (weekdayAsNumber) === 1:
//         console.log(`Montag`);
//         break
//     case (weekdayAsNumber) === 2:
//         console.log("Dienstag");
//         break 
//     case (weekdayAsNumber) === 3:
//         console.log("Mittwoch");
//         break
//     case (weekdayAsNumber) === 4:
//         console.log("Donnerstag");
//             break             
//     case (weekdayAsNumber) === 5:
//         console.log("Freitag");
//             break 
//     case (weekdayAsNumber) === 6:
//         console.log("Samstag");
//         break 
//     case (weekdayAsNumber) === 7:
//         console.log("Sonntag");
//         break 
//     default: ("Fehler");       
// }

// const weekdayAsString: String = String(window.prompt("Please insert an number from 1 to 7"))

// switch (true) {
//     case (weekdayAsString) === 1:
//         console.log("Montag");
//         break
//     case (weekdayAsString) === 2:
//         console.log("Dienstag");
//         break 
//     case (weekdayAsString) === 3:
//         console.log("Mittwoch");
//         break
//     case (weekdayAsString) === 4:
//         console.log("Donnerstag");
//             break             
//     case (weekdayAsString) === 5:
//         console.log("Freitag");
//             break 
//     case (weekdayAsString) === 6:
//         console.log("Samstag");
//         break 
//     case (weekdayAsString) === 7:
//         console.log("Sonntag");
//         break     
// }

//!----- Aufgabe 4 --------!

const schoolGrade: number = Math.floor(Math.random() * 10) + 1

switch (true) {
    case(schoolGrade === 1):
    console.log("sehr gut");
    break
    case(schoolGrade === 2):
    console.log("gut");
    break
    case(schoolGrade === 3):
    console.log("befriedigend");
    break
    case(schoolGrade === 4):
    console.log("ausreichend");
    break
    case(schoolGrade === 5):
    console.log("mangelhaft");
    break
    case(schoolGrade === 6):
    console.log("ungenügend");
    break
    default:
        console.log("Das ist keine gültige Schulnote.");
}

//!----- Aufgabe 5 --------!

const salesMonth:number = Math.floor(Math.random() * 12) +1
console.log(salesMonth);

switch (true) {
    case salesMonth <= 3:
    console.log("1.Quartal");
    break
    case salesMonth <= 6:
    console.log("2.Quartal");
    break
    case salesMonth <= 9 :
    console.log("3.Quartal");
    break
    case salesMonth <= 12 :
        console.log("4.Quartal");
        break
    default:
        console.log("");
        break
}

const totalSales: number = Math.floor(Math.random() * 10000) + 1000
console.log(totalSales);

switch (true) {
    case totalSales <= 2500:
        console.log("schlecht");
        break
    case totalSales <= 5000:
        console.log("mittelmäßig"); 
        break
    case totalSales <= 7500:
        console.log("hoch");
        break
    case totalSales <= 10000:
        console.log("unglaublich");
        break
    default:
        console.log("");
        break               
}

//!----- Aufgabe 6 --------!

const isOnline: boolean = Math.random() <= 0.5
switch(true) {
    case isOnline:
        console.log("Online");
        break
    default: 
    console.log("Offline");
    break 
}
let monthlyFee = 12.99
const isPremiumUser: boolean = Math.random() <= 0.5
switch(true) {
    case isPremiumUser:
        monthlyFee = 19.99
        console.log(monthlyFee);
        break
    default: 
    console.log(monthlyFee);
    break 
}

const isAdult: boolean = Math.random() <= 0.5
console.log(isAdult);
switch(true) {
    case isAdult: 
        confirm("Wilkommen")
        break
    default:
        alert("Keine Berechtigung")
        break
}

const randomAge: number = Math.floor(Math.random() * 120)
const randomSalary: number = Math.floor(Math.random() * 15000)

let isMiddleAged: boolean = false;

(randomAge >=40 && randomAge <=65) ? isMiddleAged = true:

console.log(isMiddleAged);

(randomSalary > 10000) ? console.log("You are rich"):
(randomSalary > 1500) ? console.log("not too bad") : console.log("not that much");
