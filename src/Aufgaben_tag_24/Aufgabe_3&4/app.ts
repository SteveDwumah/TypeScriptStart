import Manager from "./manager";
import Subordinate from "./subordinate";
import Trainee from "./trainee";

const subordinate1 = new Subordinate("Steve", 29, "Developer", new Date("2000-10-03"))
const subordinate2 = new Subordinate("Cleo", 25, "Designer", new Date("2000-10-03"))
const subordinate3 = new Subordinate("Marvin", 33, "Tester",new Date("2000-10-03") )

const manager = new Manager("Theodor", 53, "CEO", new Date("2000-10-03"))

manager.addSubordinate(subordinate1)
manager.addSubordinate(subordinate2)
manager.addSubordinate(subordinate3)

console.log(manager);

console.clear()

const trainee1 = new Trainee("Arnold", 19, new Date("2020-03-14"))
const trainee2 = new Trainee("Gerald", 21, new Date("2019-04-14"))
console.log(trainee1._getYearsOfService());
console.log(trainee2._getYearsOfService());
manager.addSubordinate(trainee1)
manager.addSubordinate(trainee2)
console.log(manager);