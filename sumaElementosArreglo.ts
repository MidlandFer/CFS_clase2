import * as readlineSync from "readline-sync";

//el usuario determina por teclado la longitud del arreglo
let dimensionArreglo : number = readlineSync.questionInt(`Ingrese la dimension del arreglo: `);
//se crea el arreglo con la dimension ingresada por el usuario
let arreglo : number[] = new Array (dimensionArreglo);
// se crean las variables indice vacio y resultado en cero
let indice : number;
let resultado : number = 0;
//se recorre con for el indice del arreglo y lo va guardando en la variable resultado
for (indice = 0; indice < dimensionArreglo; indice++) {
arreglo[indice] = readlineSync.questionInt(`Indique el nro que va en la posicion ${indice}: `);
resultado += arreglo[indice];// se almacena el numero ingresado por el usuario
//se puede realizar de la siguiente forma: resultado=resultado+arreglo{indice};
}
//se recorre el array mostrando el numero de la posicion
for (indice = 0; indice < dimensionArreglo; indice++) {
console.log(`El numero en la posicion ${indice} es: ${arreglo[indice]}`);
}
//se muestra la suma total mostrando el resultado de los numeros ingresados
console.log(`La suma del arreglo es: ${resultado}`);