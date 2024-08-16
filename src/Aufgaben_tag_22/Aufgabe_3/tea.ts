import Beverage from "./beverage"

export enum TeaFlavor {
    Green = "Green",
    Black = "Black",
    Chai = "Chai",
    Peppermint = "Peppermint"
}

export class Tea extends Beverage {
    _flavor: TeaFlavor;

    constructor(name: string, price: number, flavor: TeaFlavor) {
        super(name, price);
        this._flavor = flavor;
    }
}