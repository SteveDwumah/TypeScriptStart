class Besitzer {
    _vorName?: string;
    _nachName: string;
    _handyNummer?: number


    constructor( nachName: string, vorName?: string, handyNummer?: number){
        this._vorName = vorName;
        this._nachName = nachName;
        this._handyNummer = handyNummer
    }


    printInfo(): void {
        console.log(`Der Besitzer ist ${this._vorName}) und die Handynummer lautet${this._handyNummer}`)
    }
}

export default Besitzer;