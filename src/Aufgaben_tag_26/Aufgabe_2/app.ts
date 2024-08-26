import InstanceChecker from "../Aufgabe_1/instance-checker";
import Car from "./car";
import ElectricCar from "./electric-car";


const myCar = new Car ("Mercedes", "Red")

const myElectricCar = new ElectricCar ("BMW", "White")

console.log(InstanceChecker.isCar(myCar));
console.log(InstanceChecker.isElectricCar(myElectricCar));
