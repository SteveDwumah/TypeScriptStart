//!----- Map Aufgabe 1 --------!
import { drinks } from "./drinks";
import { upperDrinks } from "./drinks";
console.log(drinks);
console.log(upperDrinks);
const iLike: string [] = drinks.map((drink: string) => {
    return "I like " + drink
})
console.log(iLike);

//!----- Map Aufgabe 2 --------!

let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];
const celsius: number [] = fahrenheit.map((temp: number) => {
    return Math.round((temp - 32) / 1.8)
})
console.log(celsius);

//!----- Map Aufgabe 3 --------!

let checkNumber: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

let changeNumber = checkNumber.map((number: number) => {
    if (number % 3 === 0){
        return number + 100
    }
    else {
        return number
    }
})
console.log(changeNumber);

//!----- Map Aufgabe 4 --------!

let album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];
const noEnding = album.map((pic: string) => {
    let lowerAlbum = pic.toLowerCase()
    if (lowerAlbum.includes(".jpg")){
        return lowerAlbum.replace(".jpg", "")
    }
    else {
        return "Invalid"
    }
})
console.log(noEnding);

//!----- Map Aufgabe 5 --------!

let fruits: string[] = ['🍇', '🍌', '🍒', '🍎']

const fruitJuice: any = fruits.map((juice) => {
    switch (juice) {
        case "🍇":
            return "🍇🥤"
        case "🍌":
            return "🍌🥤"
        case "🍒":
            return "🍒🥤"
        case "🍎":
            return "🍎🥤"         
    }
})
console.log(fruitJuice);

//!----- Filter Aufgabe 1 --------!

const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function printEvenNumbers() {
    const even = zahlen.filter((zahl: number) => {
        if (zahl % 2 === 0) {
            return zahl
        }
    })
    console.log(even);
}
printEvenNumbers()

function printOddNumbers() {
    const odd = zahlen.filter((zahl: number) =>{
        if(zahl % 2 !== 0) {
            return zahl
        }
    })
    console.log(odd);
}
printOddNumbers()

const numbersEven: number [] = zahlen.filter((numb: number) => {
    if (numb % 2 === 0) {
        return numb
    }
})
console.log(numbersEven);

const numbersOdd: number [] = zahlen.filter((numb: number) => {
    if (numb % 2 !== 0) {
        return numb
    }
})
console.log(numbersOdd);

//!----- Filter Aufgabe 2 --------!

const heroArr: (string | null | undefined)[] = ["Superman", "Batman", undefined, undefined, "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", undefined, null];
console.log(heroArr);

function showHeroesCleaned() {
        const cleanHeroes = heroArr.filter((hero: string | null | undefined) => hero !== null && hero !== undefined)
        console.log(cleanHeroes);
}
showHeroesCleaned()


//!----- Filter Aufgabe 3 --------!

const woerter: string[] = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];
console.log(woerter);

function allThings (){
    const maxSixWords = woerter.filter ((wort: string) => {
        if(wort.length <= 6){
            return wort
        }
})
console.log(maxSixWords);
}
allThings()

function allE (){
    const bigOrsmall = woerter.filter ((letter: string) => {
        if (letter.includes("E") || letter.includes("e")){
            return Worklet
        }
    })
    console.log(bigOrsmall);
}
allE()