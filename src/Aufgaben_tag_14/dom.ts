//!----- DOM Aufgabe 1 --------!

//⬇️ Funktion zum Hinzufügen eines neuen Elements zur Einkaufsliste ⬇️
function addItem(): void {
    const inputElement = document.getElementById('inputText') as HTMLInputElement;
    const listElement = document.getElementById('myList') as HTMLUListElement;

    //⬇️ Überprüfen, ob das Eingabefeld nicht leer ist ⬇️
    if (inputElement.value.trim() !== '') {
        //⬇️ Erstellen eines neuen Listenelements ⬇️
        const newItem = document.createElement('li');
        newItem.textContent = inputElement.value;

        //⬇️ Hinzufügen des neuen Elements zur Liste ⬇️
        listElement.appendChild(newItem);

        //⬇️ Leeren des Eingabefeldes ⬇️
        inputElement.value = '';
    }
}
//⬇️ Funtion des Event-Listeners ⬇️
function init(): void {
    const addButton = document.getElementById('addButton') as HTMLButtonElement;
    addButton.addEventListener('click', addItem);
}
init()

//!----- DOM Aufgabe 2 --------!

const infoElement = document.getElementById("info") as HTMLDivElement
//⬇️ Die Elemente h1 & h2 erstellen ⬇️
if (infoElement) {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Hello World";

    const h2 = document.createElement("h2");
    h2.innerHTML = "How are you?";
    //⬇️ Die Elemente dem div "info" hinzufügen ⬇️
    infoElement.appendChild(h1);
    infoElement.appendChild(h2);
}


const containerElement = document.getElementById("container") as HTMLDivElement
//⬇️ Die Elemente p & input erstellen ⬇️
if (containerElement) {
    const p = document.createElement("p");
    p.innerHTML = "This is a paragraph";
    //⬇️ Das Element p dem div "container" hinzufügen ⬇️
    containerElement.appendChild(p);

    const input = document.createElement("input");
    //⬇️ Dem Element input das Attribut "text" zuweisen ⬇️
    input.setAttribute("type", "text");
    //⬇️ Das Element input dem div "container" hinzufügen ⬇️
    containerElement.appendChild(input);
}

//!----- DOM Aufgabe 3 --------!


const galleryElement = document.getElementById("gallery") as HTMLElement

if (galleryElement) {
    
    for (let i = 1; i <= 3; i++) {
        //⬇️ Das Element figure erstellen ⬇️
        const figure = document.createElement("figure");

        //⬇️ Das img Element erstellen und Attribute zuweisen ⬇️
        const img = document.createElement("img");
        img.setAttribute("src", `https://picsum.photos/id/237/200/300`);
        img.setAttribute("alt", `Bild ${i}`);

        //⬇️ Bild beschreibung erstellen ⬇️
        const imgCaption = document.createElement("p");
        imgCaption.innerText = `Fig.${i}`

        //⬇️ Das img Element und die Bildbeschreibung zum figure Element hinzufügen ⬇️ 
        figure.appendChild(img);
        figure.appendChild(imgCaption);

        //⬇️ Das figure Element der gallery hinzufügen ⬇️
        galleryElement.appendChild(figure);
    }
}

//!----- DOM Aufgabe 4 --------!

//⬇️ Funktion zum Hinzufügen von Eingabetext und aktuellem Datum ⬇️
function addTextAndDate(): void {
    const inputField = document.getElementById('textInput') as HTMLInputElement;
    const outputDiv = document.getElementById('output') as HTMLElement
   
    if(inputField && outputDiv){
        const userInput: string = inputField.value
        const now: Date = new Date()
        //⬇️ Eingabetext mit Datum im Output-Div anzeigen lassen ⬇️
        outputDiv.innerHTML = `<p>${userInput} - ${now}</p>`;
        inputField.value = '';
    }
}

//⬇️ Funtion des Event-Listeners ⬇️
const addButton = document.getElementById('addButton2') as HTMLButtonElement;
if (addButton) {
    addButton.addEventListener('click', addTextAndDate);
}
