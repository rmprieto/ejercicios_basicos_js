const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  // Completar
  let suma = 0;
  let totElements = numberList.length;

  for (let i = 0; i < totElements; i++ ) {
    suma += numberList[i];
  }
  
  let promedio = suma / totElements;
  return promedio;
  
}

console.log (average(numbers))