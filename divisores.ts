import * as readlineSync from "readline-sync";
//Decalaro la variable para solicitar que se ingrese el número
let num1: number = readlineSync.questionInt("Ingresar el numero: ");
//Función que calcula los divisores
function divisores(num1: number): number {
    let cantidadDiv = 0;
    for (let cont = 1; cont <= num1; cont++) {
        if (num1 % cont == 0) {
            cantidadDiv++;
        }
    }
    return cantidadDiv;
}
//Imprimo la cantidad de divisores
console.log("La cantidad de divisores es: " + divisores(num1));
