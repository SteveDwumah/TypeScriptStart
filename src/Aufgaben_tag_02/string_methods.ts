
//!----- Aufgabe 1 --------!
const firstName = "Steve"
console.log(firstName.length);
const lastName = "Dwumah"
console.log(lastName.length);
console.log(firstName.length + lastName.length);

//!----- Aufgabe 2 --------!

const earthQuote = "How inappropriate to call this planet Earth, when clearly it is Ocean."
console.log(earthQuote.indexOf("h"));
console.log(earthQuote.indexOf("Earth"));
console.log(earthQuote.indexOf("Moon"));

//!----- Aufgabe 3 --------!

let oceanQuote = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."
console.log(oceanQuote.search(";"));
console.log(oceanQuote.search("green"));
console.log(oceanQuote.search("blue"));

//!----- Aufgabe 4 --------!

const susisStatus: string = 'Susi is going to codingschool'
console.log(susisStatus.slice(0,4));
console.log(susisStatus.slice(5, 7));
console.log(susisStatus.slice(5, 17))

const susi: string = susisStatus.slice(0,4)
const is: string = susisStatus.slice(4, 8)
const goingTo: string = susisStatus.slice(5, 17)
const school: string = susisStatus.slice(23,30)
const goingSchool: string = goingTo.concat(school)

console.log(goingSchool);

const neueSusi:string = is
console.log(neueSusi);

const contenElement1 = document.getElementById("content")!
contenElement1.innerHTML = susi

const contenElement = document.getElementById("content1")!
contenElement.innerHTML = neueSusi

const contenElement2 = document.getElementById("content2")!
contenElement2.innerHTML = goingSchool

const contenElement3 = document.getElementById("content3")!
contenElement3.innerHTML = school

const contenElement4 = document.getElementById("content4")!
contenElement4.innerHTML = susi.concat(is, school)

//!----- Aufgabe 5 --------!

const whereIsSusi = 'Susi is back from codingschool'

const susi1:string = whereIsSusi.substring(0,4)
console.log(susi1);

document.write(susi1+"hallo")

const test = document.write("<p class='test'>Ich bin ein p-Tag mit document.write()</p>")