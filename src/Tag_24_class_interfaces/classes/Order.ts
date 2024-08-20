import IOrder from "../interfaces/IOrder";
import IPizza from "../interfaces/IPizza";
import OrderStatus from "../interfaces/OrderStatus";


//? Ich bekomme beim leeren anlegen der classe direkt einen fehler, dass die Eigenschaften und die Methoden fehlen
//! Ich kann dann den Klassennamen auswählen und auf die gelbe Glühbirne klicken
class Order implements IOrder{
    _orderNumber: number;
    _customerName: string;
    _pizzen: IPizza[] = [];
    _status: OrderStatus;
    cancel(): boolean;

    constructor(orderNumber: number, 
        customerName: string,
        status: OrderStatus

        
    ){
        this._orderNumber = orderNumber;
        this._customerName = customerName;
        this._status = status;
    }

    if (OrderStatus.Created) {
        return false
    } else {
        this._status = OrderStatus.Canceled
        return true
    }
    
}

