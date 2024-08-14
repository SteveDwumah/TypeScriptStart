import Person from "./Person";

class SchoolClass {
    id: number;
    name: string;
    endDate?: Date;
    students: Person[];

    constructor(id: number, name:string){
        this.id = id;
        this.name = name;
        this.students = []
        console.log("School class creation successful");
    }
    
    changeName(newName: string): void{
        this.name = newName;
    }
    
    addStudents(student: Person): void{
        this.students.push(student)
    }

    listStudents(): void {
        console.log(`Students in ${this.name}:`);
        this.students.forEach(student => {
            console.log(`${student.id}: ${student.firstName} ${student.lastName}, Birthday: ${student.birthday.toDateString()}`);
        });
    }
}


const class1 = new SchoolClass(1, "Math")
const class2 = new SchoolClass(2, "Science")
const class3 = new SchoolClass(3, "German")

class1.changeName ("History")
class3.changeName ("Sports")

console.log(class1.name);
console.log(class2.name);
console.log(class3.name);

export default SchoolClass