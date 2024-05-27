"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var precioProducto = readlineSync.questionInt("ingrese el precio del producto:  ");
var porcentajeDescuento = 0.1;
var descuento = precioProducto * porcentajeDescuento;
var precioFinal = precioProducto - descuento;
console.log("El precio final es de: " + precioFinal);
