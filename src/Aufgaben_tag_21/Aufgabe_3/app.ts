//!------------ Aufgabe 3 --------------------

import IceCreamFlavor from "../../Aufgaben_tag_20/OOP_1";


const vanilla = new IceCreamFlavor('Vanilla', 2, true,);
vanilla.getTotalPrice(2);
vanilla.printInfo();
console.log(`Name lenght of ${vanilla._name} is: ${vanilla.getLengthOfName()}`);


const chocolate = new IceCreamFlavor('Chocolate', 2.50, false)
chocolate.getTotalPrice(4);
chocolate.printInfo();
console.log(`Name lenght of ${chocolate._name} is: ${chocolate.getLengthOfName()}`);

