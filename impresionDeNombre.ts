import * as readlineSync from "readline-sync";
function ImprimirNombre(nombre:string, apellido:string):string{
    let nombreYApellido:string = nombre +" "+ apellido;
    return nombreYApellido;

    
}
console.log(ImprimirNombre("Fernando" ,"Polanco"))