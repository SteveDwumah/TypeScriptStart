import Besitzer from "./Besitzer";
import Räume from "./Räume";

class Bauplan {

    //? Erstmal vorstellen
    _besitzer?: Besitzer;
    _räume: Räume;
    _farbe: string = "weiß";
    _tiefGarage: boolean;

    //! Bestätigen
    //? Das Keyword zu istallieren ist constructor und ist wie eine normal function
    constructor(besitzer: Besitzer, räume: Räume, tiefGarage: boolean){
        this._räume = räume;
        this._tiefGarage = tiefGarage
        this._besitzer = besitzer ?? new Besitzer("Unbekannt")
    }
    //? METHODEN

    renovieren(neueFarbe: string): void{
        this._farbe = neueFarbe
        console.log(`Das Hau wurde in ${this._farbe} gestrichen`);
    }

    tiefGarageRenovieren(stellplatzHas: boolean): void {
        this._tiefGarage = stellplatzHas;
        console.log(`Die Tiefgarage ist verfügbar ${this._tiefGarage}`);
    }

}

export default Bauplan;