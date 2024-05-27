import * as readlineSync from "readline-sync";

let vuelta1: number = readlineSync.questionInt("ingrese el Tiempo de vuelta 1 :  ");
let vuelta2: number = readlineSync.questionInt("ingrese el Tiempo de vuelta 2 :  ");
let vuelta3: number = readlineSync.questionInt("ingrese el Tiempo de vuelta 3 :  ");
let vuelta4: number = readlineSync.questionInt("ingrese el Tiempo de vuelta 4 :  ");
let totalVueltas: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
let tiempoPromedio: number = totalVueltas / 4;
console.log("El tiempo de las 4 vueltas es de: " + totalVueltas);
console.log("El promedio total de las 4 vueltas es de:  " + tiempoPromedio);