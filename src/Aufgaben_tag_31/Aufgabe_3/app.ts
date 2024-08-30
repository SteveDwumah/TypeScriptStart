
function processData(numbers: number[], sortCallback: (numbers: number[]) => number[], doubleCallback: (numbers: number[]) => number[]): Map<number, string> {

    const sortedNumbers = sortCallback(numbers);
  
    const doubledNumbers = doubleCallback(sortedNumbers);
  
    const result = new Map<number, string>();
    doubledNumbers.forEach(number => {
      result.set(number, number.toString(16));
    });
  
    return result;
  }

  function sortNumbers(numbers: number[]): number[] {
    return numbers.sort((a, b) => b - a);
  }
  
  function doubleNumbers(numbers: number[]): number[] {
    return numbers.map(number => number * 2);
  }
  
  const array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const array2 = [10, 20, 5, 15, 30];
  
  const result1 = processData(array1, sortNumbers, doubleNumbers);
  const result2 = processData(array2, sortNumbers, doubleNumbers);
  
  console.log(result1);
  console.log(result2);