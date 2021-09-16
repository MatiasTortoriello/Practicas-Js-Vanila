/*DESAFÍO 1 - CONCEPTOS GENERALES: SINTAXIS Y VARIABLES

let nombre = prompt("Ingresá tu nombre");
let apellido = prompt("Ingresá tu apellido");
let edad = parseInt(prompt("Ingresá tu edad"));
let lugar = prompt("¿De dónde sos?");

mensaje = `Tu nombre es ${nombre} ${apellido}, tenés ${edad} años y sos de ${lugar}. ¿Viste cómo adiviné?`;
alert(mensaje); */


/* DESAFÍO 2 - CONTROL DE FLUJOS*/

alert("Primer IF: Numero par o impar")

let numero1 = prompt("Ingrese un número entero");

if (numero1 % 2 == 0) {
    alert("El número que ingresaste es par")
}   else {
    alert("El número es impar");
}

alert("Segundo IF: País de fabricación de la marca de automóviles escogida")


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


alert("Tercer IF: Reconocimiento de cantidad de cifras en un número");

let numero2 = prompt("Ingrese un número entero");

if (numero2 >= 0 &&  numero2 <= 9 ){
        alert("El número es de UNA cifra");
}   else if (numero2 >= 10 && numero2 <= 99) {
        alert("El número es de DOS cifras");
}   else if (numero2 >= 100 && numero2 <= 999) {
        alert ("El número es de TRES cifras");
}   else if (numero2 >= 1000 && numero2 <= 9999) {
        alert ("El número es de CUATRO cifras");
}   else {
        alert ("El número es de cinco cifras o más, pero ya me cansé de escribir.");
}