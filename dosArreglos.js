"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var arregloNombres = new Array(2);
var arregloNumeros = new Array(3);
var indice;
for (indice = 0; indice < 2; indice++) {
    arregloNombres[indice] = readlineSync.question("Ingrese el nombre de la posicion ".concat(indice, ": "));
}
for (indice = 0; indice < 3; indice++) {
    arregloNumeros[indice] = readlineSync.questionInt("Ingrese el numero de la posicion ".concat(indice, ": "));
}
for (indice = 0; indice < 2; indice++) {
    console.log("El nombre en la posicion ".concat(indice, " es: ").concat(arregloNombres[indice]));
}
for (indice = 0; indice < 3; indice++) {
    console.log("El numero en la posicion ".concat(indice, " es: ").concat(arregloNumeros[indice]));
}
