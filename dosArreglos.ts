import * as readlineSync from "readline-sync";
//se crean los arreglos una para number y otro para string
let arregloNombres : string[] = new Array (2);
let arregloNumeros : number[] = new Array (3);
// se crea la variable vacia indice para recorrer el arreglo con for, agregando el ingreso por teclado del string
let indice : number;
for (indice = 0; indice < 2; indice++) {
arregloNombres[indice] = readlineSync.question(`Ingrese el nombre de la posicion ${indice}: `);
}
//Se recorre el arreglo, agregando el ingreso por teclado del usuario number
for (indice = 0; indice < 3; indice++) {
arregloNumeros[indice] = readlineSync.questionInt(`Ingrese el numero de la posicion ${indice}: `);
}
//se muestra por consola los datos ingresados por teclado del usuario string
for (indice = 0; indice < 2; indice++) {
console.log(`El nombre en la posicion ${indice} es: ${arregloNombres[indice]}`);
}
//se muestra por consola los datos ingresados por teclado del usuario number
for (indice = 0; indice < 3; indice++) {
console.log(`El numero en la posicion ${indice} es: ${arregloNumeros[indice]}`);
}

