import * as readlineSync from "readline-sync";

let numeroIngresado:number=readlineSync.questionInt("Ingresar el numero para verificar: ");


if (numeroIngresado === 0) {
    console.log( "El número es 0 (cero)");
} 
else if (numeroIngresado % 2 === 0) {
    console.log( "El número es par");
}
else{
    console.log( "El número es impar");

}