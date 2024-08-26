function generateLottoNumber (): number {
    
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber > 49){
        throw new Error("Zahl größer als 49")
    }
    return randomNumber
}

const lottoResults: number[] = [];
const targetCount = 7;

while (lottoResults.length < targetCount) {
    try {
        const number = generateLottoNumber();
        
        if (!lottoResults.includes(number)) {
            lottoResults.push(number);
        }
    } catch (error) {
    
        console.error(error);
    }
}

console.log("Lottozahlen:", lottoResults);