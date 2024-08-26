type Alcohol = {
    name: string,
    percentage: number,
    type: string
}

type Mixer = {
    name: string,
    type: string,
    carbonated: boolean
}

type Cocktail = Alcohol & Mixer;

const myCocktail: Cocktail = {
    name: "Gin-Tonic",
    percentage: 18,
    type: "Gin",
    carbonated: true
};
console.log(myCocktail);