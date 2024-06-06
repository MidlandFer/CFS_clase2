//creo la variable para almacenar el texto
let cantidadLetras:string = "me falta practicar";
//declaro tres variables para contar las cantidades de letras a,e y o
let contLetraA:number=0, contLetraE:number=0, contLetraO:number=0;
//recorro la variable cantidadLetras para contar las a e y o
for (let i = 0; i < cantidadLetras.length; i++){
let letra = cantidadLetras[i]       
    if (letra=='a') {
        contLetraA++;
    }
     else if (letra=='e') {
        contLetraE++;
    }
     else if (letra=='o') {
        contLetraO++;
}
}
//creo el array de longitud 3 para almacenar las cantidades de letras
let arrayResultado:number[]=[contLetraA, contLetraE, contLetraO];
//muestro por consola las cantidades de letras a, e y o
console.log("Cantidades de letras 'a': "+ contLetraA);
console.log("Cantidad de letras 'e': "+ contLetraE);
console.log("Cantidad de letras 'o': "+ contLetraO);
console.log("Array con resultados: "+ arrayResultado);
