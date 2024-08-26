import Activity from "./activity";

class Running extends Activity {
    private _distance: number;

    constructor(name: string, difficulty: number, distance: number){
        super(name, difficulty)
        this._distance = distance
    }

    warmUp(): void {
        const duration = this.getDuration(this._distance);
        console.log(`Warming up for ${duration} minutes.`);
    }

    coolDown(): void {
        const duration = this.getDuration(this._distance);
        console.log(`Cooling down for ${duration} minutes.`);
    }

    private getDuration(distance: number): number {
        if (distance >= 10) {
            return 5;
        } else if (distance >= 7) {
            return 4;
        } else if (distance >= 4.5) {
            return 3;
        } else if (distance >= 3) {
            return 2;
        } else {
            return 1;
        }
    }
}