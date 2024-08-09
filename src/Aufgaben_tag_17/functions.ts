//!----- Functions 2 - Aufgabe 1 --------!

function intro1 () {
    console.log("Hello Function");
}
intro1()

const intro2 = () => {
    console.log("Hello Arrow-Function");
}
intro2()

//!----- Functions 2 - Aufgabe 2 --------!

//* 1.
function sayHello ():void {
    const element = document.createElement("div")
    element.innerHTML = "Hallo"
    document.body.appendChild (element)
}
sayHello()

//* 2.
function showSum (a: number, b:number) {
    const sum = a + b
    console.log(`Die Summe ist: ${sum}`);
    
}
showSum(12, 3)

//* 3.
// function showAlert (a:number, b:number) {
//     const sumMulti = a * b
//     window.alert (`Die Summer der Multiplikation ist: ${sumMulti}`)
// }
// showAlert(12, 4)

//* 4.
function showKeys (key: Object){
    const keys = Object.keys(key);
    console.log(`Das sind unsere Keys: ${keys}`);
}
showKeys("Hallo")

//* arrow-functions

//* 1.
const sayHello2 = () => {
    const element = document.createElement("div")
    element.innerHTML = "Hallo2"
    document.body.appendChild (element)
}
sayHello2()

//* 2.
const showSum2 = (a: number, b:number) => {
    const sum = a + b
    console.log(`Die Summe ist: ${sum}`);
}
showSum2(14, 3)

//* 3.
// const showAlert2 = (a: number, b: number) => {
//     const sumMulti = a * b
//     window.alert(`Unsere Summe ist: ${sumMulti}`)
// }
// showAlert2(13, 25)

//* 4.
const showKeys2 = (key: Object) => {
    const keys = Object.keys(key)
    console.log(`Das sind unsere Keys : ${keys}`);
}
showKeys2("Steve D.")

//!----- Functions 2 - Aufgabe 3 --------!

let person = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: 1.78,
    zeigeProfil: function () {
         console.log(this.vorname, this.nachname, this.alter, this.familienstand, this.groesse);
         return this.vorname, this.nachname, this.alter, this.familienstand, this.groesse
    }

 };
 person.zeigeProfil()
// document.getElementById("person").innerHTML = person.zeigeProfil()

let person2 = {
    vorname: 'Steve',
    nachname: 'Dwumah',
    alter: 29,
    familienstand: 'ledig',
    groesse: 1.89,
    zeigeProfil2: () => {
         console.log(person2.vorname, person2.nachname, person2.alter, person2.familienstand, person2.groesse);
    }

 };
 person2.zeigeProfil2()
//  document.getElementById("person": string).innerHTML = person2.zeigeProfil2()

//!----- Functions 2 - Aufgabe 4 --------!

type Monster = {
    name: string,
    type: string,
    health: number,
    strength: number,
    speed: number
}
function createMonster( name: string, type: string, health: number = 100, strength: number = 50, speed: number = 25
): Monster {
    return { name, type, health, strength, speed,
    };
}
const monster1 = createMonster("Ghul", "radioactive")
console.log(monster1);

const monster2 = createMonster("Big Daddy", "Protector", 550)
console.log(monster2);

const monster3 = createMonster("Little Sister", "Demon", 10, 1 )
console.log(monster3);

const monster4 = createMonster("Hades", "God", 1000, 500, 30)
console.log(monster4);

//!----- Functions 2 - Aufgabe 5 --------!

