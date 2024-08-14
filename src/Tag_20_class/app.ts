//? Hier sollen die Classes importiert werden.
//! sobald eine Datei als default exportiert wird, beim Import
//! brauchen wir keine geschweiften klammern

import Besitzer from "./classes/Besitzer";
import Räume from "./classes/Räume";
import Bauplan from "./classes/bauplan";
import { RäumeArten } from "./classes/Räume";





//? & OOP => Object Orientiert Programming => keyword: class => die schreibweise: class dann kommt der name, danach direkt geschweifte klammern


//? sowas erstellt ein Azubi, der seine Ausbildung noch nicht absolviert hat.
// type Bauplan = {
//     räume: number;
//     farbe: string;
//     tiefGarage: boolean
// }

// const haus_1: Bauplan = {
//     räume: 1,
//     farbe: "weiß",
//     tiefGarage: false
// }

// console.log(haus_1);

//! ---------------- class ------------------

//? lass mal aufbauen

//const heute = new Date()
const besitzer_haus_1 = new Besitzer("Hans", "Müller", 1373299730)

console.log(besitzer_haus_1);
besitzer_haus_1.printInfo()

const zimmer_haus_1 = new Räume(1,[RäumeArten.SchlafZimmer])

const haus_1_mit_class = new Bauplan(besitzer_haus_1, zimmer_haus_1, false)

console.log(haus_1_mit_class);

haus_1_mit_class.renovieren("gelb")

const zimmer_haus_2 = new Räume(3, [RäumeArten.BadeZimmer, RäumeArten.Küche, RäumeArten.WohnZimmer])

console.log(zimmer_haus_2);

// const haus_2 = new Bauplan(zimmer_haus_2, true, undefined)
