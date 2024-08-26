import IStudent from "./student";

function processStudent(student: IStudent){
    console.log(`Processing ${student.name} ...`);
}

const student1 = {
    name: "Steve",
    age: 29
} as IStudent

processStudent(student1)
//! Es wird "Processing Steve ..." ausgegeben.

const student2 = {
    age: 22
} as IStudent

processStudent(student2)
//! Es wird "Processing undefined ..." ausgegeben.
