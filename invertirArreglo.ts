import * as readlineSync from "readline-sync";
//se solicita el ingreso de la longitud del arrray
let cantidad : number = readlineSync.questionInt(`Ingrese la cantidad de numeros:`);
//se crea el arreglo segun lo ingresado por teclado
let arregloInv : number[] = new Array (cantidad);
//se crea la variable indice vacia
let indice : number;
//se recorre en array hasta la cantidad ingresada por teclado
for (indice = 0; indice<cantidad; indice++) {
arregloInv[indice] = readlineSync.questionInt(`Ingrese el[ ${indice} ]: `);
}
let cadena : string ="";
for (indice = cantidad-1; indice>=0; indice--) {
cadena = cadena + arregloInv[indice] + " ";
}
console.log(cadena);
