import * as fs from 'node:fs';
 const costo:number[]=[3000, 3400, 3500, 3300];
 const cigarros:string[]=["Marlboro" , "Parliament" , "Camel" , "Cheserfield"];

 //let costo:string=costo.toString();
let costoCigarros:string="";
let productoCigarros:string="";

for(let i:number=0;i< costoCigarros.length; i++){
    costoCigarros+= `${costoCigarros[i]}  `;
    productoCigarros+= `${productoCigarros[i]}  `;

    }
    fs.writeFileSync('./costo.txt', costoCigarros);
    fs.writeFileSync('./cigarros,.txt' , productoCigarros);
    console.log("costo");
    console.log("producto");

 const infoPrecios:string =fs.readfileSync('./costo.txt' , 'utf8 ');
 const infoProductos:string =fs.readfileSync('./cirgarros.txt ' , 'utf8 ');
 const info1:string =infoPrecios.trim();
 const info2:string=infoPrecios.trim();

 let array1:string[]=info1.split(" ");
 let array2:string[]=info2.split(" ");
 console.log(array1);
 console.group(array2);

 )