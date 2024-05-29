import * as readlineSync from "readline-sync";

//declaro variables y la unica constante y solicito al asuario el ingreso por teclado
let precioProducto : number = readlineSync.questionInt("ingrese el precio del producto:  ");
const porcentajeDescuento : number = 0.1;

//realizo las operaciones logicas
let descuento : number = precioProducto*porcentajeDescuento;
let precioFinal : number = precioProducto-descuento;
console.log("El precio final es de: " + precioFinal);