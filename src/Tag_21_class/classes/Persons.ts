class Person {
    _firstName: string;
    _lastName: string;
   private  _email: string = "";
    private _birthday: Date;

    get email(){
        return this._email
    }

    set email(value: string){
        if(value.includes("@")){
            this._email = value
        } else {
            console.log("Email must include an @");
        }
    }

    constructor(firstName:string, lastName: string, birthday: Date){
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthday = birthday;

    }
}

export default Person