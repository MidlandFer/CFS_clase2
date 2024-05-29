"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var num1 = readlineSync.questionInt("Ingresar el numero:  ");
function divisores(num1) {
    var cantidadDiv = 0;
    for (var cont = 1; cont <= num1; cont++) {
        if (num1 % cont === 0) {
            cantidadDiv++;
        }
    }
    return cantidadDiv;
}
console.log("La cantidad de dividores es de:  ");
