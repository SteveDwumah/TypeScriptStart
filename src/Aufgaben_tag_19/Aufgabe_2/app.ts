//!---- Aufgabe 1 -----//

// const getNumberText = (num: number | undefined): string =>
//     ['One', 'Two', 'Three', 'Four', 'Five'][num ? num - 1 : 0 - 1] ?? 'Unknown';
  
//   const userInput: number = Math.ceil(Math.random() * 7);
//   console.log(userInput);
//   const numberText = getNumberText(userInput);
//   console.log(numberText);

//? --------- Clean Code ------------//

const numberOfText: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];

const getNumberText = (num: number | undefined): string => {
    if (num === undefined || num < 1 || num > numberOfText.length) {
      return 'Unknown';
    }
    return numberOfText[num - 1];
  };

const userInput: number = Math.ceil(Math.random() * 7);
console.log(userInput);

const numberText = getNumberText(userInput);
console.log(numberText);

