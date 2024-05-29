import * as readlineSync from 'readline-sync';

let num1: number = readlineSync.questionInt('Ingresar el numero: ');

function divisores(num1: number): number {
    let cantidadDiv = 0;
    for (let cont = 1; cont <= num1; cont++) {
        if (num1 % cont == 0) {
            cantidadDiv++;
        }
    }
    return cantidadDiv;
}

console.log('La cantidad de divisores es: ' + divisores(num1));
