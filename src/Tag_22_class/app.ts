
//!------- Recap----------!
import "./Recap/user"
import "./Recap/ShoppingCard"
 console.clear()
//!--------------------------!


//! --------- bsp. Book ----------------!
import LiberyBook from "./classes/LiberyBook"
import Person from "../Aufgaben_tag_20/Person"
import Employee from "./classes/Employee"




const book1 = new LiberyBook("Die Kunst des Lebens", "Erich Fromm")
console.log(book1);

book1.borrowBook("Elisa")
// book1.returnBook()

book1.borrowBook("Steve")
//! --------------------------------------!


const person1 = new Person ("Jens", "Müller", "232425235")
console.log(person1);


const employee1 = new Employee("Joe", "Doe", "19730289723")

console.log(employee1);

employee1._isMarried = true
