"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
//el usuario determina por teclado la longitud del arreglo
var dimensionArreglo = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
//se crea el arreglo con la dimension ingresada por el usuario
var arreglo = new Array(dimensionArreglo);
// se crean las variables indice y resultado
var indice;
var resultado = 0;
//se recorre con for el indice del arreglo y lo va guardando en la variable resultado
for (indice = 0; indice < dimensionArreglo; indice++) {
    arreglo[indice] = readlineSync.questionInt("Indique el nro que va en la posicion ".concat(indice, ": "));
    resultado += arreglo[indice];
}
//se recorre el array mostrando el numero de la posicion
for (indice = 0; indice < dimensionArreglo; indice++) {
    console.log("El numero en la posicion ".concat(indice, " es: ").concat(arreglo[indice]));
}
//se muestra la suma total mostrando elresultado
console.log("La suma del arreglo es: ".concat(resultado));
