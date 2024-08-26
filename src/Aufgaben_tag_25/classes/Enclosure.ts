import EnclosureId from "../enums/EnclosureId"

class Enclosure {
    constructor(public id: EnclosureId, public name: string, public builtInYear: number ){
        this.id = id,
        this.name = name,
        this.builtInYear = builtInYear

    }
}

export default Enclosure