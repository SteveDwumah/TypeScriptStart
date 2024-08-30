
const randomNumbers = (): Promise <number[]> => {
    return new Promise((resolve, reject) => {
        const numbers = [
            Math.random() * 130,
            Math.random() * 130,
            Math.random() * 130
            ];
        if(numbers.some(number => number > 100)){
            reject ("some number is bigger than 100")
        } else {
            resolve(numbers)
        }
    })
}

randomNumbers().then((resp) => {
    console.log("Numbers:", resp);
    return resp.map(number => number + 7);
})
.then((resp) => {
    console.log("Numbers after adding 7");
})