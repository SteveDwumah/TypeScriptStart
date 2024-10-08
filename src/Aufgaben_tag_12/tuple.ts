//!----- Tuple Aufgabe 1 --------!

type StarWarsActor = [string, string]

const starWarsActors: StarWarsActor[] = [
    ["Luke Skywalker", "Mark Hamill"],
    ["Darth Vader", "James Earl Jones"],
    ["Yoda", "Frank Oz"],
    ["Han Solo", "Harrison Ford"],
    ["Princess Leia", "Carrie Fisher"]
];
console.log(starWarsActors);

for (const [character, actor] of starWarsActors) {
    console.log(`${actor} spielt ${character}`);
}

//!----- Tuple Aufgabe 2 --------!

//? -------------  Siehe employee.ts  --------------------?//

//!----- Enum Aufgabe 1 --------!

enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
console.log(Weekday);

enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

console.log(Month);

console.clear()


//!----- Enum Aufgabe 2 --------!

enum PizzaSize {
    Small,
    Medium,
    Large,
    Family
}

enum PizzaIngredients {
    Cheese,
    Onion,
    Salami,
    Sucuk,
    Pepperoni,
    Tomatos,
    Tuna,
    Ham
}

type Pizza = {
    size: PizzaSize,
    ingredients: PizzaIngredients[]
}

const pizzaTuna: Pizza = {
    size: PizzaSize.Family,
    ingredients: [PizzaIngredients.Tuna, PizzaIngredients.Cheese, PizzaIngredients.Onion ]
}
console.log(pizzaTuna);

const pizzaSucuk: Pizza = {
    size: PizzaSize.Medium,
    ingredients: [PizzaIngredients.Sucuk, PizzaIngredients.Cheese, PizzaIngredients.Onion, PizzaIngredients.Pepperoni]
}

pizzaSucuk.ingredients.forEach((singleIngredient) => {
    console.log(`Eine Zutat ist ${PizzaIngredients[singleIngredient]}`);
})

console.log(pizzaSucuk);

//!----- Enum Aufgabe 3 --------!

enum ClothingColor {
    Gelb = "#FFFF00",
    Orange = "#FFA500",
    Pink = "#FFC0CB",
    Blau = "#0000FF",
    Lila = "#800080",
    Grau = "#808080"
}

const allColors: {farbe: string, hex: string}[] = [
    {farbe: "Gelb", hex: ClothingColor.Gelb},
    {farbe: "Orage", hex: ClothingColor.Orange},
    {farbe: "Pink", hex: ClothingColor.Pink},
    {farbe: "Blau", hex: ClothingColor.Blau},
    {farbe: "Lila", hex: ClothingColor.Lila},
    {farbe: "Grau", hex: ClothingColor.Grau}
]
    // ⬇️⬇️ Das HTML-Element mit der ID "button-container" suchen ⬇️⬇️
const buttonContainer = document.getElementById("button-container");

if (buttonContainer) {
    allColors.forEach(color => {
    //   ⬇️⬇️ Ein neuen Button erstellen ⬇️⬇️
        const button = document.createElement("button");
    //   ⬇️⬇️ Die Hintergrundfarbe des Buttons auf die entsprechende Farbe setzen ⬇️⬇️
        button.style.backgroundColor = color.hex;
    //   ⬇️⬇️ Den Text des Buttons auf den Namen der Farbe setzen ⬇️⬇️
        button.textContent = color.farbe;
    //   ⬇️⬇️ Den Button zum Container hinzufügen ⬇️⬇️
        buttonContainer.appendChild(button);
    });
}

//!----- Set Aufgabe 1 --------!

const starWarsCharacters = new Set<string>(["Luke Skywalker", "Darth Vader", "Obi Wan Kenobi"])
console.log(starWarsCharacters);
starWarsCharacters.add("Leia Organa")
console.log(starWarsCharacters);
//! ⬇️⬇️ Wenn versucht wird ein Wert hinzuzufügen, der bereits vorhanden ist, wird dieser ignoriert. ⬇️⬇️
starWarsCharacters.add("Leia Organa")
console.log(starWarsCharacters);