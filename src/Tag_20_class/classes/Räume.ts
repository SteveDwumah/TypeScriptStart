export enum RäumeArten{
    SchlafZimmer = "schlafzimmer",
    WohnZimmer = "wohnzimmer",
    Küche = "Küche",
    BadeZimmer = "Badezimmer"
}


class Räume {
    _räumeAnzahl: number;
    _räumeArten: RäumeArten[]

    constructor(räumeAnzahl: number, räumeArten: RäumeArten[]){
        this._räumeAnzahl = räumeAnzahl;
        this._räumeArten = räumeArten;
    }
}

export default Räume