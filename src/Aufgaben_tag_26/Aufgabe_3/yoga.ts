import Activity from "./activity";

enum YogaType {
    Hatha,
    Vinyasa,
    Ashtanga,
    Bikram
}

class Yoga extends Activity {
    private _type: YogaType;

    constructor(name: string, difficulty: number, type: YogaType) {
        super(name, difficulty);
        this._type = type;
    }

    get type(): YogaType {
        return this._type;
    }
}
export default Yoga