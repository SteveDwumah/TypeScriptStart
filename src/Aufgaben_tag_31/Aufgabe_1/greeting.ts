
function sayHello (name: string, callback: (message: string) => void){
    const helloText = `Hello ${name}!`
    callback(helloText)
}

function greetingCallback (message: string){
    console.log(message);
}

sayHello("Steve", greetingCallback)
sayHello("Cleo", greetingCallback)
sayHello("Emily", greetingCallback)
