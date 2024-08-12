import {createProduct} from "./src/product/ProductFunctions"
import { addProductToService } from "./src/product/ProductServiceFunctions";
import { createOrder } from "./src/order/OrderFunctions";
import { addOrderToService } from "./src/order/OrderServiceFunctions";

console.log(createProduct("Test Produkt", 22));
console.log(addProductToService("Wellness", "Massage"));

console.log(createOrder());
console.log(addOrderToService());