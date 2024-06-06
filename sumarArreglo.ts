import * as readlineSync from "readline-sync";

//se crean los arrays 1 y 2
let array1 : number[] = new Array(6);
let array2 : number[] = new Array(6);
//se crea un tercer array para contener el resultado de la suma
let sumaarrays : number[] = new Array(6);
//se crea un indice
let indice : number;
//Cargo el array 1
for (indice = 0; indice < 6; indice++) {
array1[indice]=readlineSync.questionInt(`Ingrese el valor de array1[ ${indice} ]`);
}
//Cargo el array 2
for (indice = 0; indice < 6; indice++) {
array2[indice]=readlineSync.questionInt(`Ingrese el valor de array2[ ${indice} ]`);
}
//Sumo los valores y muestro
for (indice = 0; indice < 6; indice++) {
sumaarrays[indice] = array1[indice] + array2[indice];
console.log (`Suma[ ${indice} ]= ${sumaarrays[indice]}`);
}