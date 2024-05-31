import * as readlineSync from "readline-sync";

//se crean 3 array v1 y v2
let v1 : number[] = new Array(6);
let v2 : number[] = new Array(6);
//se crea un tercer array para contener el resultado de la suma
let vSuma : number[] = new Array(6);
//se crea un indice
let indice : number;
//Cargo el vector v1
for (indice = 0; indice < 6; indice++) {
v1[indice]=readlineSync.questionInt(`Ingrese el valor de v1[ ${indice} ]`);
}
//Cargo el vector v2
for (indice = 0; indice < 6; indice++) {
v2[indice]=readlineSync.questionInt(`Ingrese el valor de v2[ ${indice} ]`);
}
//Sumo los valores y muestro
for (indice = 0; indice < 6; indice++) {
vSuma[indice] = v1[indice] + v2[indice];
console.log (`vSuma[ ${indice} ]= ${vSuma[indice]}`);
}