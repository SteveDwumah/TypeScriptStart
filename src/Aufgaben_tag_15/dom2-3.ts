//!----- DOM 2 - Aufgabe 3 --------!

function changeBackgroundColor(event: Event) {
    event.preventDefault();
  
    const selectElement = document.getElementById('farbeAuswahlen') as HTMLSelectElement;
    const selectedColor = selectElement.value.replace(" ", "");
  
    if (selectedColor) {
      document.body.style.backgroundColor = selectedColor;
    }
  }
  
  const button = document.getElementById('button') as HTMLButtonElement;
  button.addEventListener('click', changeBackgroundColor);