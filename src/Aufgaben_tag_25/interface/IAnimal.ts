import Continent from "../enums/Continent";
import EnclosureId from "../enums/EnclosureId";

interface IAnimal {
    _emoji: string;
    _type: string;
    _name: string;
    _yearOfBirth: number;
    _continent: Continent;
    _specialNeeds: string;
    _enlosureId: EnclosureId;
}
export default IAnimal