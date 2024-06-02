import * as readline from "readline-sync";


let cantidad : number;
cantidad = readline.questionInt("Ingrese la cantidad de números:");
let indice : number;
let v : number[] = new Array(cantidad);
for ( indice=0; indice < cantidad; indice++) {
v[indice]= readline.questionInt("Ingrese v[", indice, "]");
}
//Cuento los valores >0, <0 e =0
let numNeg : number = 0;
let numCero : number = 0;
let numPos : number = 0;

for (indice = 0 ; indice < cantidad; indice++) {
    if (v[indice] > 0) {
    numPos++;
    } else if (v[indice] < 0) {
    numNeg++;
    } else {
    numCero++;
    }
    }
    console.log(numPos, " positivos, ");
    console.log(numNeg, " negativos, ");
    console.log(numCero, " ceros");