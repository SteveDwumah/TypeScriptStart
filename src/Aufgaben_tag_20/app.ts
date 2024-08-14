//! ------------- Aufgabe 1 -----------------

import IceCreamFlavor from "./OOP_1";

const popularIceCream = new IceCreamFlavor
console.log(popularIceCream);

console.clear()

//! -------------- Aufgabe 2 & 3 -----------------

import Person from "./Person";
import SchoolClass from "./OOP_2";

const mathClass = new SchoolClass(1, "Math");

const students = [
    new Person(1, "Max", "Mustermann", new Date(2005, 5, 15)),
    new Person(2, "Erika", "Musterfrau", new Date(2006, 3, 22)),
    new Person(3, "Hans", "Schmidt", new Date(2005, 11, 1)),
];

students.forEach(student => mathClass.addStudents(student));

mathClass.listStudents()

console.clear()

//! ------------- Aufgabe 4 -----------------

import { Car } from "./OOP_4";
import { Driver } from "./OOP_4";


const car1 = new Car("BMW", 2020, 250);
const car2 = new Car("Audi", 2018, 230);
const car3 = new Car("Mercedes", 2022, 310);

const driver1 = new Driver("Speedy", "Gonzales", 30, car1);
const driver2 = new Driver("Cleo", "Egal", 25, car2);
const driver3 = new Driver("Steve", "Dwumah", 29, car3);

console.log(driver1);
console.log(driver2);
console.log(driver3);


