//!----- DOM 2 - Aufgabe 1 --------!

function removeSelectedColor() {
    const selectElement = document.getElementById('farbeAuswahlen') as HTMLSelectElement;

    if (selectElement.selectedIndex !== -1) {
        selectElement.remove(selectElement.selectedIndex);
    }
}

const button = document.getElementById('button') as HTMLButtonElement;
button.addEventListener('click', (event) => {
    event.preventDefault(); 
    removeSelectedColor(); 
});