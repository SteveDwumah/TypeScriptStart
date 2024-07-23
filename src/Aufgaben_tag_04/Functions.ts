//!----- Aufgabe 1 --------!

function showHero (heroName: string, heroPower: string, heroEnemy: string): void{

    const nameOutput = "Mein:e Lieblingsheld:in ist:" + heroName;
    const powerOutput = "Er/sie hat die Fähigkeit:" + heroPower;
    const enemyOutput = "Sein/ihr größte/r Gegner:in ist:" + heroEnemy;

    console.log(nameOutput + powerOutput + enemyOutput);
   

}

const Held: string = "Superman"
const Stärke: string = "Keine Ahnung"
const Schwäche: string = "Kryptonit"

showHero(Held, Stärke, Schwäche)


//!----- Aufgabe 2 --------!

function returnOne(){
    return 1
}

const x: number = 1
const y = returnOne()

if (x === y ){
    console.log("Wird das gedruckt?");
}
//!----- Aufgabe 3 --------!

function returnTwo(zahl: number): number{
    const result: number = zahl * 2
    return result
    
}
console.log(returnTwo(5));



//!----- Aufgabe 4 --------!

function calculateBirthday(birthYear: number) {
    return 2024 - birthYear;
}
console.log(calculateBirthday(1995));

const robinBy: number = 2001;
const steveBy: number = 1995;

const robinAge: number = calculateBirthday(robinBy);
const steveAge: number = calculateBirthday(steveBy);

function ageDifference(age1: number, age2: number): number {
    let difference:number = age1 - age2;
    if (difference < 0) {
        difference *= -1;
    }
    return difference;
}

const steveAndRobAgeDiff: Number = ageDifference(robinAge, steveAge);

console.log(steveAndRobAgeDiff);

//!----- Aufgabe 5 --------!

function thatsMe (vorname: string, nachname: string, geburtsort: string, alter: string, wohnort:string){
    console.log("Mein Name ist " + vorname + " " + nachname + " Ich bin in " + geburtsort + " geboren. Ich lerne bei Supercode. Ich bin " + alter + " Jahre alt. Ich wohne in " + wohnort + ".");
}
thatsMe("Steve", "Dwumah.","Hamburg", "29", "Hamburg");

//!----- Aufgabe BONUS --------!


let counter1: number = 0
let counter2: number = 0

const scoreElement1 = document.getElementById("score1")
const scoreElement2 = document.getElementById("score2")

const button1PlusOne = document.getElementById("plusOne")
const button1PlusTwo = document.getElementById("plusTwo")
const button1PlusThree = document.getElementById("plusThree")
const button2PlusOne = document.getElementById("plusOneOne")
const button2PlusTwo = document.getElementById("plusTwoTwo")
const button2PlusThree = document.getElementById("plusThreeThree")

function countPlusOne (event: MouseEvent) {
    event.preventDefault()
    counter1++;
    if (scoreElement1) {
        scoreElement1.textContent = counter1.toString()
    }
}
function countPlusTwo (event: MouseEvent) {
    event.preventDefault()
    counter1+= 2;
    if (scoreElement1) {
        scoreElement1.textContent = counter1.toString()
    }
}
function countPlusThree (event: MouseEvent) {
    event.preventDefault()
    counter1+=3;
    if (scoreElement1) {
        scoreElement1.textContent = counter1.toString()
    }
    
}
function countPlusOneOne (event: MouseEvent) {
    event.preventDefault()
    counter2++;
    if (scoreElement2) {
        scoreElement2.textContent = counter2.toString()
    }
}
function countPlusTwoTwo (event: MouseEvent) {
    event.preventDefault()
    counter2+= 2;
    if (scoreElement2) {
        scoreElement2.textContent = counter2.toString()
    }
}
function countPlusThreeThree (event: MouseEvent) {
    event.preventDefault()
    counter2+=3;
    if (scoreElement2) {
        scoreElement2.textContent = counter2.toString()
    }
}
if (button1PlusOne){
    button1PlusOne.addEventListener("click", countPlusOne)
}
if (button1PlusTwo){
    button1PlusTwo.addEventListener("click", countPlusTwo)
}
if (button1PlusThree){
    button1PlusThree.addEventListener("click", countPlusThree)
}
if (button2PlusOne){
    button2PlusOne.addEventListener("click", countPlusOneOne)
}
if (button2PlusTwo){
    button2PlusTwo.addEventListener("click", countPlusTwoTwo)
}
if (button2PlusThree){
    button2PlusThree.addEventListener("click", countPlusThreeThree)
}
