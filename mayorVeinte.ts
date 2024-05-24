import * as readlineSync from "readline-sync";

let numeroIngresado: number = readlineSync.questionInt("Ingrese el numero a verificar, si es mayor a 20:  ");
    if(numeroIngresado > 20){
        console.log("El numero ingresado es mayor a 20: " + numeroIngresado);
        }
        else{
            console.log("El numero ingresado es menor a o igual a 20 " + numeroIngresado);
        }

