// Valores únicos: Crea una función que reciba por parámetro un array 
// y compruebe si existen elementos duplicados, 
// en caso que existan los elimina para retornar un array sin los elementos duplicados.
// Pista: puedes generar un nuevo array y devolverlo.
// Puedes usar este array para probar tu función:

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  const uniques = [];
 
 function removeDuplicates(list) {
    // Completar
    for (let i = 0; i < duplicates.length; i++){
      const duplicate = duplicates[i];
      if(uniques.indexOf(duplicate) < 0){
         uniques.push(duplicate);
      }
    }

    return uniques;
 }

 console.log(removeDuplicates(duplicates));