const button = document.getElementById('btn') as HTMLButtonElement;
const zeitDiv = document.querySelector('.zeit') as HTMLDivElement;

let intervalId = 0;

button.addEventListener('click', () => {
    let timeLeft = 100;

    intervalId = setInterval(() => {
        if (timeLeft >= 0) {
            zeitDiv.textContent = `${timeLeft}%`;
            timeLeft--;
        } else {
            clearInterval(intervalId);
            intervalId = 0;
        }
    }, 100);
});
