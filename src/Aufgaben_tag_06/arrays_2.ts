//!----- Copy Aufgabe 1 --------!

const oldHollywoodActors: string[] = ["Marlon Brandon", "Audrey Hepburn", "Elizabeth Taylor", "Cary Grant", "Paul Newman", "Doris Day"]

const actorsReference: string [] = ["Marilyn Monroe"]
console.log(oldHollywoodActors);
console.log(actorsReference);

const actorsConcatCopie: string[] = oldHollywoodActors.concat()
actorsConcatCopie.shift()

const actorsSliceCopie: string[] = oldHollywoodActors.slice()
actorsSliceCopie.pop()

const actorsSpreadCopie: string[] = [...oldHollywoodActors]
actorsSpreadCopie.push("Steve Dwumah")

console.log({oldHollywoodActors});
console.log({actorsConcatCopie});
console.log({actorsSliceCopie});
console.log({actorsSpreadCopie});

//!----- Sort Aufgabe 1 --------!

let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
const sortArray: number = numArray1.sort((a: number, b: number) => a - b)
console.log(sortArray);
const sortArray2: number = numArray1.sort((a: number, b: number) => b - a)
console.log(sortArray2);

//!----- Sort Aufgabe 2 --------!

const oldPainters: string[] = ["Caspar David Friedrich", "Mary Cassatt", "Rosa Bonheur", "Francisco de Goya", "Édouard Manet"]

const newerPainters: string[] = ["Pablo Picasso", "Salvador Dalí", "Frida Kahlo", "Georgia O'Keeffe",]

const femalePainters: string[] = [...oldPainters.slice(1,3), ...newerPainters.slice(2,4)]

const malePainters: string[] = [...oldPainters.slice(0,1), ...oldPainters.slice(4,6), ...newerPainters.slice(0,2)]

console.log(femalePainters);
console.log(malePainters);



//!----- Find Aufgabe 1 --------!

const artworks: string[] = [    "Die Sternennacht - Vincent van Gogh",
    "Guernica - Pablo Picasso",
    "Die Geburt der Venus - Sandro Botticelli",
    "Die Nachtwache - Rembrandt",
    "Die Mona Lisa - Leonardo da Vinci",
    "Die Kartoffelesser - Vincent van Gogh",
    "Die Schrei - Edvard Munch",
    "Das letzte Abendmahl - Leonardo da Vinci",
    "Die freudige Botschaft - James Tissot",
    "Der Garten der Lüste - Hieronymus Bosch"]

    const artworkDates: string[] = ["Die Sternennacht - 1889",
"Guernica - 1937",
"Die Geburt der Venus - 1486",
"Die Nachtwache - 1642",
"Die Mona Lisa - 1503",
"Die Kartoffelesser - 1885",
"Die Schrei - 1893",
"Das letzte Abendmahl - 1495",
"Die freudige Botschaft - 1885",
"Der Garten der Lüste - 1505"]

function art (artworkName: string) {
    const artwork:string | undefined = artworks.find((name) => name.startsWith(artworkName))
    const artDates: string | undefined = artworkDates.find((name) => name.startsWith(artworkName))
}