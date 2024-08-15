import Dog from "./classes/Dog";
import Owner from "./classes/Owner";
import Person from "./classes/Persons";



const obj = {
    name: "john",
    age: 20,
    isMarried: false
}
console.log(obj.name);
console.log(obj.age);


const Joe = new Owner("Joe", "MusterStraße", "111298", "Berlin")
console.log(Joe);

const dog1 = new Dog("Wuffy", 1, Joe)
console.log(dog1);

console.log(dog1._name);
console.log(dog1.age);

dog1.age = 100
console.log(dog1.age);

console.log(dog1.name);



const Elisa = new Owner("Elisa", "Musterstraße", "22361", "Bremen")
const dog2= new Dog("Ankor", 4, Elisa)

dog1.sleep()
dog2.sleep()

dog1.bark("waff waff waff")

console.log(dog2.isHungry());

dog2.eat()
dog2.eat()
dog2.eat()
dog2.eat()
dog2.eat()
dog2.eat()

dog2.walk()
dog2.walk()



const person1 = new Person("Zach", "Zachmann", new Date())

console.log(person1);
console.log(person1.email);
person1.email = "Zach@gmail.de"
console.log(person1.email);