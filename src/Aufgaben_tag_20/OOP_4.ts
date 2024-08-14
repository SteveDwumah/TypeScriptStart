export class Car {
    brand: string;
    constructionYear: number;
    currentSpeed: number;

    constructor(brand: string, constructionYear: number, currentSpeed: number){
        this.brand = brand;
        this.constructionYear = constructionYear;
        this.currentSpeed = currentSpeed;
    }
}

export class Driver {
    firstName: string;
    lastName: string;
    age: number;
    car: Car;

    constructor(firstName: string, lastName: string, age: number, car: Car) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.car = car;
    }
}
