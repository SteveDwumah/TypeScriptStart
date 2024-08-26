import Yoga from "./yoga";

class Activity {
    _name: string;
    private _difficulty:number;

    constructor(name: string, difficulty: number){
        this._name = name,
        this._difficulty = difficulty
    }

    get difficulty(): number {
        return this._difficulty;
    }

    set difficulty(value: number) {
        if (value < 1 || value > 6) {
            console.error("Difficulty must be between 1 and 6.");
        }
        else {this._difficulty = value};
    }

    execute(): void{
        console.log(`Executing ${this._name}`);
    }

}
export default Activity