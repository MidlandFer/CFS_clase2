"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero1 = readlineSync.questionInt("Ingrese el primer numero:  ");
var numero2 = readlineSync.questionInt("Ingrese el segundo numero:  ");
var opcionMenu = readlineSync.questionInt("Ingrese el numero 1 para sumar, 2 para restar, o presine cualquier tecla para salir ");
var resultadoFuncion = 0;
var resultado = calcularResultado(numero1, numero2, opcionMenu);
dibujarGuiones(50);
console.log("El resultado es:  ", resultado);
dibujarGuiones(50);
function dibujarGuiones(cantidadGuiones) {
    var i;
    var linea = "";
    for (i = 0; i <= cantidadGuiones; i++) {
        linea = linea + "-";
    }
    console.log(linea);
}
function calcularResultado(numero1, numero2, opcionMenu) {
    var resultado = 0;
    if (opcionMenu == 1) {
        resultado = numero1 + numero2;
    }
    else if (opcionMenu == 2) {
        resultado = numero1 - numero2;
    }
    return resultado;
}
resultadoFuncion = calcularResultado(numero1, numero2, opcionMenu);
