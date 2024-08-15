
import { Car } from "../../Aufgaben_tag_20/OOP_4";
import { Driver } from "../../Aufgaben_tag_20/OOP_4";
import CarType from "./carType";

const car1 = new Car("BMW", 2020, 250,CarType.Coupe);
const car2 = new Car("Audi", 2018, 230, CarType.Sedan);
const car3 = new Car("Mercedes", 2022, 310, CarType.Sedan);

const driver1 = new Driver("Speedy", "Gonzales", 30, car1, 2000);
const driver2 = new Driver("Cleo", "Egal", 25, car2, 2015);
const driver3 = new Driver("Steve", "Dwumah", 29, car3,2010);

console.log(driver1);
console.log(driver2);
console.log(driver3);

