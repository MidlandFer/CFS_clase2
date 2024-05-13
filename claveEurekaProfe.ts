import * as readlineSync from "readline-sync";
const clave:string="eureka";
let contador:number=3;
let claveIngresada:string=" ";

while((contador>=1 && contador<=3) && claveIngresada !=clave) {
    claveIngresada = readlineSync.question("Introduzca la clave. ");
    console.log()

}
