import { ICharacters, IInfo, IResult, ILocation } from "./interfaces/ICharacters";
import "./style.css"

const Base_URL = `https://rickandmortyapi.com/api`;
const Characters_Url = `${Base_URL}/character`;

const characterOutput = document.getElementById("character-output") as HTMLDivElement;
const loader = document.querySelector(".loader") as HTMLSpanElement;

loader.style.display = "none"

if(characterOutput){
    loader.style.display = "block"
    fetch(Characters_Url)
    .then((response: Response) => {
        if(response.ok){
            return response.json()
        } else{
            throw Error(`${response.status} ${response.statusText}`)
        }
    })
    .then ((characters: ICharacters) => {
        return characters.results;
    })
    .then((result: IResult[]) => {
        console.log(result);
        displayCharacters(result)
    })
    .catch((error) => {
        characterOutput.innerHTML = `Could not get data, Error: ${error}`
    })
    .finally(() => {
        // loader.style.display = "none"
    })
}

function displayCharacters(results: IResult[]){
    if(characterOutput){
        characterOutput.innerHTML = ("")
        results.forEach((result: IResult) => {
        characterOutput.appendChild(createParagraph("Name: ", result.name ));
        characterOutput.appendChild(createParagraph("Gender: ", result.gender ));
        characterOutput.appendChild(createParagraph("Species: ", result.species ));
        characterOutput.appendChild(createParagraph("Location: ", result.location.name ));
        characterOutput.appendChild(createParagraph("Origin: ", result.origin.name ))
        characterOutput.style.borderStyle = "solid"
        characterOutput.appendChild(createImage(result.image))
        // const image = document.createElement("img") as HTMLImageElement;
        // image.src = result.image;
        // characterOutput.appendChild(image);
        
        })
    }
}

function createParagraph(label: string, value: string): HTMLParagraphElement {
    const paragraph = document.createElement("p") as HTMLParagraphElement;
    paragraph.textContent = `${label} ${value}`
    return paragraph
}
function createImage(linkImg: string): HTMLImageElement {
    const image = document.createElement("img") as HTMLImageElement;
    image.src = linkImg
    return image
}