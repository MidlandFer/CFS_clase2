import * as fs from 'node:fs';

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];
let contenidoPrecios:string= " ";
let contenidoProductos:string= " ";

for(let i:number=0;i< precios.length; i++){
    contenidoPrecios+= `${precios[i]} `;
    contenidoProductos+= `${productos[i]} `;
}

fs.writeFileSync('./precios.txt', contenidoPrecios); 
fs.writeFileSync('./productos.txt', contenidoProductos); 
console.log("Precios");
console.log("Productos");

const datosPrecios:string=fs.readFileSync('./precios.txt' , 'utf8' );
const datosProductos:string=fs.readFileSync('./productos.txt' , 'utf8' );

const datosPrecios1:string= datosPrecios.trim();
const datosPrecios2:string= datosProductos.trim();

const nuevoArray: string[]= datosPrecios1.split(" ");
const nuevoArray1: string[]= datosPrecios2.split(" ");
console.log(nuevoArray);
console.log(nuevoArray1);



//' '' '' '' '' '' '' '' '' '' '
/*
import * as fs from 'node:fs';
 
const cigarros:string[]=["Marlboro" , "Parliament" , "Camel" , "Chesterfield"];
let precio:string= "  ";

for(let i:number=0;i< cigarros.length; i++){
    precio+= `${cigarros[i]}  `;
   
    }
    fs.writeFileSync('./cigarros.txt', precio);
    console.log("Terminado");
   
 const datos:string =fs.readFileSync('./cigarros.txt ' , 'utf8');
 const datos2:string =datos.trim();
 const array1:string[]=datos2.split(" ");
 console.log(array1);

*/

 /////
 /*
 import * as fs from "node:fs";
 const cigarros:string[]=["Marlboro" , "Parliament" , "Camel" , "Chesterfield"];
 let contenido:string= " ";
 //let cigarrosString:string= cigarros.toString();
for(let i:number=0;i< cigarros.length; i++){ 
   contenido+= `${cigarros[i]}  `;       }  
   // guardado de información txt   
 fs.writeFileSync('./cigarros.txt', contenido); 
   console.log("Terminado"); 
//Lee la información 
  const datos:string =fs.readFileSync('./cigarros.txt ' , 'utf8'); 
 console.log(datos);
   //el método trim lo que hace es sacar los espacios de una cadena de texto de adelante y atras 
 const datos2:string =datos.trim();
 //se crea un array y que se genere un elementocada vez que hay un espacio
 const nuevoArray:string[]=datos2.split(" "); console.log(nuevoArray);
*/