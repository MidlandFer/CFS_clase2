import * as readlineSync from "readline-sync";
let num1:number= readlineSync.questionInt("Ingrese el primer numero:  ");
let num2:number= readlineSync.questionInt("Ingrese el segundo numero:  ");

if(esMultiplo(num1,num2)){
    console.log(num1 + " es multiplo de " + num2 );
} else{
    console.log(num1 + " NO es multiplo de " + num2);
}

function esMultiplo(num1:number, num2:number){
if(num1 % num2 ===0){
    return true;
}else{
     return false;
}

}