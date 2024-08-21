const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  // Completar código
  let suma = 0;
  let totElements = numberList.length;
  
  for (let i = 0; i < totElements; i++ ) {
    let element = numberList[i];
    suma += element;
  }   
  return suma;
}

console.log (sumNumbers(numbers));