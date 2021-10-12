/////////////////////////////
//EJERCICIOS PROMPT Y ALERT//
/////////////////////////////

//1) Pedir nombre al usuario y saludarlo por pantalla con el nombre que haya escrito. Ejemplo: si el nombre es Pablo devuelve "¡Hola, Pablo!"
let userName = "user"
console.log(`Hello, ${userName}`)

for (i=0;i<10;i++){
    console.log("*")
    console.log(" ")
    for(j=(i+4);j<10;j++){
        console.log("*")
    }
}


//2) Pedir el nombre, el apellido, el número de horas trabajadas y el costo por hora. Debe devolver por consola un texto con su nombre completo y la paga correspondiente.

//3) Pedir un monto total y un porcentaje y devolver el valor que representa a ese porcentaje. El valor devuelto tiene que tener dos decimales.

//4) Pedir un monto total y un valor y devolver el porcentaje que representa ese valor.

//5) Pedir un monto subtotal y devolver el monto total (con el IVA incluído del 21%).

//6) Pedir un número y convertirlo a notación exponencial.

//7) Pedir un número con decimales y devolver sólamente la parte entera. Por ejemplo, ingresa 3.48 y devolvemos 3.

//8) Pedir dos valores a y b y luego intercambiarlos y mostrarlos por pantalla. Ejemplo: ingresa 1 y hola, entonces a = 1, b = 'hola'. Ahora intercambiarlos, a = 'hola' ,b = 1.

//9) Pedir dos lados y devolver el perímetro y área del rectángulo.

//10) Pedir un radio y devolver el perímetro y el área de una circunferencia. Utilizar Math.PI y acotar los decimales a dos cifras.

//11) Pedir un número y calcular la raíz cuadrada del mismo. Muestre 4 cifras significativas en total.

//12) Pedir dos números (base y exponente) y devolver la exponenciación.

//13) Pedir un número y devolver el valor absoluto.

//14) Pedir un número natural y devolver la suma desde el 1 hasta el número ingresado. Utilizar la ecuación de Gauss.

//15) Pedir un número natural, n, y un múltiplo natural, m. Devolver la suma de los n primeros múltiplos de m. Es decir, si ingreso n = 4 y m = 2, debería devolver 20 porque 2 + 4 + 6 + 8 = 20. Si ingreso n = 3 y m = 5, debería devolver 45, pues 3 + 6 + 9 + 12 + 15 = 45.

////////////////////////////////////////////////////////////////
//EJERCICIOS PARA PRACTICAR STRING. Intentar usar console.log.//
////////////////////////////////////////////////////////////////

// 1) generar un programa que pida un texto y lo convierta todo a lowercase

// 2) generar un programa que pida un texto, lo convierta a minúsculas, y pida un caracter y borre todas las ocurrencias

// 3) generar un programa que pida un texto, lo convierta a minúsculas, y pida una palabra y borre la primer ocurrencia

// 4) generar un programa que pida un texto y una palabra y devuelva la primer posición en la que se encuentra

// 5) generar un programa que pida una palabra y devuelva la primer letra de la misma

// 6) generar un programa que reemplace todos los espacios por un caracter que envie el usuario

// 7) generar un programa que coloque un caracter que envie el usuario entre cada caracter del texto

// 8) Escriba un programa que, dado un texto, me devuelva la longitud del mismo (incluyendo espacios).

////////////////////////////////////////////
//EJERCICIOS Y PROBLEMAS CON CONDICIONALES//
////////////////////////////////////////////

// 1) Pedir una edad y si es mayor de edad decirle "acceso concedido", en caso contrario decirle "acceso denegado"

let edad = prompt("Ingrese su edad")

if (edad > 18) {
    console.log("Es mayor de edad, puede entrar")
} else {
    console.log("Es menor, no puede pasar. Llamá a tu vieja")
}

// 2) Ídem anterior pero si el usuario no coloca un número se lo alerta de que no ha ingresado un número.

// 3) Pedir un dividendo y un divisor, ambos positivos y el divisor distinto de cero (incluir validación). Devolver la división con dos decimales.

let dividendo = parseInt(prompt("Ingrese un número"))
let divisor = parseInt(prompt("Ingrese otro número"))

if (divisor != 0) {

    if (divisor > 0 && dividendo > 0) {
        
        console.log(divisor/dividendo)

    } else {
        console.log("Los números no pueden ser negativos")

    }
} else {
    console.log("El divisor debe ser distinto de cero")

}

// 4) Escribir un programa que pida un número y luego imprima por consola si se encuentra entre el 1 y el 100 (incluídos ambos números).

// 5) Pedir dos números e indicar cuál es mayor o si son iguales. Ejemplo, ingresa: 3 y 6, se devuelve: el 6 es mayor que el 3.

// 6) Pedir un número e indicar si es par o impar.

// 7) Tener almacenada una contraseña alfanumérica (de letras y números) y pedir una por pantalla. Si coincide que diga "acceso concedido", en caso contrario decirle "acceso denegado". NO DEBEN IMPORTARNOS LAS MAYÚSCULAS O MINÚSCULAS.

// 8) Pedir una letra e indicar si es una vocal o no.

// 9) Una empresa puede llegar a pagar hasta un bono de 20000$ dependiendo de a cuántos clientes hayas podido conseguir en el mes. El rango es el siguiente:

// más de 10 -> obtiene bono completo
// de 8 a 10 -> obtiene 75% del bono
// de 5 a 7 -> obtiene 50% del bono
// menos de 5 -> no obtiene bono

// Escribir un programa que pida un sueldo en pesos y la cantidad de clientes que logró en el mes y devuelva el salario total que le corresponde, en pesos.

// 10) Pedir al usuario dos números y una operación entre suma, resta, multiplicación o división y devolver el resultado pedido.

/////////////////////////////////////
//EJERCICIOS Y PROBLEMAS CON BUCLES//
/////////////////////////////////////

// 1) Escribir un programa que pida al usuario un número entero mayor a cero y muestre por pantalla todos los números impares desde 1 hasta ese número incluido.

// 2) Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10 desde el 1 hasta el 10.

// 3) Escriba un programa que, dado un número natural, devuelva su factorial.
// Observación 1: los números naturales son los enteros positivos exceptuando al cero.
// Observación 2: el factorial de cero es 1.

// 4) Pedir una cierta cantidad de números al usuario y luego mostrar el promedio.

// 5) Escriba un programa que, dado un número, nos diga si es primo o no.

// 6) Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo rectángulo donde, si escribe 5, se dibuja el triángulo con 5 líneas de igual forma al triángulo detallado debajo.
// 1
// 3 1
// 5 3 1
// 7 5 3 1
// 9 7 5 3 1

//SE CREA LA CONSTANTE CANTIDAD, A LA CUAL LE DAMOS EL VALOR.
const cantidad = parseInt(10);

//EL CICLO FOR VA A ITRERAR SIEMPRE Y CUANDO EL ÍNDICE SEA MENOR O IGUAL A "CANTIDAD"
for (let i = 1; i <= cantidad; i++) {
    //AL EMPEZAR, SE CREA LA VARIABLE LÍNEA, UN STRING VACÍO
    let linea = "h";
    //DENTRO DEL SEGUNDO CICLO, LA VARIABLE J VALE I POR DOS MENOS 1. ITERA UNA VEZ YA QUE LA CONDICIÓN DE CORTE ES QUE SEA MAYOR A CERO. Y SIEMPRE VA A RESTAR.
    for (let j = ((i * 2) - 1); j > 0; j--) {
        
        //CORROBORA QUE J NO SEA NÚMERO PAR
        //if (j = 0) {
            //SI ES NÚMERO PAR, NO ITERA
            //continue;
        //}
        //A LA VARIABLE LÍNEA, ANTES VACÍA, SE LE SUMA UN ESPACIO Y LA VARIABLE J ((Ix2)-1) 
        linea += " " + j;
    }
    //IMPRIME LA VARIABLE LÍNEA
    console.log(linea);
}

// 7) Dados 10 números de entre 1 y 100, pedidos mediante prompt indicar cuál es el número más grande y cuál es el número más chico ingresado.



////////////////////////////////////////
// EJERCICIOS Y PROBLEMAS DE FUNCIONES//
////////////////////////////////////////

// 1) Crear funciones para:
/*
- convertir un número dado a entero
- convertir un número dado a flotante
- dado un texto, devolverlo por consola pero con estilos, por ejemplo font-family:Arial; font-weight:bold; font-size:1.2rem; color:yellowgreen;
*/

// 2) Escriba una función que valide si un texto ingresado es un número. Debe retornar true si es un número o false si no lo es.

// 3) Ídem anterior pero además debe ser mayor a cero. En lo posible, para los siguientes ejercicios crear una estructura if o if - else para que aparezca por consola si finalmente cumple o no con los requerimientos o un while para que insista en que se coloque el valor necesario.

// 4) Escriba una función que pida un número, pero sólo debe dejarte continuar si el número ingresado es impar.

// 5) Escriba una función que pida un número distinto de cero y lo devuelva con un formato de dos decimales. Por ejemplo, ingreso 23.3426 y devuelve 23.34. Aplicar las validaciones.
