// DESAFÍO 1 - CONCEPTOS GENERALES: SINTAXIS Y VARIABLES

/*let nombre = prompt("Ingresá tu nombre");
let apellido = prompt("Ingresá tu apellido");
let edad = parseInt(prompt("Ingresá tu edad"));
let lugar = prompt("¿De dónde sos?");

mensaje = `Tu nombre es ${nombre} ${apellido}, tenés ${edad} años y sos de ${lugar}. ¿Viste cómo adiviné?`;
alert(mensaje);*/

// DESAFÍO 2 - CONTROL DE FLUJOS

/***********************************

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
    alert("Esa marca de autos es incorrecta o no se encuentra en nuestra base de datos");
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
********************************************************************/

// DESAFÍO 3 - CICLOS E ITERACIONES

/*  let i = 0;
let j = 0; */

//for (let i = 1; i <= 10; i++) {
    //for (j = 0; j <= 5; j++); {
        //alert("*");
        
    //}
//} 





//letra = prompt("Ingrese una letra:");

/* while(letra == isNaN) {

    if (letra == "a" || letra == "á" || letra == "A"){
        alert("La letra es la primera vocal")

    } else if (letra == "e" || letra == "é" || letra == "E"){
        alert("La letra es la segunda vocal")

    } else if (letra == "i" || letra == "í" || letra == "I"){
        alert("La letra es la tercera vocal")

    } else if (letra == "o" || letra == "ó" || letra == "O"){
        alert("La letra es la cuarta vocal")

    } else if (letra == "u" || letra == "ú" || letra == "U"){
        alert("La letra es la quinta vocal")

    } else if (letra == "Á" || letra == "É" || letra == "Í" || letra == "Ó" || letra == "Ú"){
        alert("La letra es una vocal, pero las mayúsculas no llevan tilde")

    } else {
        alert("La letra es una consonante")
    }
} */

/*num = prompt("Ingrese un número")

while(num > 0) {

    if (num % 2 == 0){
        num = num*5
        mensaje = `El número es ${num}`
        console.log(mensaje)
    } else if (num % 2 != 0) {
        num = num/5
    }

    
    num = prompt("Ingrese otro número (Ingrese 'E' para salir)")
    
    if (num == "e"){
        msj = `Nos vemos!`
        alert(msj)
    }
}*/

/*while(num % 2 != 0) {
    num = num*4
    mensaje = `El número es ${num}`
    console.log(mensaje)
    num = prompt("Ingrese otro número (Ingrese 'E' para salir)")
    
    if (num == "e"){
        msj = `Nos vemos!`
        alert(msj)
    }
}*/

/*let numero = parseInt(prompt('Ingrese un número'));

let sumaTotal = 0;

for (let i = numero; i <= 10; i++){
    sumaTotal = sumaTotal + 1;
    alert(sumaTotal);
}*/

// LOS OTROS BUCLES ME QUEDAN MUY INCOMPLETOS PORQUE AÚN NO IMPLEMENTO DOM, EN LA PRÓXIMA ENTREGA ARRANCO CON ESO

/* let nombre = prompt("Ingrese su nombre: ");
alert(`Hola, ${nombre}!`);

let apellido = prompt("Ingrese su apellido: ");
let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas"));
let costoPorHora = parseInt(prompt("Ingrese el costo por hora: "));

let paga = costoPorHora*horasTrabajadas;

alert(`Hola, ${nombre} ${apellido}. Te corresponden ${paga} pesos por tu trabajo. ¡Que tengas un buen día!`) */


//3) Pedir un monto total y un porcentaje y devolver el valor que representa a ese porcentaje. El valor devuelto tiene que tener dos decimales.
/* montoTotal = parseFloat(prompt("Ingrese el monto total"));
porcentaje = parseFloat(prompt("Ingrese un porcentaje"));

valorTotal = parseFloat((montoTotal*porcentaje)/100);

alert(`El precio total es $${valorTotal} pesos`); */

/* func (monto, porcentaje);{
    valorTotal = ((monto*porcentaje)/100);


    return valorTotal;
}

alert: func(21, 31); */

//4) Pedir un monto total y un valor y devolver el porcentaje que representa ese valor.
/*montoTotal = parseFloat(prompt("Ingrese el monto total"));
porcentaje = parseFloat(prompt("Ingrese un porcentaje"));

valorTotal = parseFloat((porcentaje/montoTotal)*100);

document.write(`El precio total es $${valorTotal} pesos`);*/






///DESAFÍO 4 = FUNCIONES:

/*alert("Función 1: Calcular IVA")
let precio = parseFloat(prompt("Ingrese el precio del producto: "))

let preciofinal = calcularIva(precio)

console.log(`El precio del producto es ${precio}. El precio con IVA es ${preciofinal}`)

function calcularIva(precioProducto) {
    let iva = (precioProducto*21)/100
    precioMasIva = precioProducto + iva
    return precioMasIva
}*/

//Función 2: Calcular año de nacimiento

/*alert("Función 2: Calcular año de nacimiento")

let edad = parseInt(prompt("Ingrese la edad"))


let anioDeNacimiento = calcularAnio(edad)

console.log(`El año de nacimiento es ${anioDeNacimiento}`)

function calcularAnio(edadActual) {

    anioActual = parseInt(prompt("Ingrese el año actual: "))
    if (anioActual <= 2021 && anioActual >=1900){

        anioNacimiento = anioActual - edadActual
        return anioNacimiento

    } else {

        alert("Eres un gallina McFly!")

    }
    
}*/

let num = parseInt(prompt("Ingrese Número"))
let i = 0

for (i=0; i==num; i++){
    console.log(i);
}



