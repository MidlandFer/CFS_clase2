
/*


function ambitoVariables() {
let mensaje:string;
mensaje = "Hola Mundo!!!!!";
console.log(mensaje);

}

ambitoVariables();

let mensaje:string = "Hola Global!!";
*/

let mensaje:string;
ambitoVariables();
function ambitoVariables() {
mensaje = 'Hola Mundo!!';
leeVariable();
}
function leeVariable() {
console.log(mensaje);
}
/*let mensaje:string;
ambitoVariables();
function ambitoVariables() {
leeVariable();
mensaje = 'Hola Mundo!!';
}
function leeVariable() {
console.log(mensaje);
}*/