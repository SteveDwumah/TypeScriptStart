class User {
    _userName: string = "";
    _email: string = "";
    _password: string = "";

    get userName(){
        return this._userName
    }

    set userName(value: string){
        if(value.length <= 6 && value.length <= 20){
            this._userName = value
        } else {
            console.log("Username must be between 6 and 20 Characters long");
        }
    }

    get email(){
        return this._email;
    }
    
    set email(value: string){
        if(value.includes("@") && value.includes(".")){
            this._email = value
        } else console.log( "Email Adress must contain @ and dot");
    }

    get password (){
        return this._password
    }

    set password(value: string){
        if(value.length >= 8) {
            this._password = value
        } else {

        }
    }

}

const user1 = new User()
user1.userName = "Batman"
console.log(user1);