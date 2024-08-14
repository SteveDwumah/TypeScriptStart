//!------- Aufgabe 1 ---------

function countLetters(text: string, filter: (letter: string) => boolean): number {
    return Array.from(text).filter(filter).length;
}

function countUppercaseLetters(text: string): number {
    return countLetters(text, letter => letter >= 'A' && letter <= 'Z');
}


function countSpaces(text: string): number {
    return countLetters(text, letter => letter === ' ');
}

function countVowels(text: string): number {
    const vowels = 'aeiouAEIOU';
    return countLetters(text, letter => vowels.includes(letter));
}

function displayCount(count: number, text: string): void {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.innerText = `${text}: ${count}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput') as HTMLInputElement;

    document.getElementById('countUppercaseBtn')?.addEventListener('click', () => {
        const count = countUppercaseLetters(textInput.value);
        displayCount(count, 'Anzahl der Großbuchstaben');
    });

    document.getElementById('countSpacesBtn')?.addEventListener('click', () => {
        const count = countSpaces(textInput.value);
        displayCount(count, 'Anzahl der Leerzeichen');
    });

    document.getElementById('countVowelsBtn')?.addEventListener('click', () => {
        const count = countVowels(textInput.value);
        displayCount(count, 'Anzahl der Vokale');
    });
});