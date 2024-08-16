import Beverage from "./beverage";
import { Tea, TeaFlavor } from "./tea";
import { Coffee, CoffeeType } from "./coffee";

const beverage1 = new Beverage ("Cola", 2.99)
const beverage2 = new Beverage ("Limonade", 1.98)

console.log(beverage1);
console.log(beverage2);

const tea1 = new Tea ("Green Tea", 3.00, TeaFlavor.Green)
const tea2 = new Tea ("Peppermint Tea", 3.20, TeaFlavor.Peppermint)

console.log(tea1);
console.log(tea2);

const coffee1 = new Coffee ("Espresso", 3.50, CoffeeType.Espresso)
const coffee2 = new Coffee ( "Latte", 2.20, CoffeeType.Latte)

console.log(coffee1);
console.log(coffee2);