/////////////////////////////
//EJERCICIOS PROMPT Y ALERT//
/////////////////////////////

//1) Pedir nombre al usuario y saludarlo por pantalla con el nombre que haya escrito. Ejemplo: si el nombre es Pablo devuelve "¡Hola, Pablo!"

/* 
const nombre = prompt("Escriba su nombre");
alert(`¡Hola, ${nombre}!`);
 */

//2) Pedir el nombre, el apellido, el número de horas trabajadas y el costo por hora. Debe devolver por consola un texto con su nombre completo y la paga correspondiente.

/* 
const nombre = prompt("Escriba su nombre");
const apellido = prompt("Escriba su apellido");
const horasTrabajadas = parseFloat(prompt("¿Cantidad de horas trabajadas?"));
const costoPorHora = parseFloat(prompt("¿Costo por hora?"));

alert(
    `Corresponde a ${nombre} ${apellido}, ${
        horasTrabajadas * costoPorHora
    }$ por las ${horasTrabajadas} horas trabajadas`
);
 */

//3) Pedir un monto total y un porcentaje y devolver el valor que representa a ese porcentaje. El valor devuelto tiene que tener dos decimales.

/* 
const montoTotal = prompt("Escriba el monto total");
const porcentaje = prompt("Escriba un porcentaje");
const monto = (montoTotal * porcentaje) / 100;
alert(`El ${porcentaje}% de ${montoTotal} es ${monto.toFixed(2)}`);

 */

//4) Pedir un monto total y un valor y devolver el porcentaje que representa ese valor.
/* 
const montoTotal = prompt("Escriba el monto total");
const valor = prompt("Escriba un valor");
const porcentaje = (valor * 100) / montoTotal;
alert(`${valor} es el ${porcentaje.toFixed(2)}% de ${montoTotal}`);

 */

//5) Pedir un monto subtotal y devolver el monto total (con el IVA incluído del 21%).
/* 
const subtotal = parseFloat(prompt("Escriba un valor"));
const total = subtotal + subtotal * 0.21;
alert("El valor total es " + total);

 */

//6) Pedir un número y convertirlo a notación exponencial.
/* 
const numero = parseFloat(prompt("Escriba un valor")).toExponential();
alert(numero);
 */

//7) Pedir un número con decimales y devolver sólamente la parte entera. Por ejemplo, ingresa 3.48 y devolvemos 3.
/* 
const numero = parseInt(prompt("Escriba un valor con decimales"));
alert(numero);
 */

//8) Pedir dos valores a y b y luego intercambiarlos y mostrarlos por pantalla. Ejemplo: ingresa 1 y hola, entonces a = 1, b = 'hola'. Ahora intercambiarlos, a = 'hola' ,b = 1.
/* 
let a = prompt("Escriba algo");
let b = prompt("Escriba otra cosa");
const aux = a;
a = b;
b = aux;

alert("a vale " + a);
alert("b vale " + b);
 */

//9) Pedir dos lados y devolver el perímetro y área del rectángulo.
/* 
const ladoUno = parseFloat(prompt("Escriba un lado"));
const ladoDos = parseFloat(prompt("Escriba otro lado"));

const perimetro = ladoUno * 2 + ladoDos * 2;
const area = ladoUno * ladoDos;

alert("Perímetro: " + perimetro.toFixed(2));
alert("Área: " + area.toFixed(2));
 */

//10) Pedir un radio y devolver el perímetro y el área de una circunferencia. Utilizar Math.PI y acotar los decimales a dos cifras.

/* 
const radio = parseFloat(prompt("Escriba el radio de la circunferencia"));
const perimetro = (2 * Math.PI * radio).toFixed(2);
const area = (Math.PI * Math.pow(radio, 2)).toFixed(2); // Math.PI * radio * radio

alert(
    `La circunferencia de radio ${radio} tiene ${perimetro} de perímetro y ${area} de área.`
);
*/

//11) Pedir un número y calcular la raíz cuadrada del mismo. Muestre 4 cifras significativas en total.
/* 
const numero = parseFloat(prompt("Escriba un número"));

alert(Math.sqrt(numero).toPrecision(4));
 */

//12) Pedir dos números (base y exponente) y devolver la exponenciación.
/* 
const base = parseFloat(prompt("Escriba la base"));
const exponente = parseFloat(prompt("Escriba el exponente"));
alert(`El resultado de multiplicar ${exponente} veces al número ${base} es ${Math.pow(base,exponente)}`);
 */

//13) Pedir un número y devolver el valor absoluto.
/* 
const num = parseFloat(prompt("Escriba un número"));
alert("Valor absoluto: " + Math.abs(num));
*/

//14) Pedir un número natural y devolver la suma desde el 1 hasta el número ingresado. Utilizar la ecuación de Gauss.
/* 
const num = parseInt(prompt("Escriba un número"));
const suma = (num * (num + 1)) / 2;
alert(`La suma de los números enteros desde 1 hasta ${num} es ${suma}`);
*/

//15) Pedir un número natural, n, y un múltiplo natural, m. Devolver la suma de los n primeros múltiplos de m. Es decir, si ingreso n = 4 y m = 2, debería devolver 20 porque 2 + 4 + 6 + 8 = 20. Si ingreso n = 3 y m = 5, debería devolver 45, pues 3 + 6 + 9 + 12 + 15 = 45.

/* 
const num = parseInt(prompt("Escriba un número"));
const multiplo = parseInt(prompt("Escriba un múltiplo"));
const suma = (num * (num + 1) * multiplo) / 2;
alert(`La suma de los números enteros desde 1 hasta ${num} es ${suma}`);
 */

////////////////////////////////////////////////////////////////
//EJERCICIOS PARA PRACTICAR STRING. Intentar usar console.log.//
////////////////////////////////////////////////////////////////

// 1) generar un programa que pida un texto y lo convierta todo a lowercase
/* 
const texto = prompt('Escriba un texto para convertirlo a minúsculas').toLowerCase();
console.log(texto);
*/

// 2) generar un programa que pida un texto, lo convierta a minúsculas, y pida un caracter y borre todas las ocurrencias
/* 
const texto = prompt('Escriba un texto').toLowerCase();
const caracter = prompt('Escriba un caracter a borrar');

console.log(texto.replaceAll(caracter, ""));
*/

// 3) generar un programa que pida un texto, lo convierta a minúsculas, y pida una palabra y borre la primer ocurrencia
/* 
const texto = prompt('Escriba un texto').toLowerCase();
const palabra = prompt('Escriba una palabra para borrar la primer ocurrencia');

console.log(texto.replace(palabra, ""));
 */

// 4) generar un programa que pida un texto y una palabra y devuelva la primer posición en la que se encuentra
/* 
const texto = prompt('Escriba un texto').toLowerCase();
const palabra = prompt('Escriba una palabra');

console.log(texto.indexOf(palabra));
 */

// 5) generar un programa que pida una palabra y devuelva la primer letra de la misma
/* 
const texto = prompt('Escriba un texto').toLowerCase();
const palabra = prompt('Escriba una palabra');

console.log(texto[texto.indexOf(palabra)]);
console.log(texto.charAt(texto.indexOf(palabra)));
 */

// 6) generar un programa que reemplace todos los espacios por un caracter que envie el usuario
/* 
const texto = prompt('Escriba un texto').toLowerCase();
const letra = prompt('Escriba un caracter');

console.log(texto.replaceAll(" ",letra));
 */

// 7) generar un programa que coloque un caracter que envie el usuario entre cada caracter del texto
/* 
const texto = prompt('Escriba un texto').toLowerCase();
const letra = prompt('Escriba un caracter');

console.log(texto.replaceAll("",letra));
 */

// 8) Escriba un programa que, dado un texto, me devuelva la longitud del mismo (incluyendo espacios).
/* 
const texto = prompt('Escriba un texto');
console.log("Longitud del texto: ", texto.length);
 */

////////////////////////////////////////////
//EJERCICIOS Y PROBLEMAS CON CONDICIONALES//
////////////////////////////////////////////

// 1) Pedir una edad y si es mayor de edad decirle "acceso concedido", en caso contrario decirle "acceso denegado"

/* const edad = parseInt(prompt('Escriba una edad'));

if (edad >= 18) {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
} */
// 2) Ídem anterior pero si el usuario no coloca un número se lo alerta de que no ha ingresado un número.

/* 
const edad = parseInt(prompt('Escriba una edad'));

//Verifiquemos qué da edad y qué da !isNaN(edad)
//Podemos poner varios parámetros en un console.log. Se usa por ejemplo un texto descriptivo al principio
console.log("edad: ", edad);
console.log("!isNaN(edad): ", !isNaN(edad));
 */
//De esta forma reconoce al 0 como un número y dirá acceso denegado
/* 
if (isNaN(edad)) {
    console.log("No ha colocado un número");
} else {
    if (edad >= 18) {
        console.log("Acceso concedido");
    } else {
        console.log("Acceso denegado");
    }
} */

//Otra forma que no reconoce al 0 como un número válido
/* 
if (edad) {
    if (edad >= 18) {
        console.log("Acceso concedido");
    } else {
        console.log("Acceso denegado");
    }
} else {
    console.log("No ha colocado un número");
}
 */
//Otra forma si quiero que ingrese números naturales
/* 
if (edad > 0) {
    if (edad >= 18) {
        console.log("Acceso concedido");
    } else {
        console.log("Acceso denegado");
    }
} else {
    console.log("Por favor, coloque un número");
}

 */

// 3) Pedir un dividendo y un divisor, ambos positivos y el divisor distinto de cero (incluir validación). Devolver la división con dos decimales.
/* 
const dividendo = parseInt(prompt('Escriba el dividendo'));
let divisor;

if (isNaN(dividendo) || dividendo < 0) {
    console.log("Debía colocar un dividendo mayor a cero");
} else {
    divisor = parseInt(prompt('Escriba el divisor'));
    if (divisor > 0) {
        console.log(`Cociente: ${(dividendo / divisor).toFixed(2)}`);
    } else {
        console.log("Debía colocar un divisor mayor a cero");
    }
} */

// 4) Escribir un programa que pida un número y luego imprima por consola si se encuentra entre el 1 y el 100 (incluídos ambos números).

// const numero = parseInt(prompt('Escriba un número'));
/* 
if (isNaN(numero)) {
    console.log("Debía colocar un número");
} else {
    if (1 <= numero && numero <= 100) {
        console.log(`El número ingresado es el ${numero}`);
    } else {
        console.log("Debía colocar un número entre 1 y 100");
    }
}
*/ 


//otra forma
/* 
if (1 <= numero && numero <= 100) {
    console.log(`El número ingresado es el ${numero}`);
} else {
    console.log("Debía colocar un número entre 1 y 100");
}
 */

// 5) Pedir dos números e indicar cuál es mayor o si son iguales. Ejemplo, ingresa: 3 y 6, se devuelve: el 6 es mayor que el 3.
/* 
const numero1 = parseInt(prompt('Escriba un número'));
const numero2 = parseInt(prompt('Escriba otro número'));

if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Era necesario ingresar dos números");
} else {
    if (numero1 > numero2) {
        console.log(`El ${numero1} es mayor que el ${numero2}`);
    } else if (numero1 < numero2){
        console.log(`El ${numero2} es mayor que el ${numero1}`);
    } else {
        console.log(`Los números ingresados son iguales`);
    }
}
 */

// 6) Pedir un número e indicar si es par o impar.

// const numero = parseInt(prompt('Escriba un número'));
/* 
if (isNaN(numero)) {
    console.warn("Debías ingresar un número");
} else {
    if (numero % 2 === 0) {
        console.log("el número es par");
    } else {
        console.log("el número es impar");
    }
} 
*/

/* 
//Otra forma introduciendo el operador ternario.
if (isNaN(numero)) {
    console.log("Debías ingresar un número");
} else {
    console.log(`${numero % 2 === 0? "el número es par": "el número es impar"}`);
} */

// 7) Tener almacenada una contraseña alfanumérica (de letras y números) y pedir una por pantalla. Si coincide que diga "acceso concedido", en caso contrario decirle "acceso denegado". NO DEBEN IMPORTARNOS LAS MAYÚSCULAS O MINÚSCULAS.
/* 
const contrasena = "abc123";

const clave = prompt('Escriba la contraseña').toLowerCase();

if (clave === contrasena) {
    //Si ponemos %c delante del texto, lo que haya en segundo parámetro lo toma como estilos css
    console.log("%c¡Genial! Contraseña válida", "color:yellowgreen; font-weight:bold; text-transform:uppercase;");
} else {
    console.error("%cContraseña inválida", "color:orangered; font-weight:bold; text-transform:uppercase;");
}
 */

// 8) Pedir una letra e indicar si es una vocal o no.
/* 
const letra = prompt("Escriba un caracter");

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    console.log(`%cEl caracter '${letra}' es una vocal :)`, "font-weight:bold; font-size:1.1rem; color:#30E573");
} else {
    console.log(`%cEl caracter '${letra}' no es una vocal :(`, "font-weight:bold; font-size:1.1rem; color:#E48193");
} */

// 9) Una empresa puede llegar a pagar hasta un bono de 20000$ dependiendo de a cuántos clientes hayas podido conseguir en el mes. El rango es el siguiente:

// más de 10 -> obtiene bono completo
// de 8 a 10 -> obtiene 75% del bono
// de 5 a 7 -> obtiene 50% del bono
// menos de 5 -> no obtiene bono

// Escribir un programa que pida un sueldo en pesos y la cantidad de clientes que logró en el mes y devuelva el salario total que le corresponde, en pesos.
/* 
const bono = 20000;
const sueldo = parseFloat(prompt("Escriba el sueldo"));
const clientes = parseFloat(prompt("¿Cuántos clientes ha conseguido?"));

if (isNaN(sueldo) || isNaN(clientes) || sueldo <= 0 || clientes < 0) {
    console.error("No se puede procesar el pedido porque ha colocado mal los valores");
} else {
    if (clientes > 10) {
        console.log("Sueldo: ", sueldo + bono);
    } else if (8 <= clientes && clientes <= 10) {
        console.log("Sueldo: ", sueldo + ( bono * 0.75 ) );
    } else if (5 <= clientes && clientes <= 7) {
        console.log("Sueldo: ", sueldo + ( bono * 0.5 ) );
    } else {
        console.log("Sueldo: ", sueldo);
    }
}
 */

// 10) Pedir al usuario dos números y una operación entre suma, resta, multiplicación o división y devolver el resultado pedido.
/* 
//Se pueden agregar validaciones intermedias para que no pregunte todo junto y luego valide. Hice esta opción sólo porque sí.
const numero1 = parseFloat(prompt("Escriba un número"));
const numero2 = parseFloat(prompt("Escriba otro número (si los va a dividir, no puede ser 0)"));
const operacion = prompt("¿Qué operación desea realizar?");

if (isNaN(numero1) || isNaN(numero2) || (operacion === "/" && numero2 === 0)) {
    console.error("Introduzca los valores correctos.");
} else {
    if (operacion === "+") {
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
    } else if (operacion === "-") {
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
    } else if (operacion === "*") {
        console.log(`${numero1} X ${numero2} = ${numero1 * numero2}`);
    } else {
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
    }
} 
*/

/////////////////////////////////////
//EJERCICIOS Y PROBLEMAS CON BUCLES//
/////////////////////////////////////

// 1) Escribir un programa que pida al usuario un número entero mayor a cero y muestre por pantalla todos los números impares desde 1 hasta ese número incluido.
/* 
let numero = parseFloat(prompt("Escriba un número"));

while (isNaN(numero) || numero <= 0) {
    alert("Por favor, debe ingresar un número mayor a cero.");
    numero = parseFloat(prompt("Escriba un número, por favor"));
} */
/* 
for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log("Número:", i);
    
} 
*/
/* 
//Otra forma
for (let i = 1; i <= numero; i++) {
    if (i % 2 === 1) {
        console.log("Número:", i);
    }
} 
*/

// 2) Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10 desde el 1 hasta el 10.
/* 
console.log("%c¡HAY TABLA!", "display:block; text-align:center; font-weight:bold; font-family:Arial; color:#E06A68; text-transform:uppercase; font-size:1.2rem");
for (let i = 1; i <= 10; i++) {
    console.groupCollapsed(`%cTabla del ${i}`, "font-weight:bold; font-family:Arial; color:green; text-transform:uppercase;");
    for (let j = 0; j <= 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`);
    }
    console.groupEnd();
}
 */
// 3) Escriba un programa que, dado un número natural, devuelva su factorial.
// Observación 1: los números naturales son los enteros positivos exceptuando al cero.
// Observación 2: el factorial de cero es 1.
/* 
let numero = parseInt(prompt("Escriba un número natural"));

while (isNaN(numero) || numero <= 0) {
    alert("Los números naturales son los enteros mayores a cero (no estamos incluyendo el cero)");
    numero = parseInt(prompt("Por favor, escriba un número natural"));
} */
/* 
let factorial = 1;
for (let i = 1; i <= numero; i++) {
    factorial *= i;
}
console.log("Factorial:", factorial);

 */
/* 
//otra forma
let factorial = 1;
for (let i = numero; i > 1; i--) {
    factorial *= i;
}
console.log("Factorial:", factorial);
 */

// 4) Pedir una cierta cantidad de números al usuario y luego mostrar el promedio.

/* 
const cantidad = 5;
let suma = 0;
let numero;
for (let i = 0; i < cantidad; i++) {
    numero = parseFloat(prompt("Número"));
    if (isNaN(numero)) {
        break;
    }
    suma += numero;
}

if (isNaN(numero)) {
    console.log("No has ingresado un número");
} else {
    console.log(`El promedio es ${suma / cantidad}`);
}
 */

// 5) Escriba un programa que, dado un número, nos diga si es primo o no.
/*  
let numero = parseInt(prompt("Escriba un número"));
while (isNaN(numero)) {
    numero = parseInt(prompt("Por favor, escriba un número"));
} */
/*
if (numero === 0 || numero === 1 || numero === -1) {
    console.log(`${numero} no es primo`);
} else if (numero === 2 || numero === -2 || numero === 3 || numero === -3) {
    console.log(`${numero} es primo`);
} else {
    let divisor = 2;
    while (divisor < numero - 1 && numero % divisor !== 0) {
        divisor++;
    }
    if (numero % divisor === 0) {
        console.log(`${numero} no es primo`);
    } else {
        console.log(`${numero} es primo`);
    }
}
 */

// Versión un poco más eficiente. Los básicos los descarto con else if. Luego analizo mediante el teorema de la raíz, para no evaluar tantos números. Esto se puede mejorar incrementando la 'calidad' de los teoremas. La idea es poner diferentes console.log para que vean en cuál entra dependiendo del número que pongan.
/* 
if (numero === 0 || numero === 1 || numero === -1) {
    console.log(`${numero} no es primo`);
} else if (numero === 2 || numero === -2) {
    console.log(`¡Esa me la sé! ¡${numero} es primo!`);
} else if (numero % 2 === 0) { // Reduzco a la mitad las pasadas, si son pares son divisibles por dos y por lo tanto no son primos.
    console.log(`${numero} no es primo porque es divisible por dos`);
} else if (numero === 3 || numero === -3) {
    console.log(`${numero} es primo seguro.`);
    
} else {
    let divisor = 3;
    const raiz = Math.trunc(Math.sqrt(numero)); // un número es primo si es divisible por algún número entero menor a su raíz cuadrada. De esta forma evito muchas pasadas que harían lento al algoritmo.
    const limite = raiz % 2 === 0 ? raiz - 1: raiz; // Optimizo si raiz tiene parte entera par, ya que ese número no interesa. Si fuera divisible por ese número par por acá nunca llegaría, el programa entraría al condicional numero % 2 === 0. De esta forma evito una pasada más.
    while ((divisor < limite) && (numero % divisor !== 0)){
        divisor += 2;
    }
    if ((numero % divisor !== 0)) {
        console.log(`¡Acabo de darme cuenta que ${numero} es primo!`);
    } else {
        console.log(`${numero} no es primo, lo siento.`);
    }
} */

// 6) Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo rectángulo donde, si escribe 5, se dibuja el triángulo con 5 líneas de igual forma al triángulo detallado debajo.
// 1
// 3 1
// 5 3 1
// 7 5 3 1
// 9 7 5 3 1
/* 
const cantidad = parseInt(prompt("Escriba un número"));

for (let i = 1; i <= cantidad; i++) {
    let linea = "";
    for (let j = ((i * 2) - 1); j > 0; j--) {
        if (j % 2 == 0) {
            continue;
        }
        linea += " " + j;
    }
    console.log(linea);
}
 */

// 7) Dados 10 números de entre 1 y 100, pedidos mediante prompt indicar cuál es el número más grande y cuál es el número más chico ingresado.
/* 
let max = 0;
let min = 101;

for (let i = 0; i < 10; i++) {
    let valor = parseFloat(prompt(`Intento ${i+1}: Escriba un número`));
    while (isNaN(valor) || 100 < valor || valor <= 0) {
        alert(`${valor} no va a ser tomado en cuenta`);
        valor = parseFloat(prompt(`Intento ${i+1}: Escriba un número`));
    }
    // Son dos if separados porque son dos cosas distintas, no es una cosa o la otra, puede darse el caso en que mínimo y máximo sean el mismo número, por ejemplo si colocamos 10 veces el mismo número.
    if (valor > max) {
        max = valor;
    }
    if (valor < min) {
        min = valor;
    }
}

console.log("Máximo: ", max);
console.log("Mínimo: ", min);

 */

////////////////////////////////////////
// EJERCICIOS Y PROBLEMAS DE FUNCIONES//
////////////////////////////////////////

// 1) Crear funciones para:
/*
- convertir un número dado a entero
- convertir un número dado a flotante
- dado un texto, devolverlo por consola pero con estilos, por ejemplo font-family:Arial; font-weight:bold; font-size:1.2rem; color:yellowgreen;

*/

/* 
const convertirAInt = (num) => parseInt(num);
const convertirAFloat = (num) => parseFloat(num);

const printStyle = (text) => { //Indentado sólo por comodidad
    console.log(`%c${text}`, "font-family:Arial; font-weight:bold; font-size:1.2rem; color:yellowgreen;");
}
 */
// 2) Escriba una función que valide si un texto ingresado es un número. Debe retornar true si es un número o false si no lo es.
/* 
const validarNumero = (num) => !isNaN(num);

//Prueba
const numero = parseFloat(prompt("Escriba un número"));
console.log(validarNumero(numero));
 */

// 3) Ídem anterior pero además debe ser mayor a cero. En lo posible, para los siguientes ejercicios crear una estructura if o if - else para que aparezca por consola si finalmente cumple o no con los requerimientos o un while para que insista en que se coloque el valor necesario.
/* 
const validarNumeroPositivo = (numero) => isNaN(numero) || numero <= 0;


let numero = parseFloat(prompt("Escriba un número mayor a cero"));

if (!validarNumeroPositivo(numero)) {
    console.log("Se había pedido un número mayor a cero");
} else {
    console.log("¡Muchas gracias!");
}
 */
//Otra forma
// const validarNumeroPositivo = (numero) => !isNaN(numero) && numero > 0;
// let numero = parseFloat(prompt("Escriba un número mayor a cero"));

// if (!validarNumeroPositivo(numero)) {
//     console.log("Se había pedido un número mayor a cero");
// } else {
//     console.log("¡Muchas gracias!");
// }


// 4) Escriba una función que pida un número, pero sólo debe dejarte continuar si el número ingresado es impar.
/* 
const esPar = (numero) => numero % 2 === 0;

let numero = parseInt(prompt("Escriba un número impar"));

while (esPar(numero)){
    alert("Por favor, escriba un número impar");
    numero = parseInt(prompt("Escriba un número impar"));
}
alert("¡Muchas gracias!");
 */

// 5) Escriba una función que pida un número distinto de cero y lo devuelva con un formato de dos decimales. Por ejemplo, ingreso 23.3426 y devuelve 23.34. Aplicar las validaciones.

/* 
const validarNumero = (num) => isNaN(numero) || numero === 0 ; //Primero preguntan si no es un número, y si lo fuera ahí recién preguntan si es distinto de cero.
const formatear = (num) => num.toFixed(2);

let numero = parseFloat(prompt("Escriba un número"));
while (validarNumero(numero)){
    alert("Por favor, escriba un número");
    numero = parseFloat(prompt("Escriba un número"));
}
alert(`¡Muchas gracias! El valor formateado es ${formatear(numero)}`);
 */





////////////////////////////////////
/////////////PRACTICA DOM RESUELTO///
//////////////////////

// 1) Capturar al h1 (mediante su id titulo) e imprimirlo por consola.
/* 
const titulo = document.getElementById('titulo1');
console.log(titulo);
 */

// 2) Imprimir por consola el id y la clase del h1 que capturamos en 1).
/* 
const titulo = document.getElementById('titulo1');
console.log("id: ", titulo.id);
console.log("class: ", titulo.className);
 */

// 3) Modificar el texto del h1, ahora queremos que diga "Primer título". Verificar que en el inspector figura el texto que agregamos dinámicamente, pero si hacemos clic derecho y ver código fuente de la página vemos que nos lo muestra original, sin modificaciones dinámicas.
/* 
// NO USAR INNERTEXT PORQUE ES UN REMANENTE DE INTERNET EXPLORER
const titulo = document.getElementById('titulo1');
titulo.textContent = "Primer título";
 */

// 4) Imprimir el texto del h1 por consola (el original o el modificado, no importa).
/* 
// NO USAR INNERTEXT PORQUE ES UN REMANENTE DE INTERNET EXPLORER
const titulo = document.getElementById('titulo1');
console.log(titulo.textContent);
 */

// 5) Pedir un numero por prompt, si lo escribe cambiar el texto del h1 por "Usted ha escrito un número, muchas gracias". En caso que escriba otra cosa que el título diga "No has escrito un número".
/* 
const pedido = parseFloat(prompt("Escriba un número, por favor"));
const titulo = document.getElementById('titulo1');
if (isNaN(pedido)) {
    titulo.textContent = "No has escrito un número";
} else {
    titulo.textContent = "Usted ha escrito un número, muchas gracias";
}
 */

// 6) Borrar el contenido del título, pedir tres palabras por prompt e ir agregándolas al primero. No es necesario validar, para no perder la idea.
/* 
const titulo = document.getElementById('titulo1');
titulo.textContent = "";
for (let i = 0; i < 3; i++) {
    const pedido = prompt("Escriba una palabra, por favor");
    titulo.textContent += pedido + " ";
}
 */

// 7) A partir del h1 capturado en los incisos anteriores, queremos seleccionar la etiqueta p que dice "Primer párrafo. Este es el primer texto" e imprimirla por consola.
/* 
const titulo = document.getElementById('titulo1');
const primerP = titulo.nextElementSibling;
console.log("primer párrafo: ", primerP);
 */

// 8) A partir del h1 capturado en los incisos anteriores, queremos seleccionar la etiqueta p que dice "Segundo párrafo. Este es el segundo texto" e imprimirla por consola.
/* 
const titulo = document.getElementById('titulo1');
const segundoP = titulo.nextElementSibling.nextElementSibling;
console.log("segundo párrafo: ", segundoP);
 */

// 9) A partir de la etiqueta que seleccionamos en el inciso anterior, queremos seleccionar al strong que tiene dentro e imprimirlo por consola.
/* 
const titulo = document.getElementById('titulo1');
const segundoP = titulo.nextElementSibling.nextElementSibling;
//Algunas formas de obtenerlo
const strong = segundoP.children[0];
// const strong = segundoP.childNodes[1];
// const strong = segundoP.lastChild;
// const strong = segundoP.lastElementChild;
// const strong = segundoP.firstElementChild;
console.log("párrafo: ", segundoP);
console.log("Strong: ", strong);
 */

// 10) A partir de la etiqueta que seleccionamos en el inciso anterior, queremos seleccionar el texto precedente al strong.
/* 
const titulo = document.getElementById('titulo1');
const segundoP = titulo.nextElementSibling.nextElementSibling;
const texto = segundoP.childNodes[0];
// const texto = segundoP.firstChild;
console.log("párrafo: ", segundoP);
console.log("texto: ", texto);
 */

// 11) A partir de la etiqueta que seleccionamos en el inciso 8), mostrar por consola el div padre que la contiene.
/* 
const titulo = document.getElementById('titulo1');
const segundoP = titulo.nextElementSibling.nextElementSibling;
const contenedor = segundoP.parentElement;
console.log("div contenedor: ", contenedor);
 */

// 12) Agregar la clase "fondo" a la etiqueta del inciso 11) a partir de haber capturado el h1 con id "titulo".
/* 
const titulo = document.getElementById('titulo1');
const contenedor = titulo.parentElement;
contenedor.classList.add('fondo');
 */

// 13) Mostrar por consola los div.
/* 
const divs = document.getElementsByTagName('div');
console.log(divs);
 */
//un HTMLCollection NO es un array, no tiene por ejemplo el método foreach para ser reccorrido. Hay que usar el for normal.

// 14) Mostrar por consola los div y agregarles la clase "fondo".
/* 
const divs = document.getElementsByTagName('div');
console.log(divs);

for (let i = 0; i < divs.length; i++) {
    const element = divs[i];
    element.classList.add('fondo');
}
 */

// 15) seleccionar el h2 a partir de su clase. Luego intentar llegar al primer p y modificar el texto por "Llegué hasta acá desde el h2 de abajo".
/* 
const titulo2 = document.getElementsByClassName('titulo')[1];
console.log(titulo2);
titulo2.parentElement.parentElement.children[0].children[1].textContent = "Llegué hasta acá desde el h2 de abajo";
 */

// 16) Insertar una etiqueta "p" que diga "Estoy antes de todos los p" entre el h1 y el primer p.

//El querySelector busca por selector de css! Entre las comillas escribís lo mismo que en css y lo encuentra y devuelve el primer elemento que coincida.
/* 
const div = document.querySelector('div'); //Capturo al padre
const p = document.createElement('p'); // Creo el elemento
p.textContent = "Estoy antes de todos los p"; // Le agrego el texto
const primerP = document.querySelector('p'); // Capturo el elemento que quedará después de mi párrafo p.
div.insertBefore(p, primerP); // Uso el insertBefore... padre.insertBefore(hijoNuevo, hijoViejo)
 */

// 17) Insertar todos los elementos del siguiente array en la lista que figura en el html. Importante no borrar los li que ya estaban previamente.
/* 
const arreglo = ["primero insertado", "segundo insertado", "tercero insertado"];

const ul = document.getElementById('lista'); // Capturo el objeto
const fragmento = document.createDocumentFragment(); // Creo un fragment para evitar el reflujo
arreglo.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element;
    fragmento.appendChild(li);
});

ul.appendChild(fragmento); // Agrego el fragmento a la lista
 */

// 18) Idem 17) pero los elementos items que estaban originalmente en el html no deben estar. Es decir, que se borre primero el ul antes de insertar los elementos.
/* 
const arreglo = ["primero insertado", "segundo insertado", "tercero insertado"];

const ul = document.getElementById('lista');
ul.innerHTML = ""; // Borro todo lo que haya
const fragmento = document.createDocumentFragment();
arreglo.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element;
    fragmento.appendChild(li);
});

ul.appendChild(fragmento);
 */

// 19) Dentro del último item de la lista ya no queremos que diga 4 ítem, sino que queremos agregar una nueva lista con estas características
/* 
<ul class="lista">
    <li class="lista__items">
        <a class="lista__enlaces" href="#">Link</a>
    </li>
    <li class="lista__items">
        <a class="lista__enlaces" href="#">Link</a>
    </li>
    <li class="lista__items">
        <a class="lista__enlaces" href="#">Link</a>
    </li>
</ul> 
//Hay una forma sufrida y otra más fácil para cuando hay semejante estructura.
*/
/* 
const ul = document.getElementById('lista');
ul.lastElementChild.innerHTML = `
    <ul class="lista">
        <li class="lista__items">
            <a class="lista__enlaces" href="#">Link</a>
        </li>
        <li class="lista__items">
            <a class="lista__enlaces" href="#">Link</a>
        </li>
        <li class="lista__items">
            <a class="lista__enlaces" href="#">Link</a>
        </li>
    </ul> 
`; */

// 20) Eliminar el último li de la lista (es decir, el li que tenía una lista dentro en el 19 ya no lo queremos más). 
/* 
const li = document.getElementById('lista').lastElementChild;

li.remove();
 */