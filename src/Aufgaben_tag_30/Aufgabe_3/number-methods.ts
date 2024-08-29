
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