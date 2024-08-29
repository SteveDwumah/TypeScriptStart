//! Aufgabe 1

function addNumbers (a: number, b: number, callback: (sum: number) => void){
    const sum = a + b;
    callback(sum)
}

const logSum = (sum: number) => {
    console.log(`Die Summe ist: ${sum}`);
};

addNumbers(5, 10, logSum);

//! Aufgabe 2

function showAlert(sum: number){
    alert(`Die Summe ist: ${sum}`)
}

addNumbers(25, 15, showAlert)