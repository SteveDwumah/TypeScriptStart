import Owner from "./Owner";

class Dog {
    private _name: string = "";
    private _age: number;
    _owner: Owner;
    _breed: string | undefined = "";
    _favoriteFood?: string = "";
    private _numberOfMeal: number = 0;


    //? Getter und Setter

    //? Get => ist für das herausholen des Eigenschafts wertes.
    //? get - Namer der Eigenschaften - leere runde Klammer - geschweifte Klammern
    //? in den geschweiften Klammern wird immer ein return geschrieben.

    get age(){
        console.log("Getter is called");
        return this._age
    }

    //? set => ist für das Setzen eines Eigenschaftenwertes.
    //? set - Name der Eigenschaft - dann in den runden Klammern wird der zu setzende Wert übergeben
    //? in den geschweiften Klammern wir dann der Wert einer internen Eigenschaft gesetzt
    //? in value steht der Wert, der nach dem - beim zuweisen steht

    //! V1.
    // set age (value: number) {
    //     this._age = value
    // }

    //! V2.
    set age(value: number){
        if(value < 0 || value > 40){
            console.log("Invalid Value for dog age");
        }
          else {
            this._age = value
          }
    }

    get name(): string{
        return this._name
    }


    constructor (name: string, age: number, owner: Owner) {
        this._name = name;
        this._age = age;
        this._owner = owner
    }

    //! Methoden

    sleep(): void{
        console.log(`${this._name} is sleeping`);
    }

    //? ich kann hier auch Parameter für die Methoden festlegen und damit von außen Werte reingeben
    bark(sound: string): void{
        console.log(`${this._name} says ${sound}`);
    }

    isHungry(): string {
        if(this._numberOfMeal < 4){
            return `${this._name} is Hungry`
        } else {
            return `${this._name} is not Hungry`
        }
    }

    eat(): void{
        
        
        if (this._numberOfMeal >= 4){
            //? ich kann nicht nur Eigenschaften zugreifen, sondern auch auf eigenen Methoden => mit this. aufrufen
            this.sleep()
        } else {
            this._numberOfMeal++
            console.log(`Current number of meals${this._numberOfMeal}`);
        }
    }


    walk(): void {
        console.log(`${this._name} is walking`);
    }

}

export default Dog;