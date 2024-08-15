//!------ Animal Klasse -----------------
class Animal {
    private _species: string;
    private _age: number;
    private _color: string;

    constructor(species:string, age:number, color:string){
        this._species = species;
        this._age = age;
        this._color = color;  
    }

    get getSpecies():string{
        return this._species;
    }
    set setSpecies(value: string){
        this._species = value
    }


    get getAge(): number{
        return this._age
    }
    set setAge(value: number){
        this._age = value
    }


    get getColor(): string{
        return this._color
    }
    set setColor(value: string){
        this._color = value
    }
}

const cat = new Animal("Cat", 12, "Orange")
console.log(cat);


//!------------ Person Klasse ------------

enum Gender {
    Male = "Male",
    Female = "Female",
    Other = "Other"
}

class Person {
    private _name: string;
    private _birthday: Date;
    private _gender: Gender;

    constructor(name: string, birthDay: Date, gender: Gender){
        this._name = name;
        this._birthday = birthDay;
        this._gender = gender;
    }

    
    get getName(): string {
        return this._name;
    }

    get getBirthday(): Date {
        return this._birthday;
    }

    get getGender(): Gender {
        return this._gender;
    }

    set setName(name: string) {
        this._name = name;
    }

    set setGender(gender: Gender) {
        this._gender = gender;
    }
}

const person1 = new Person("Steve", new Date("1995-03-14"), Gender.Male)
console.log(person1);