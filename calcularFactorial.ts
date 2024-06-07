

function calcularFactorialRec(n:number):number{
    let resultado:number=1;
    let indice:number=1
    for (indice=2;indice<=n;indice++){
        resultado=resultado*indice;
            }
            return resultado;
}