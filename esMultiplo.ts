import * as readlineSync from "readline-sync";

//declaro las varibles para que el usuario ingrese los 2 numeros
let num1:number= readlineSync.questionInt("Ingrese el primer numero:  ");
let num2:number= readlineSync.questionInt("Ingrese el segundo numero:  ");

//Verifico si es multiplo y se imprime por consola
if(esMultiplo(num1,num2)){
    console.log(num1 + " es multiplo de " + num2 );
} else{
    console.log(num1 + " NO es multiplo de " + num2);
}
//función para verificar si es multiplo
function esMultiplo(num1:number, num2:number){
if(num1 % num2 ===0){
    return true;
}else{
     return false;
}

}