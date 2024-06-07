

function calcularFactorialSec(n:number):number{
    let resultado:number=1;
    let iterador:number=1
    for (iterador=2;iterador<=n;iterador++){
        resultado=resultado*iterador;
            }
            return resultado;
}
console.log(calcularFactorialSec(3));
