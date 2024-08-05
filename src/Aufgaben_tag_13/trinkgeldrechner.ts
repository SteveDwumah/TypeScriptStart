
enum ServiceQuality {
    Schlecht = 'schlecht',
    Mittel = 'mittel',
    Super = 'super'
}

type TipCalculator = {
    billAmount: number;
    numberOfPeople: number;
    serviceQuality: ServiceQuality;
    calculateTotal: () => number;
    calculatePerPerson: () => number;
}

//⬇️ Funktion zur Berechnung des Trinkgeldes ⬇️
const calculateTip = (billAmount: number, serviceQuality: ServiceQuality): number => {
    let tipPercentage: number;

    // ⬇️ Bestimmt den Trinkgeldprozentsatz ⬇️
    switch (serviceQuality) {
        case ServiceQuality.Schlecht:
            tipPercentage = 0.02
            break;
        case ServiceQuality.Mittel:
            tipPercentage = 0.10
            break;
        case ServiceQuality.Super:
            tipPercentage = 0.20
            break;
        default:
            tipPercentage = 0
    }

    //⬇️ Berechnet das Trinkgeld ⬇️
    return billAmount * tipPercentage;
}

//⬇️ Funktion zur Erstellung des Trinkgeldrechners ⬇️
const createTipCalculator = (billAmount: number, numberOfPeople: number, serviceQuality: ServiceQuality): TipCalculator => {
    return {
        billAmount,
        numberOfPeople,
        serviceQuality,
        calculateTotal: function () {
            return this.billAmount + calculateTip(this.billAmount, this.serviceQuality);
        },
        calculatePerPerson: function () {
            return this.calculateTotal() / this.numberOfPeople;
        }
    };
}

//⬇️ Event-Listener für den Button ⬇️
document.getElementById('calculateBtn')!.addEventListener('click', () => {
    const billAmount = parseFloat((<HTMLInputElement>document.getElementById('billAmount')).value);
    const numberOfPeople = parseInt((<HTMLInputElement>document.getElementById('numberOfPeople')).value);
    const serviceQuality = (<HTMLSelectElement>document.getElementById('serviceQuality')).value as ServiceQuality;

    const tipCalculator = createTipCalculator(billAmount, numberOfPeople, serviceQuality);
    // ⬇️ Die Ergebnisse ausgeben ⬇️
    const resultsDiv = document.getElementById('results')!;
    resultsDiv.innerHTML = `
        <h2>Ergebnisse:</h2>
        <p>Trinkgeld: ${calculateTip(tipCalculator.billAmount, tipCalculator.serviceQuality).toFixed(2)} EUR</p>
        <p>Gesamtrechnung: ${tipCalculator.calculateTotal().toFixed(2)} EUR</p>
        <p>Betrag pro Person: ${tipCalculator.calculatePerPerson().toFixed(2)} EUR</p>
    `;
});