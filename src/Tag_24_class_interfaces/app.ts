type PersonMitType = {
    useName: string;
    age: number
}

// type PersonMitType = {
//     email: string
// }

const person1: PersonMitType = {
    useName: "Joe",
    age: 20
}
console.log(person1);

//! Interfaces => Keyword  => interface und dann der Name der Typisierung

interface PersonMitInterface {
    userName: string;
    age: number;
}

interface PersonMitInterface {
    email: string;
    printInfo: () => void
}

const person2 :PersonMitInterface = {
    userName: "John",
    age: 30,
    email: "John@web.de"
    printInfo() {
        
    },
}

