"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var vuelta1 = readlineSync.questionInt("ingrese el Tiempo de vuelta 1 :  ");
var vuelta2 = readlineSync.questionInt("ingrese el Tiempo de vuelta 2 :  ");
var vuelta3 = readlineSync.questionInt("ingrese el Tiempo de vuelta 3 :  ");
var vuelta4 = readlineSync.questionInt("ingrese el Tiempo de vuelta 4 :  ");
var totalVueltas = vuelta1 + vuelta2 + vuelta3 + vuelta4;
var tiempoPromedio = totalVueltas / 4;
console.log("El tiempo de las 4 vueltas es de: " + totalVueltas);
console.log("El promedio total de las 4 vueltas es de:  ");
