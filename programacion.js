//VARIABLES
var nombre = "miguel";
console.log(nombre);
//Ignora los bloques de codigo y convierte en nuestra variable en global, o sea que si otra variable con el mismo nombre en nuestro codigo seguramenta estará pisando su valor 
let edad = 24;
console.log(edad);
//Respeta los bloques de codigo, o sea que la variable let no podra ser accedida fuera del if. Se pueden tener varias variables con el mismo nombre en diferentes bloques de codigo
const email = "miguelarevalo19@gmail.com"
console.log(email);
//Al contrario de let despues de asignado el valor, este no puede ser modificado.

//FUNCIONES

//expresada
let sumar = function (numeroA, numeroB) {
    return numeroA + numeroB;
}
console.log(sumar (7, 9));

let carrera = function (opcionA, opcionB) {
    return opcionA + " " + opcionB; 
}
console.log(carrera("psicologia", "desarrollo web"));

//declarada
function mascotas (perro, gato) {
    return perro + " " + gato;
}
console.log(mascotas ("bruce", "simon"));
function resta (numeroC, numeroD) {
    return numeroC - numeroD;
}
console.log(resta (15, 8));

//Scope local cuando las variables declaradas existen unicamente dentro de una funcion
function holaMundo () {
    let saludo = "Estoy aprendiendo js"
    return saludo;
}
console.log(holaMundo());

//Scope global cuando las variables se declaran fuera de cualquier funcion. Tiene alcance en cualquier lugar del codigo icnluso dentro de las funciones

let elMejorLenguaje = "Js es muy complicado, pero me gusta"
function estoyAprendiendo () {
    return elMejorLenguaje;
}
console.log(estoyAprendiendo());


//Objetos Literales
let miComputadora = {
    marca: "Imac",
    modelo: 2021,
    estaEncendida: true
};
console.log(miComputadora);

//arrays
let paises = ["Colombia", "mexico", "Argentina"];
console.log(paises);