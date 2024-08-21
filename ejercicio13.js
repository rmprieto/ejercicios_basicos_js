const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

function nameFinder(nameList, nameToFind) {
    // Completar
    if (nameList.indexOf(nameToFind) > 0){
        return "El valor facilitado SE ENCUENTRA en la lista.";
    } else {
        return "El valor facilitado NO EXISTE en la lista.";
    }
}

  console.log(nameFinder(names, 'Sue'));
  console.log(nameFinder(names, 'Steve'));