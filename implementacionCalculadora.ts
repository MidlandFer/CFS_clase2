import * as readlineSync from "readline-sync";

let numero1:number = readlineSync.questionInt("Ingrese el primer numero:  ");
let numero2:number = readlineSync.questionInt("Ingrese el segundo numero:  ");
let opcionMenu:number = readlineSync.questionInt("Ingrese el numero 1 para sumar, 2 para restar, o presine cualquier tecla para salir ");
let resultadoFuncion=0;

let resultado:number = calcularResultado(numero1, numero2, opcionMenu);
dibujarGuiones (50);
console.log("El resultado es:  ", resultado);
dibujarGuiones(50);

function dibujarGuiones (cantidadGuiones:number){
    let i:number;
    let linea:string = "";
    for(i=0; i<= cantidadGuiones; i++){
        linea=linea + "-";
    }
    console.log(linea)
}

function calcularResultado (numero1:number, numero2:number, opcionMenu:number):number{
    let resultado:number=0;
    if(opcionMenu==1){
        resultado=numero1+numero2;
        }
        else if (opcionMenu==2){
            resultado=numero1-numero2;
        }
        return resultado;
}

resultadoFuncion=calcularResultado(numero1,numero2,opcionMenu);