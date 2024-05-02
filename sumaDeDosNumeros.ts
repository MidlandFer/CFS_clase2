import * as readlineSync from "readline-sync";

let primerNumero:number=readlineSync.questionInt("Ingrese el primer numero: ");
console.log("El primer numero: ", primerNumero);

let segundoNumero:number=readlineSync.questionInt("Ingrese el segundo numero: ");
console.log("El segundo numero: ", segundoNumero);

let resultado:number=primerNumero + segundoNumero;
console.log("El resultado de la suma es ", resultado);