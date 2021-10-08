//Funciones
​
​
//solicitarDatos();
​
 //Pedir los datos al usuario.
​
/*function solicitarDatos (){
    let num1 = Number (prompt("Ingrese un numero"));
    let num2 = Number (prompt("Ingrese un segundo numero"));
    let operador = prompt("Por favor, ingrese la operacion a realizar.");
​
    calcular(num1, num2, operador);
   
}*/
​
​
 //Realizar el calculo
​
/*function calcular (a, b, c){
​
    let res;
​
    switch (c) {
        case "+": res= a+b;
        break;
        case "-": res= a-b;
        break;
        case "*": res= a*b;
        break;
        case "/": res= a/b;
        break;
        default : res= "La operacion ingresada no es correcta.";
        break;
        
​
    }
    resultado(res);
  
}*/
​
//Mostrar el resultado
​
​
/*function resultado (a) {
​
    console.log(a)
    alert(a);
​
}*/
​
​
​
​
//Funciones LAMBDA, ARROW FUNCTION, FUNCIONES FLECHA. (Funciones anonimas.)
​
​
​
/*const resultado = (a, b, c) => {
let res;
​
    switch (c) {
        case "+": res= a+b;
        break;
        case "-": res= a-b;
        break;
        case "*": res= a*b;
        break;
        case "/": res= a/b;
        break;
        default : res= "La operacion ingresada no es correcta.";
        break;
        
​
    }
  
return res;
​
}
​
console.log(resultado(5, 3, "*"));*/

/////////////////////////////

//
//
//
//
//
//
/*
let dato = prompt("Ingrese el dato a mostrar")
let resultado = dato + "Este dato viene por prompt"
console.log(resultado)

let dato1 = prompt("Ingrese el dato a mostrar")
let resultado1 = dato1 + "Este dato viene por prompt"
console.log(resultado1)

let dato2 = prompt("Ingrese el dato a mostrar")
let resultado2 = dato2 + "Este dato viene por prompt"
console.log(resultado2)


function nombre (parametros) {
    sentecia
}   


function imprimirPorConsola() {
    let dato = prompt("Ingrese el dato a mostrar")
    let resultado = dato + " ---- Este dato viene por prompt"
    console.log(resultado)
}

imprimirPorConsola()
imprimirPorConsola()
imprimirPorConsola()


let glob = "Esta variable es global"

//            PARAMETRO
function suma(num1, num2) {

    let local = "Esta variable es local"
    console.log(num1 + num2)
    console.log(glob)
    console.log(local)
}
console.log(local)
console.log(glob)

//   ARGUMENTO
suma(50, 100)

*/
/*
function entrarAlEdificio() {
    let pregunta = prompt("Como te llamas?")
    console.log(validar(pregunta))
}

function validar(nombre) {

    let datoTrabajado = nombre.toLowerCase()

    if (datoTrabajado == "juan") {
        return "podes entrar"
    } else {
        return "no podes entrar"
    }

}


entrarAlEdificio()

*/


/*
//RETURN
function tomarDatos() {
    let nombre = prompt("n")
    let apellido = prompt("a")
    let edad = Number(prompt("e"))

    console.log(mostrarNombreCompleto(nombre, apellido, edad))
}

function mostrarNombreCompleto(nombre, apellido, edad) {
    let respuesta = `Tu nombre es ${nombre} ${apellido} y tenes ${edad}`;
    return respuesta;
}


tomarDatos()
*/


//Funcion declarada 
//funcion nombre (parametro) { sentencia } 

//Funcion expresada  => una variable a la que se le asigna una funcion anonima
/*
let unaMultiplicacion = function() {

}

unaMultiplicacion()
*/
/*
let unaResta = (numero) => {
  return  numero - 10;
}

console.log(unaResta(100))
*/
/*saludo()

var saludo = () => {
    console.log("hola mundo");
}*/

////////////////////////////////////////
/////

//Afterclass funciones y simuladores

//Repaso de funciones///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Repaso del desafio

//let parametros = "Ejemplo";

// 1 funcion declarada          
//function NombreDeLaFuncion (parametros) {
    //sentencia
//    return //Retorno de la funcion
    //sentencia no se ejecuta
//}

//2 funcion expresada  -> anonima
//const NombreDeLaFuncion2 = function(parametros){
    //sentencia
//    return //Retorno de la funcion
//}

//3 
//FuncionFlecha = (parametros) => {
    //sentencia
//    return //Retorno de la funcion
//}

//FuncionFlecha1 = parametros => parametros + " "; //forma reducida



//¿Por que uso funciones?

//DRY - Don't Repeat Yourself
//KIS - Keep It Simple
//YAGNI - You Aren't Gonna Need It


//Ejemplo de simulador


//Simulador de pago

/* const articuloParaComprar = function(articulo, interes, cuotas, interesCuotas) {
    console.log(articulo);
    let articuloInteres = articulo + (articulo * interes / 100);
    console.log("El articulo con interese del %" + interes + "sale $" + articuloInteres);
    let articuloEnCuotas = (articuloInteres + (articuloInteres * interesCuotas / 100)) / cuotas;
    console.log(cuotas + " cuotas de $" + articuloEnCuotas + " con un interes por cuota de %" +interesCuotas);
} */


//Login de usuarios

//variables

/* let nombre = prompt("ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");
let email = prompt("ingresa tu email");
let pass = prompt("ingresa tu contraseña");


//funciones

function Registro (nombre, apellido, email, pass) {
    validarDatos (nombre, apellido, email, pass);
}

function validarDatos (nombre, apellido, email, pass) {

if(nombre && apellido && email && pass) {
    console.log(nombre + apellido + email + pass);
}else {
    Error1();
}
}

function Login(email, pass, apellido, nombre) {
    verificar(email, pass, apellido, nombre);
}

function verificar (email, pass, apellido, nombre) {
    let emailVerificado = prompt("ingresa tu email");
    let passVerificado = prompt("ingresa tu contraseña");

    if(email == emailVerificado && pass == passVerificado) {
        console.log("Bienvenido "+ nombre + " " + apellido);
    } else {
        Error1();
    }
}

function Error1() {
    console.log("algo salio mal");
};

//logica
 if(nombre && apellido && email && pass) {
    Registro (nombre, apellido, email, pass);
    alert("Ya te registraste");
    Login(email, pass, apellido, nombre);
    alert("Ya te logeaste");
 } else {
     Error1();
 }
 */

/*  let i = 0;

do{
    console.log(i);
    i++;
}while(i <= 10); */

/* let animal = "julian"

switch(animal){
    case "gato":
        console.log("El animal es un gato");
        break;
    case "perro":
        console.log("El animal es un perro");
        break;
    case "pajaro":
        console.log("El animal es un pajaro");
        break;
    default :
        console.log("No conozco ese animal");
} */