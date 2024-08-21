function greaterNumber(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne
    } else if (numberTwo > numberOne) {
        return numberTwo
    }
}

 let mayor = greaterNumber(5, 7);
 console.log (mayor);