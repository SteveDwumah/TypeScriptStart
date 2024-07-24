//!----- Aufgabe 1 --------!

const bucketList: string[] = ["Jamaika", "Brasilien", "Thailand"] 
console.log(bucketList);

const luckyNumbers: number[] = [14 , 23 , 13]
console.log(luckyNumbers);

const favoritePeople: string[] = ["Cleo", "Emily", "Gil", "Steve", "Robin"]
console.log(favoritePeople);

//!----- Aufgabe 2 --------!

const landVariable1: string = bucketList[0]
console.log(landVariable1);

const landVariable2: string = bucketList[1]
console.log(landVariable2);

const landVariable3: string = bucketList[2]
console.log(landVariable3);

const numberVariable1: number = luckyNumbers[0]
console.log(numberVariable1);

const numberVariable2: number = luckyNumbers[1]
console.log(numberVariable2);

const numberVariable3: number = luckyNumbers[2]
console.log(numberVariable3);

const peopleVariable1: string = favoritePeople[0]
console.log(peopleVariable1);

const peopleVariable2: string = favoritePeople[1]
console.log(peopleVariable2);

const peopleVariable3: string = favoritePeople[2]
console.log(peopleVariable3);

//!----- Aufgabe 3 --------!

console.log(bucketList.length);
console.log(luckyNumbers.length);
console.log(favoritePeople.length);

//!----- Aufgabe 4 --------!

bucketList.push("Süd Afrika", "Ghana")
console.log(bucketList);

luckyNumbers.push(95, 99)
console.log(luckyNumbers);

favoritePeople.push("Anja", "Findus")
console.log(favoritePeople);

//!----- Aufgabe 5 --------!

console.log(bucketList);
const bucketVariable: string = bucketList.pop()!
console.log("Entfernt: ", bucketVariable);
console.log(bucketList);

console.log(luckyNumbers);
const luckyVariable: number = luckyNumbers.pop()!
console.log("Entfernt: ", luckyVariable);
console.log(luckyNumbers);

console.log(favoritePeople);
const favoriteVariable: string = favoritePeople.pop()!
console.log("Entfernt: ", favoriteVariable);
console.log(favoritePeople);

//!----- Aufgabe 6 --------!

const shiftPeople: string = favoritePeople.shift()!
console.log(favoritePeople);
console.log({shiftPeople});

//!----- Aufgabe 7 --------!

console.log(bucketList, bucketList.length);

bucketList.unshift("Deutschland", "Spanien")

console.log(bucketList, bucketList.length);
// const unshiftBucket: string = bucketList.unshift("Deutschland", "Spanien")!
// console.log(unshiftBucket, unshiftBucket.length);

//!----- Aufgabe 8 --------!

const lieblingsreiseziele: string [] = ["Bali", "Barcelona", "München", "Moskau", "New York", "Hamburg"]
console.log(lieblingsreiseziele);

const reisezieleVariable: string = lieblingsreiseziele.slice(2, 4)
console.log(reisezieleVariable);
console.log(lieblingsreiseziele);

//!----- Aufgabe 9 --------!

const pushPopVariable: number [] = [23, 54, 75]
console.log(pushPopVariable);
pushPopVariable.push(95, 3, 9, 29, 8)
console.log(pushPopVariable);
pushPopVariable.unshift(22, 42, 45, 65, 88)
console.log(pushPopVariable);
pushPopVariable.pop()
pushPopVariable.pop()
console.log(pushPopVariable);
pushPopVariable.shift()
pushPopVariable.shift()
console.log(pushPopVariable);

//!----- Aufgabe 10 --------!

const futuramaQuote = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

const einText: string = futuramaQuote.split(".")
console.log(einText);

const einWort: string = futuramaQuote.split(" ")
console.log(einWort);

const einZeichen: string = futuramaQuote.split("")
console.log(einZeichen);