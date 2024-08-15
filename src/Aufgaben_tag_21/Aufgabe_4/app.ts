//!----------------------- Aufgabe 4 -------------------


class Customer {
    private _name: string;
    private _email: string;
    private _address: string;
    private _postalCode: number;
    private _city: string;

    constructor(name: string, email: string, address: string, postalCode: number, city: string){
        this._name = name;
        this._email = email;
        this._address = address;
        this._postalCode = postalCode;
        this._city = city;
    }

    get name(): string{
        return this._name
    }
    set name(value: string) {
        if (value.length > 60) {
            console.error("Der Name darf nicht länger als 60 Zeichen sein.");
        } else {
            this._name = value;
        }
    }
    

    get email(): string{
        return this._email
    }
    set email(value: string){
        if(value.includes("@") || value.includes(".")){
            console.error("Die E-Mail-Adresse muss ein '@'-Zeichen und einen Punkt enthalten.");
        } else {
            this._email = value
        }
    }


    get address(): string {
        return this._address;
    }
    set address(value: string) {
        this._address = value;
    }

    
    get postalCode(): number {
        return this._postalCode;
    }
    set postalCode(value: number) {
        const postalCodeString = value.toString();
        if (postalCodeString.length !== 5 || value < 0 || value > 99999) {
            console.error("Die Postleitzahl muss 5-stellig und zwischen 00000 und 99999 liegen.");
        } else {
            this._postalCode = value;
        }
    }


    get city(): string {
        return this._city;
    }
    set city(value: string) {
        this._city = value;
    }
}


const customer = new Customer("Steve Dwumah", "Steve@example.com", "Musterstraße 3", 12345, "Hamburg");
customer.name = "Mein Name darf auf keinen Fall über 60 Zeichen lang sein........ "
customer.email = "steveExample.com";
customer.postalCode = 123444
