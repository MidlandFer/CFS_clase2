import * as readlineSync from "readline-sync";

let precioProducto : number = readlineSync.questionInt("ingrese el precio del producto:  ");
const porcentajeDescuento : number = 0.1;
let descuento : number = precioProducto*porcentajeDescuento;
let precioFinal : number = precioProducto-descuento;
console.log("El precio final es de: " + precioFinal);