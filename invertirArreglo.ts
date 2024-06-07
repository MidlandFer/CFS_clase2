import * as readlineSync from "readline-sync";
<<<<<<< HEAD

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
=======
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
>>>>>>> 36641d48bff186d2d93f1738488e7810d2753c10
