import * as readlineSync from "readline-sync";
let posicionDeLlegada: number = readlineSync.questionInt("Ingrese la posicion de llegada a la meta del competidor:  ");
switch(posicionDeLlegada){
    case 1:
        console.log("Entrgar la medalla de Oro");
        break;
    case 2:
        console.log("Entrega la medalla de Plata");
        break;
    case 3:
        console.log("Entregar la medalla de Bronce");
        break;
        default:
            console.log("Entregar mencion de participacion");

}