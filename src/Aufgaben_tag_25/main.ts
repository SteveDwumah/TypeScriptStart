import Animal from "./classes/Animal";
import EnclosureId from "./enums/EnclosureId";
import { createAnimal } from "./function/createAnimal";



//* Elemente holen

const selectAnimal = document.getElementById("select-animal") as HTMLSelectElement;
const nameOfAnimalInput = document.getElementById("nameInput") as HTMLInputElement;
const birthYearInput = document.getElementById("birthYearInput") as HTMLInputElement;
const selectContinent = document.getElementById("select-continent") as HTMLSelectElement;
const selectSpecialNeeds = document.getElementById("select-specialNeeds") as HTMLSelectElement;
const selectHabitat = document.getElementById("select-enclosure") as HTMLSelectElement;
const savannahEnclosure = document.getElementById("savannah") as HTMLElement;
const jungleEnclosure = document.getElementById("jungle") as HTMLElement;
const reptileEnclosure = document.getElementById("reptileHouse") as HTMLElement;
const aquariumEnclosure = document.getElementById("aquarium") as HTMLElement;

const createAnimalButton = document.getElementById("button") as HTMLInputElement;



const allZooAnimals: Animal[] = []
const savannahAnimals: Animal[] = [];
const jungleAnimals: Animal[] = [];
const reptileHouseAnimals: Animal[] = [];
const aquariumAnimals: Animal[] = [];


createAnimalButton?.addEventListener("click", (event: Event) => {
    event.preventDefault()

    const type = selectAnimal.value;
    const name = nameOfAnimalInput.value;
    const yearOfBirth = birthYearInput.value;
    const continent = selectContinent.value;
    const specialNeeds = selectSpecialNeeds.value
    const habitat = selectHabitat.value;
    console.log(type, name, yearOfBirth, continent, specialNeeds, habitat);


    const animal = createAnimal(type, name, Number(yearOfBirth), Number(continent), specialNeeds, Number(habitat))

    console.log(animal);

    if (animal) {
        if (
            !type ||
            !name ||
            !yearOfBirth ||
            !continent ||
            !specialNeeds ||
            !habitat
        ) {
            console.error("All Fields are required");
        } else {
            allZooAnimals.push(animal);
            console.log(allZooAnimals);
        }


        function chooseHabitat() {
            if (type && name && yearOfBirth && continent && specialNeeds && habitat) {
                if (animal?._enlosureId === EnclosureId.SavannahHabitat) {
                    savannahAnimals.push(animal);
                    console.log("Savannah Habitat", savannahAnimals);
                }
                if (animal?._enlosureId === EnclosureId.JungleHabitat) {
                    jungleAnimals.push(animal);
                    console.log("Jungle Habitat", jungleAnimals);
                }
                if (animal?._enlosureId === EnclosureId.RepltileHouse) {
                    reptileHouseAnimals.push(animal);
                    console.log("Reptile Habitat", reptileHouseAnimals);
                }
                if (animal?._enlosureId === EnclosureId.AquaticHabitat) {
                    aquariumAnimals.push(animal);
                    console.log("aquarium Habitat", aquariumAnimals);
                }
            }
        }
        chooseHabitat()

    }
})

function showAllAnimals(){
    const output = document.createElement("div")
    output.className = "output"

    allZooAnimals.forEach((animal) => {
        const card = document.createElement("div")
        card.className = "card"
        const emoji = document.createElement("div")
        emoji.innerHTML = animal._emoji;
        card.appendChild(emoji)
        const name = document.createElement("div");
        name.innerHTML = `name: ${animal._name}`;
        card.appendChild(name);
        const currentYear = new Date().getFullYear();
        const age = currentYear - animal._yearOfBirth;
        const ageDiv = document.createElement("div");
        ageDiv.innerHTML = `Age: ${age.toString()}`;
        card.appendChild(ageDiv);
        const origin = document.createElement("div");
        const continent = animal._continent;
        if(continent) {
            switch (continent.toString()) {
                case "0":
                    origin.innerHTML = "Origin: Antartica";
                    break;
                case "1":
                    origin.innerHTML = "Origin: Australia";
                    break;
                case "2":
                    origin.innerHTML = "Origin: Asia";
                    break;
                case "3":
                    origin.innerHTML = "Origin: Africa";
                    break;
                case "4":
                    origin.innerHTML = "Origin: Europe";
                    break;
                case "5":
                    origin.innerHTML = "Origin: North America";
                    break;
                case "6":
                    origin.innerHTML = "Origin: South America";
                    break;
                default:
                    break;   
            }
        }
        card.appendChild(origin)


        const enclosure = document.createElement("div")
        if(animal._enlosureId.toString()){
            switch
        }
    })
}