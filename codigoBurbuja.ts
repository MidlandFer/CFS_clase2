/*

function cargar(arreglo:number[], cantidad:number, numAzar:number):number
let i : number;
for (i = 0 ; i<cantidad; i++ ) {
arreglo[i] = Azar(numAzar);
}
} 

//
function escribirEnUnaLinea(arreglo:number[], cantidad:number) {
    let i:number;
    let vector:string =
    "" ;
    for (i = 0 ; i<cantidad; i++) {
    vector += `${arreglo[i]} `;
    }
    console.log (vector);
    }

//    
function intercambiar(arreglo:number[], i:number, j:number) {
        let aux:number;
        aux = arreglo[i] ;
        arreglo[i] = arreglo[j] ;
        arreglo[j] = aux ;
        }


//
function comparar(arreglo : number[], i : number, j :
    number) : number {
    let comparacion : number;
    if (arreglo[i] === arreglo[j]) {
    comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
    comparacion = -1;
    } else {
    comparacion = 1;
    }
    return

//
function burbuja(arreglo : number[], cantidad : number)
let i : number, j : number;
for (i = 2 ; i < cantidad; i++) {
for (j = 0 ; j < (cantidad - 1); j++) {
if (comparar(arreglo, j, j+1) == 1 ) {
intercambiar(arreglo, j, j+1) ;

 let arregloBur=[1,7,4,8,5,9,3];
 console.log(burbuja(arregloBur,7));

 function burbuja(arreglo: number[], cantidad: number): number[] {
    let i: number, j: number;
    for (i = 0; i < cantidad - 1; i++) {
        for (j = 0; j < cantidad - i - 1; j++) {
            if (comparar(arreglo, j, j + 1) === 1) {
                intercambiar(arreglo, j, j + 1);
            }
        }
    }
    return arreglo;
}
*/

 /*function burbuja(arreglo:number[],cantidad:number):number[]{
    let i:number,j:number;
        for(i=2;i<cantidad;i++){
            if(comparar(arreglo,j,j+1)==1){
                intercambiar(arreglo,j,j+1);
            }
        }
    }
 return arreglo;
*/
function comparar(arreglo:number[],i:number,j:number):number{
    
    if (arreglo[i]===arreglo[j]) {
        return 0;
    } else if (arreglo[i] < arreglo[j]) {
        return -1;
    } else {
        return 1;
    }
}

/*
    let comparacion:number;
    if(arreglo[i]===arreglo[j]){
        comparacion=0;
        {
        else if(arreglo[i]<arreglo[j]){
            comparacion=-1;
            else{
                comparacion=1;
            }
        } 
        return comparacion;

function intercambiarBur(arreglo:number[],i:number,j:number){
    let aux:number;
    aux = arreglo[i];
    arreglo[i]=arreglo[j];
    arreglo[j]=aux;
}

        }
    }
}
/*
let arregloBur = [1, 7, 4, 8, 5, 9, 3];
console.log(burbuja(arregloBur, 7));

function burbuja(arreglo: number[], cantidad: number): number[] {
    let i: number, j: number;
    for (i = 0; i < cantidad - 1; i++) {
        for (j = 0; j < cantidad - i - 1; j++) {
            if (comparar(arreglo, j, j + 1) === 1) {
                intercambiar(arreglo, j, j + 1);
            }
        }
    }
    return arreglo;
}

function comparar(arreglo: number[], i: number, j: number): number {
    if (arreglo[i] === arreglo[j]) {
        return 0;
    } else if (arreglo[i] < arreglo[j]) {
        return -1;
    } else {
        return 1;
    }
}

function intercambiar(arreglo: number[], i: number, j: number) {
    let aux: number;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
*/
