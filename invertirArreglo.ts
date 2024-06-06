import * as readlineSync from "readline-sync";

// se declara la variable cantidad y se solicita el ingreso por teclado al usuario
let cantidad : number = readlineSync.questionInt(`Ingrese la cantidad de números:`);
//se crea el array segun la cantidad que agregado el usuario por teclado
let v : number[] = new Array (cantidad);
//se crea una variable indice en cero 
let indice : number;
//se recorre el array
for (indice = 0; indice<cantidad; indice++) {
v[indice] = readlineSync.questionInt(`Ingrese v[ ${indice} ]: `);
}
let cadena : string ="";
for (indice = cantidad-1; indice>=0; indice--) {
cadena = cadena + v[indice] + " ";
}
console.log(cadena);