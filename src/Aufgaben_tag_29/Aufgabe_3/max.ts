function showMaximum (numbers: number[], callback: (max: number) => number){
    const max = Math.max(...numbers);
    console.log(max);

    const result = callback(max);
    console.log(result);

    console.log("Finished with showMaximun");
}

function powerOfTen(number: number): number {
    return Math.pow(number, 10);
}

const numbersArray = [1, 2, 3, 4, 5];
showMaximum(numbersArray, powerOfTen);