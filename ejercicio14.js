const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];

function repeatCounter(list) {
    // Completar
    let countWords=[];
    let word;

    for (let i = 0; i < list.length; i++) {
        word = list[i];
        if (countWords[word]){
            countWords[word] += 1;
        } else {
            countWords[word] = 1;
        }
    }
    return countWords;
}

 console.log (repeatCounter(words));