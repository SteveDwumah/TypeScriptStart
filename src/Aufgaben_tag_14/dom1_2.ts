//!----- DOM Aufgabe 5 --------!
let x:boolean = true

//⬇️ Funktion, die die Hintergrundfarbe und Textfarbe der Elemente mit der Klasse "example" ändert ⬇️
function changeBackgroundColor(event: Event) {
    //⬇️ Alle Elemente mit der Klasse "example" abrufen ⬇️
    const elements = document.getElementsByClassName('example');

    //⬇️ Alle Elemente durchlaufen und die Hintergrundfarbe/Textfarbe ändern. ⬇️
    if(x== true){
        for (let i = 0; i < elements.length; i++) {
            elements[i].setAttribute('style', 'background-color: black;');
        }
        event.target.style.color = "white"
        x = false
    }
    else{
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "";
        }
         x = true
        event.target.style.color = "black"
    }
   
}
//⬇️ Den Button abrufen und den Klick-Event-Listener hinzufügen ⬇️
const button = document.querySelector('button.example');
if (button) {
    button.addEventListener('click', changeBackgroundColor);
}