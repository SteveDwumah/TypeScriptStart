import Alien from "./alien";

const alien1 = new Alien("Steve", "Mars", "Milchstraße", "Blue");
const alien2 = new Alien("Cleo","Erde", "Milchstraße", "Green" );
const alien3 = new Alien("Ratchet", "Fastoon", "Polaris Galaxy", "Yellow");

console.log(`Name: ${alien1._name}, Planet: ${alien1._planet}, Galaxy: ${alien1._galaxy}, Color: ${alien1.color} `);
console.log(`Name: ${alien2._name}, Planet: ${alien2._planet}, Galaxy: ${alien2._galaxy}, Color: ${alien2.color} `);
console.log(`Name: ${alien3._name}, Planet: ${alien3._planet}, Galaxy: ${alien3._galaxy}, Color: ${alien3.color} `);