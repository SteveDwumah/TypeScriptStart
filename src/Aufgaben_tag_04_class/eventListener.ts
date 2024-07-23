



let counter: number = 0
const counterElement = document.getElementById("counter")
const buttonElement = document.getElementById("button-count")!

console.log(counterElement);
console.log(buttonElement);



function handleCountButtonClicked(event: MouseEvent){


    event.preventDefault()
    counter++
    console.log(counter);
    if(counterElement){
        counterElement.textContent = counter.toString()
    }
}

buttonElement.addEventListener("click",handleCountButtonClicked)

//!----------------------------------------------------------


//! Alternative 2 Nullish Coales

let counter2: number = 0

const counterElement2 = document.getElementById("counter") ?? new HTMLElement()

const buttonElement2 = document.getElementById("button-count")


function handleCountButtonClicked2(event: MouseEvent){
    event.preventDefault()
    counter++
    console.log(counter);
    counterElement2.textContent = counter.toString()

}

buttonElement2?.addEventListener("click",handleCountButtonClicked2)

