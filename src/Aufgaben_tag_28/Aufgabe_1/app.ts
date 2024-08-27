function showTextAfterSeconds() {
    setTimeout(() => {
        console.log("Du hast 5 Sekunden verstreichen lassen :) ");
    }, 5000);
}

function displayIntervalMessage(): void {
    let counter = 11;
    const intervalId = setInterval(() => {
        if (counter >= 10) {
            console.log(`Start: Warten für 3 Sekunden..`);
            counter--;
        } else if(counter = 8) {
            console.log(`Erledigt. Du hast 3 Sekunden verschwendet`);
            counter--;
        }
        else if (counter = 0) {
            clearInterval(intervalId);
            console.log("Endich Feierabend!");
        }
    }, 1000);
}
 displayIntervalMessage()