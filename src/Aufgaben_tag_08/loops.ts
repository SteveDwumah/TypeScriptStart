//!----- Loops Aufgabe 1 --------!

for (let i: number = 0; i <= 10; i++) {
    console.log("Hello World", i);
}

//!----- Loops Aufgabe 2 --------!

let numbersToTen: number[]  = [];

for (let i: number = 0; i <= 10; i++) {
    numbersToTen.push(i)
}
console.log(numbersToTen);

//!----- Loops Aufgabe 3 --------!

let counter = 0

while (counter < 10) {
    counter++

    console.log("Hello World", counter);
}

//!----- Loops Aufgabe 4 --------!

let friendNames: string [] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"]
for (const name of friendNames) {
    console.log(name);
}

//!----- Loops Aufgabe 5 --------!

let numberCounter: number = 1
const inner: HTMLElement | null = document.getElementById("content")!
  
do {
    inner.innerHTML += `<p>The number is ${numberCounter}</p>`
    console.log("The number is", numberCounter);
    numberCounter++
  } while (numberCounter <= 5);

  //!----- Loops Aufgabe 6 --------!

  let numberLoop: number = 2
  const nummerInner: HTMLElement | null = document.getElementById("content2")!

  do{
    console.log(numberLoop);
    nummerInner.innerHTML += `${numberLoop}</p>`
    numberLoop +=2
  } while (numberLoop <= 20)

    console.clear ()
  //!----- Loops Aufgabe 7 --------!

function createImageNames (){
    let returnArray: string [] = []
    for(let index = 0; index <=100; index++){
        if(index <10){
            returnArray.push("image_00" + index + ".jpg")
        } else if (index < 100){
            returnArray.push("image_0" + index + ".jpg")
        } else {
            returnArray.push("image_" + index + ".jpg")
        }
    }
    return (returnArray)
         
};
const imageNames = createImageNames()
console.log(imageNames);

  //!----- Loops Aufgabe 8 --------!



 
 