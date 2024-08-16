import Person from "./Person";

//? Wenn ich von einer ElternKlasse Eigenschaften erben will, sieht das immer so aus => class KlassName extends [Name der Eltern Klasse]

//? ich brauche zwei Dinge, um zu erben ==> extends und super im Constructor
class Employee extends Person {
    //? Child Class
   

    public _isMarried: boolean = false;

    constructor(firstName: string, lastName: string, handyNummer?: string) {
        
        super(firstName, lastName, handyNummer)
    }

    public getFullName(): string{
        return `${this._firstName} ${this._lastName}`
    }
}
export default Employee