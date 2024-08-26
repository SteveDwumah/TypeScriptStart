
import Car from "../Aufgabe_2/car";
import ElectricCar from "../Aufgabe_2/electric-car";
import Unicorn from "./unicorn";

class InstanceChecker {
    static isUnicorn (objectToCheck: any): boolean {
        return objectToCheck instanceof Unicorn;
    }

    static isCar(objectToCheck: any): boolean {
        return objectToCheck instanceof Car;
    }

    static isElectricCar (objectToCheck: any): boolean{
        return objectToCheck instanceof ElectricCar;
    }

} export default InstanceChecker