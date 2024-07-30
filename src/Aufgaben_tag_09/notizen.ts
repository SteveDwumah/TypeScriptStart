//!----- Loops Aufgabe 1 --------!

function getHighestNumber (numbersPizza: number[]):number {

    console.log("Das ist das was ich bekomme",numbersPizza)

    // console.log("ich nehme mir einfach das erste element in dem Array als highest number", numbersPizza[0])
    let highestNumber = numbersPizza[0] // => 34



    for(
        let i: number = 1; i < numbersPizza.length; i++
    ){
        // console.log("das ist mein aktuelles i", i)
        // console.log("numberPizza[i] ist jetzt gerade", numbersPizza[i])
        // console.log("meine aktuelle highest number ist", highestNumber)

        if(numbersPizza[i] > highestNumber){
            highestNumber = numbersPizza[i]
        }
    }

    return highestNumber
}

//                                  0  1   2   3    4
const highest1 = getHighestNumber([34, 55, 3, 233, 9])
console.log(highest1);