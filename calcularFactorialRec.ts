function calcularFactorialRec(n:number):number{
    let resultado:number=1;
    if (n==0){
        resultado=1;

    }else{
        resultado=n*calcularFactorialRec(n-1);
    }
    return resultado;
}
console.log(calcularFactorialRec(3));