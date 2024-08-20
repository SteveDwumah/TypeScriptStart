import Cirlcle from "./contracts/circle";
import Rectangle from "./rectangle";

const cirlce1 = new Cirlcle  ("cirlce", "Blue", 20)
const cirlce2 = new Cirlcle  ("cirlce", "Red", 2)
const cirlce3 = new Cirlcle  ("cirlce", "Yellow", 5)

console.log(cirlce1);
console.log(cirlce2);
console.log(cirlce3);

console.clear()


const rectangle1 = new Rectangle ("rectangle", "Green", 20, 10)
console.log(rectangle1);

cirlce1.draw();
rectangle1.draw();

console.log(rectangle1._isRound);
console.log(cirlce1._isRound);

