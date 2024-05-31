import * as rls from 'readline-sync';

//se le solicita el ingreso de la longitud del array
let dimensionArreglo : number = rls.questionInt(`Ingrese la dimension del arreglo: `);
// se crea el arreglo segun la longitud ingresada por teclado
let arreglo : number[] = new Array (dimensionArreglo);
//se crea una variable indice vacia
let indice : number;
//se crea una variable asignandole cero
let resultado : number = 0;
//se recorre la longitud del array asignando por teclado a indice, se pregunta al usuario
for (indice = 0; indice < dimensionArreglo; indice++) {
arreglo[indice] = rls.questionInt(`Indique el nro que va en la posicion ${indice}: `);
resultado += arreglo[indice];
}
for (indice = 0; indice < dimensionArreglo; indice++) {
console.log(`El numero en la posicion ${indice} es: ${arreglo[indice]}`);
}
console.log(`La suma del arreglo es: ${resultado}`);