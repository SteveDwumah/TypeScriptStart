//!----- Aufgabe 1 --------!

console.log(Math.PI);

const PI: number = Math.PI
console.log(Math.round(PI));

//!----- Aufgabe 2 --------!

let randomNumbers: number[] = [3.14, 193.4464, 0.8596433607, -2.940629089];

console.log(Math.round(3.14));
console.log(Math.round(193.4464));
console.log(Math.round(0.8596433607));
console.log(Math.round(-2.940629089));

//!----- Aufgabe 3 --------!

const randomNum: number = Math.random()
console.log(randomNum);

const randomNum1_10: number = Math.floor(Math.random() * 10) + 1
console.log(randomNum1_10);

const randomNum1_100: number = Math.floor(Math.random() * 100) + 1
console.log(randomNum1_100);

//!----- Aufgabe 4 --------!

const userInput: number = Number(window.prompt("Schätzen Sie die Nummer zwischen 1 und 10")) 
const gameNumber: number = Math.floor(Math.random() * 10) + 1
console.log(gameNumber);

switch (true) {
    case (gameNumber === userInput):
        console.log("richtig");
        break
    default: 
    console.log("falsch die nummer lautet:", gameNumber);
    break    
}