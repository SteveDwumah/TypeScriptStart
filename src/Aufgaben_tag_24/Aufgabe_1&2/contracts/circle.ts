import IShape from "./IIShape";

class Cirlcle implements IShape {
    _name: string;
    _color: string;
    _radius: number
    _isRound: boolean;

    constructor(name: string, color: string, radius: number){

        this._name = name;
        this._color = color;
        this._radius = radius;
        this._isRound = true;
    }
    
    public draw(): void {
        console.log("Drawing cirlce");
    }
}

export default Cirlcle
