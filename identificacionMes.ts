import * as readlineSync from "readline-sync";

/*
let nroMes : number = readlineSync.questionInt("Indique el numero de mes que le interesa: ");

switch (nroMes) {
    case 1: console.log("El mes es Enero"); break;
    case 2: console.log("El mes es Febrero"); break;
    case 3: console.log("El mes es Marzo"); break;
    case 4: console.log("El mes es Abril"); break;
    case 5: console.log("El mes es Mayo"); break;
    case 6: console.log("El mes es Junio"); break;
    case 7: console.log("El mes es Julio"); break;
    case 8: console.log("El mes es Agosto"); break;
    case 9: console.log("El mes es Septiembre"); break;
    case 10: console.log("El mes es octubre"); break;
    case 11: console.log("El mes es Noviembre"); break;
    case 12: console.log("El mes es Diciembre"); break;
        
    default: console.log("ud no ha escrito un numero de mes valido");
}
*/

let numeroDelMes:string[]= new Array(12);
numeroDelMes[0]="Enero";
numeroDelMes[1]="Febrero";
numeroDelMes[2]="Marzo";
numeroDelMes[3]="Abril";
numeroDelMes[4]="Mayo";
numeroDelMes[5]="Junio";
numeroDelMes[6]="Julio";
numeroDelMes[7]="Agosto";
numeroDelMes[8]="Septiembre"
numeroDelMes[9]="Octubre";
numeroDelMes[10]="Noviembre";
numeroDelMes[11]="Diciembre";

let numeroDeMes:number= readlineSync.questionInt("Indicar que numero de mes elige:  ");

let indice:number= numeroDeMes -1;
console.log("El mes es ", numeroDelMes[indice]);

