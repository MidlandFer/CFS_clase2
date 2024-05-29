"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Función para calcular la potencia
function calcPotencia(base, exponente) {
    var resultado = 1;
    for (var cont = 0; cont < exponente; cont++) {
        resultado *= base;
    }
    return resultado;
}
// El usuario ingresa la base
var base = readlineSync.questionInt("Ingresa la base: ");
// El usuario ingresa el exponente 
var exponente;
do {
    exponente = readlineSync.questionInt("Ingresa el exponente (mayor o igual a 0): ");
} while (exponente < 0);
// Muestro el resultado de la operación
var potencia = calcPotencia(base, exponente);
console.log("El resultado de la potencia es:  " + potencia);
