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
