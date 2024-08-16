class Person {
    //? Parent Class 

    //? ich erlaube nur kindKlassen, die Werte von meinen Eigenschaften nachträglich
    //? public > protected > private => zu ändern, nicht von außen
    protected _firstName: string = "";
    protected _lastName: string = "";
    _handyNummer?: string = "";


    constructor(firstName: string, lastName: string, handyNummer?: string){
        this._firstName = firstName;
        this._lastName = lastName;
        this._handyNummer = handyNummer

    }

    checkPassport():void {
        console.log(`${this._lastName} is allowed to fly`);
    }
}

export default Person