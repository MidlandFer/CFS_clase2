"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var cantidad = readlineSync.questionInt("Ingrese la cantidad de n\u00FAmeros:");
var arregloInv = new Array(cantidad);
var indice;
for (indice = 0; indice < cantidad; indice++) {
    arregloInv[indice] = readlineSync.questionInt("Ingrese el[ ".concat(indice, " ]: "));
}
var cadena = "";
for (indice = cantidad - 1; indice >= 0; indice--) {
    cadena = cadena + arregloInv[indice] + " ";
}
console.log(cadena);
