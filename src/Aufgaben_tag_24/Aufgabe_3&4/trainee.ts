import IEmployee from "./contracts/IEmployee";

class Trainee implements IEmployee {
    _name: string;
    _age: number;
    _position = "Trainee";
    _startDate: Date;
    
    get position(){
       return this._position
    }
    constructor(name: string, age: number, startDate: Date){
        this._name = name;
        this._age = age;
        this._startDate = startDate
    } 
    _getYearsOfService(): number {
        const currentDate = new Date().getFullYear();
        const yearsOfServices = currentDate - this._startDate.getFullYear();
        return yearsOfServices
        
    }
    
}
export default Trainee