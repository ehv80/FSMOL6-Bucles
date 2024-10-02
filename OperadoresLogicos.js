// Operador de Conjunción AND

//Declaración de la Función mayorYMenor
function mayorYMenor(num) {
    if (num > 5 && num < 10) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// Invocación a la Función mayorYMenor
mayorYMenor(2);
mayorYMenor(7);

//Declaración de la Función mayorYMenorYPar
function mayorYMenorYPar(num) {
    if (num > 5 && num < 10 && num % 2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// Invocación a la Función mayorYMenorYPar
mayorYMenorYPar(7);
mayorYMenorYPar(8);

//Operador de Disyunción OR

//Declaración de la Función operadorOR
function operadorOR(str) {
    if (str === 'Henry' || str.length < 2) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

//Invocación a la función operadorOR
operadorOR('Henry');
operadorOR('JavaScript');
operadorOR('H');

// Operador de Negación NOT

//Declaración de la Función negacion
function negacion(permiso) {
    if (permiso !== true) {
        console.log('Tiene permiso');
    }
}

//Invocación a la Función negacion
negacion(true);
negacion(false);

//Declaración de la Función condicionCompleja
function condicionCompleja(num) {
    if (num > 9 && num % 2 === 0 || num === 3) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

//Invocación a la Función condicionCompleja
condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);
