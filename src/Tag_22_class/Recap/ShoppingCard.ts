import ShoppingCardItems from "./ShoppingCardItems";

class ShoppingCard {
    private _shoppingCarItems: ShoppingCardItems[] = [];
    private _totalPrice: number = 0;
    //? An der Stelle brauchen wir kein constructor mehr, weil die Eigenschaften bereits zugewiesen worden.

    get items(): ShoppingCardItems[] {
        return this._shoppingCarItems
    }

    set items(value:ShoppingCardItems[]){
        this._shoppingCarItems = value
    }

    addItem(item: ShoppingCardItems): void{
        this._shoppingCarItems.push(item)
        this._totalPrice += item.price
    }

    private calculateTotalPrice(): number{
        return this._totalPrice
    }
}



const shopping1 = new ShoppingCard();

console.log(shopping1);

const products: string[] = ["Cola", "Icecream", "Pizza"]
const prices: number[] = [1.09, 2.05, 6.99]



const datenBank = new Map<string, number>();
datenBank.set("Cola", 1.09)

console.log(datenBank);

products.forEach((product, index) => {
    console.log(index);
    console.log(product);
    datenBank.set(product, prices[index])
})

console.log(datenBank);

let index = 0
datenBank.forEach((value, key) =>{
    const shoppingItem = new ShoppingCardItems(key, value, index)
    index++
    console.log(shoppingItem);
})

