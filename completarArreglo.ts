import * as readlineSync from "readline-sync";

//se declara el arreglo de longitud 10
let arregloCompletar : number[] = new Array (10);
//se crea un indice numerico en cero 
let indice : number;
//se recorre el indice hasta 10 agragando los numeros al azar declarando un tope de 100
for (indice = 0; indice < 10; indice++) {
arregloCompletar[indice] = Azar(100);
}
//se recorre el indice mostrando la posicion
for (indice = 0; indice < 10; indice++) {
console.log (`El numero en la posicion ${indice} es:
${arregloCompletar[indice]}`);
}
//se crea la funcion azar pasando por parametros el tope
function Azar (tope : number) : number {
return Math.floor(Math.random()*tope);
};