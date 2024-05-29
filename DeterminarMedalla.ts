import * as readlineSync from "readline-sync";
//declaro la varible y solicito al usuario que ingrese el numero de llegada
let posicionDeLlegada: number = readlineSync.questionInt("Ingrese la posicion de llegada a la meta del competidor:  ");

//detallo caso por caso el tipo de medalla segun orden de llegada
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