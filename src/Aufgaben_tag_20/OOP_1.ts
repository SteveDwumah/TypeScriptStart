class IceCreamFlavor {
    _name: string = "";
    _price: number = 0;
    _isPopular: boolean = false

    constructor(name="", price = 0, isPopular = false) {
        this._name = name;
        this._price = price;
        this._isPopular = isPopular
    }
}

const vanilla = new IceCreamFlavor("Vanilla", 1.50, true);
const chocolate = new IceCreamFlavor("Chocolate", 1.75, true);
const strawberry = new IceCreamFlavor("Strawberry", 1.60, false);
const cookies = new IceCreamFlavor("Cookies", 2.00, true)

const iceCreamFlavors = [vanilla, chocolate, strawberry, cookies]

iceCreamFlavors.forEach(flavor => {
    if(flavor._isPopular) {
        console.log(flavor._name);
    }
});


export default IceCreamFlavor