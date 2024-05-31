"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
//se crean 3 array v1 y v2
var v1 = new Array(6);
var v2 = new Array(6);
//se crea un tercer array para contener el resultado de la suma
var vSuma = new Array(6);
//se crea un indice
var indice;
//Cargo el vector v1
for (indice = 0; indice < 6; indice++) {
    v1[indice] = readlineSync.questionInt("Ingrese el valor de v1[ ".concat(indice, " ]"));
}
//Cargo el vector v2
for (indice = 0; indice < 6; indice++) {
    v2[indice] = readlineSync.questionInt("Ingrese el valor de v2[ ".concat(indice, " ]"));
}
//Sumo los valores y muestro
for (indice = 0; indice < 6; indice++) {
    vSuma[indice] = v1[indice] + v2[indice];
    console.log("vSuma[ ".concat(indice, " ]= ").concat(vSuma[indice]));
}
