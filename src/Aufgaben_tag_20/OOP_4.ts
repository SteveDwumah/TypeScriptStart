import CarType from "../Aufgaben_tag_21/Aufgabe_2/carType";

export class Car {
    brand: string;
    private constructionYear: number;
    currentSpeed: number;
    carType: CarType;

    constructor(brand: string, constructionYear: number, currentSpeed: number, carType: CarType){
        this.brand = brand;
        this.constructionYear = constructionYear;
        this.currentSpeed = currentSpeed;
        this.carType = carType
    }
    get getConstructionYear(): number{
        return this.constructionYear;
    }


    getSpeedInfo(): string {
        if (this.currentSpeed <= 40) {
            return 'Driving slowly';
        } else if (this.currentSpeed <= 70) {
            return 'Driving normally';
        } else if (this.currentSpeed <= 120) {
            return 'Driving fast';
        } else if (this.currentSpeed <= 190) {
            return 'Driving really fast';
        } else {
            return 'WTF';
        }
    }
}

export class Driver {
    firstName: string;
    lastName: string;
    age: number;
    car: Car;
    private licenseFromYear: number

    constructor(firstName: string, lastName: string, age: number, car: Car, licenseFromYear: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.car = car;
        this.licenseFromYear = licenseFromYear;
    }

    get getLicenseFromYear(): number{
        return this.licenseFromYear;
    }

    get getCarType(): CarType {
        return this.car.carType;
    }
}
