class Owner {
    _name: string;
    _address: string;
    _postalCode: string;
    _city: string;
    birthday?: Date;

    constructor(name: string, address: string, postalCode: string, city: string){
        //? die parameter müssen nicht genauso heißen wie die Eigenschaften, es empfiehlt sich aber aus Lesbarkeitsgründen.
        this._name = name;
        this._address = address;
        this._postalCode = postalCode;
        this._city = city;
    }
    
}

export default Owner