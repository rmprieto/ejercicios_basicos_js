const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
  // Completar
  let suma = 0;
  let totElements = list.length;

  for (let i = 0; i < totElements; i++) {

    element = list[i];

    if (typeof element === 'number'){
        suma += element;        
    } else if (typeof element === 'string'){
        suma += element.length;
    }
  }
  
  return suma / totElements;

}

console.log(averageWord(mixedElements));