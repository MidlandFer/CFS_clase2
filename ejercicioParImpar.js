"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numeroIngresado = readlineSync.questionInt("Ingresar el numero para verificar: ");
if (numeroIngresado % 2) {
    console.log("Numero Par: " + numeroIngresado);
}
else {
    console.log("Numero Impar: " + numeroIngresado);
}
