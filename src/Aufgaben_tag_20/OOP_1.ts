class IceCreamFlavor {
    _name: string = "";
    _price: number = 0;
    _isPopular: boolean = false

    constructor(name="", price = 0, isPopular = false) {
        this._name = name;
        this._price = price;
        this._isPopular = isPopular
    }

    getTotalPrice(numberOfScoops: number): void {
        const totalPrice = this._price * numberOfScoops;
        console.log(`Total price for ${numberOfScoops} scoops of ${this._name}: ${totalPrice.toFixed()} Euro`);
    }

    printInfo(): void {
        console.log(`Flavor ${this._name} is popular and costs ${this._price.toFixed()} Euro.`);
    }

    getLengthOfName(): number {
        return this._name ? this._name.length : 0;
    }
}



const vanilla = new IceCreamFlavor("Vanilla", 1.50, true);
const chocolate = new IceCreamFlavor("Chocolate", 1.75, true);
const strawberry = new IceCreamFlavor("Strawberry", 1.60, false);
const cookies = new IceCreamFlavor("Cookies", 2.00, true)

const iceCreamFlavors = [vanilla, chocolate, strawberry, cookies]

iceCreamFlavors.forEach(flavor => {
    if(flavor._isPopular) {
        console.log(`${flavor._name} is Popular` );
    } else {
        console.log(`${flavor._name} is not Popular`);
    }
});


export default IceCreamFlavor