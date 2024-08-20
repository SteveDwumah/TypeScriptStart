import IPizza from "./IPizza";
import OrderStatus from "./OrderStatus";

interface IOrder {
    _orderNumber: number;
    _customerName: string;
    //? Ich kann auch ein Interface in der Type definitionen eines anderen verwenden ⬇️
    _pizzen: IPizza [];
    _status: OrderStatus;
    //? Schreibweise wie bei Type: Methodenname: () für Parameter => Rückgabedatentyp
    cancel: () => boolean

}
export default IOrder