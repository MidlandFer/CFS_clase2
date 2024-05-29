import * as readlineSync from "readline-sync";

//declaro las variables de cada vuelta
let vuelta1: number = readlineSync.questionInt("ingrese el Tiempo de vuelta 1 :  ");
let vuelta2: number = readlineSync.questionInt("ingrese el Tiempo de vuelta 2 :  ");
let vuelta3: number = readlineSync.questionInt("ingrese el Tiempo de vuelta 3 :  ");
let vuelta4: number = readlineSync.questionInt("ingrese el Tiempo de vuelta 4 :  ");
//realizo los calculos del total de tiempo en todas las vueltas y logica para resolver
let totalVueltas: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
let tiempoPromedio: number = totalVueltas / 4;

//imprimo los resultados de total de vueltas y promedio de las 4 vueltas
console.log("El tiempo de las 4 vueltas es de: " + totalVueltas);
console.log("El promedio total de las 4 vueltas es de:  " + tiempoPromedio);