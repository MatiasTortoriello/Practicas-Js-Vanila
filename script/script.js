/*DESAFÍO 1 - CONCEPTOS GENERALES: SINTAXIS Y VARIABLES

let nombre = prompt("Ingresá tu nombre");
let apellido = prompt("Ingresá tu apellido");
let edad = parseInt(prompt("Ingresá tu edad"));
let lugar = prompt("¿De dónde sos?");

mensaje = `Tu nombre es ${nombre} ${apellido}, tenés ${edad} años y sos de ${lugar}. ¿Viste cómo adiviné?`;
alert(mensaje); */

/* let numero = prompt("Ingrese un número");

if (numero % 2 == 0) {
    alert("El número que ingresaste es par")
}   else {
    alert("El número es impar");
} */


/* DESAFÍO 2 - CONTROL DE FLUJOS*/

let marcaDeAuto = prompt("Ingrese una marca de fabricante de automóviles: ");

marcaDeAuto = marcaDeAuto.toLowerCase();

if (marcaDeAuto == "fiat" || marcaDeAuto == "alfa romeo" || marcaDeAuto == "ferrari" || marcaDeAuto == "lamborghini" || marcaDeAuto == "maserati") {

    alert("Este auto es de fabricación italiana");

} else if (marcaDeAuto == "renault" || marcaDeAuto == "peugeot" || marcaDeAuto == "citroen" || marcaDeAuto == "citröen") {

    alert("Este auto es de fabricación francesa");

} else if (marcaDeAuto == "volkswagen" || marcaDeAuto == "mercedes benz" || marcaDeAuto == "audi" || marcaDeAuto == "bmw") {

    alert("Este auto es de fabricación alemana");
    
} else if (marcaDeAuto === "aston martin" || marcaDeAuto === "rover" || marcaDeAuto === "mclaren" || marcaDeAuto === "rolls royce") {

    alert("Este auto es de fabricación británica");

} else if (marcaDeAuto === "ford" || marcaDeAuto === "dodge" || marcaDeAuto === "chevrolet" || marcaDeAuto === "cadillac" || marcaDeAuto === "jeep") {

    alert("Este auto es de fabricación norteamericana");

} else if (marcaDeAuto === "toyota" || marcaDeAuto === "honda" || marcaDeAuto === "nissan" || marcaDeAuto === "mazda" || marcaDeAuto === "mitsubishi") {

    alert("Este auto es de fabricación japonesa");

} else if (marcaDeAuto === "hyundai" || marcaDeAuto === "kia") {

    alert("Este auto es de fabricación coreana");

} else if (marcaDeAuto === "seat") {

    alert ("Este auto es de fabricación española");

} else if (marcaDeAuto === "lada") {

    alert ("Este auto es de fabricación rusa");

} else if (marcaDeAuto === "volvo") {

    alert ("Este auto es de fabricación sueca");

} else { 
    alert("Esa marca de autos no está en nuestra base de datos");
}
