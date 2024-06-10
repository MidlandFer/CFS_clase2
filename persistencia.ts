import fs from 'node:fs';

//let tercerContenido:string="tercerContenido";
//let otroContenido:string="otorContenido";
//let contenido:number=9
//let contenidoString:string= contenido.toString();


const nombres:string[]=["juan", "Analia" ,"Nicolas" , "Carla"];

let contenido:string="";

for(let i:number=0;i< nombres.length; i++){
    contenido += ' ${nombres[i]} '  //template string ---> nombre[i] + "";
}

fs.writeFileSync('./test.txt', contenido);
console.log("Finalizado");

const datos:string= fs.readFileSync('./test.txt','utf8');
const datos2:string=datos.trim();
const nuevoArray:string[]=datos2.split(" ");
console.log(nuevoArray);


//  ''