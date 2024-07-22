import { compareAsc, format } from "date-fns";

//!----- Aufgabe 1 --------!

const date1: Date = new Date()
console.log(date1);
const date2: Date = new Date(0);
const date3: Date = new Date(31556908800);
const date4: Date = new Date(86400000);

let output: string = 
    `<p>Date 1: ${date1.toString()}</p>
    <p>Date 2: ${date2.toString()}</p>
    <p>Date 3: ${date3.toString()}</p>
    <p>Date 4: ${date4.toString()}</p>`;
document.getElementById("dates")!.innerHTML = output

//!----- Aufgabe 2 --------!

const datesVariable = new Date()
const day: number = datesVariable.getDate()
const month: number = datesVariable.getMonth()
const year: number = datesVariable.getFullYear()
document.getElementById("dates2")!.innerHTML = `${day}-${month}-${year}`
document.getElementById("dates3")!.innerHTML = `${day}/${month}/${year}`

