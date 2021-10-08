/************************************************************************
****************************************************************************

Una variable es una asignacion a un espacio de memoria

¿Como declaramos una variable?

(constructor) (NombreDeLaVariable)  =  (ValorDeLaVariable)


*****************************    Variable con constructor VAR tiene las siguientes caracteristicas

1-Admite redeclaracion

var nombre = "julian";
var nombre = "tomas";
nombre => "tomas";

2-Admite redefinicion

var apellido = "Fuoco"
apellido = "Juarez"
apellido => "Juarez"

3-Alcance Global
Cuando declaro una variable con VAR su scope SIEMPRE es GLOBAL

4- Se ve afectada por el hoisting 


****************************** Variables declaradas con el contructor LET

1- NO admiten redeclaracion

let nombre = "julian";
let nombre = "tomas"; => ERROR nombre ya esta declarado;

2- Admite redefinicion

let apellido = "Fuoco"
apellido = "Juarez"
apellido => "Juarez"

3-No admite alcance global pero, su alcance se encuentra enmarcado en relacion al entorno donde se declaro

4- No se ve afectada por el hoisting 

****************************** Variables declaradas con CONST ----- constante

1- NO admiten redeclaracion

const nombre = "julian";
const nombre = "tomas"; => ERROR nombre ya esta declarado;

2- NO admite redefinicion

const apellido = "Fuoco"
apellido = "Juarez"  => ERROR apellido es una constante, no podemos modificarle el valor

3-No admite alcance global pero, su alcance se encuentra enmarcado en relacion al entorno donde se declaro

4- No se ve afectada por el hoisting 

5- Admite redefiniciones en sus componentes internos

****************************************************************************
****************************************************************************

***************** Operadores Logicos

suma   +    =>   tambien concatena string
resta  -
divi   /
multi  *


****************    Ejemplo:

   1 + 1 = 2
   1 - 1 = 0
   1 / 1 = 1
   1 * 1 = 1

   "1" + "1" = "11"
   "1" - "1" = "0"   -> JS es inteligente y sabe que ese string tiene un dato numerico
   "1" / "1" = "1"   -> JS es inteligente y sabe que ese string tiene un dato numerico
   "1" * "1" = "1"   -> JS es inteligente y sabe que ese string tiene un dato numerico

   "string" + "otroString" = "stringotroString"
   "string" - "otroString" = nan -> no es un numero
   "string" / "otroString" = nan -> no es un numero
   "string" * "otroString" = nan -> no es un numero

   1 + "1" = "11"
   1 - "1" = 0
   1 * "1" = 1
   1 / "1" = 1

****************************************************************************
****************************************************************************

***********   Funciones / Metodos de entrada y salida para desarrolladores

*-console.log("MensajeParaLaConsola")  -> Muestra un mensaje en la consola de desarrollo

*-prompt("Mensaje emergente") -> Ventana emergente que nos otorga un campo para ingresar un dato
Me devuelve siempre un string 

*-alert("Mensaje emergente") -> Muestra una alerta en la ventanada del navegador !! Frena el proceso

**************************************************************************
****************************************************************************

******************* Tipo de datos primitivos de JS

    boolean = true  or  false
    null = que no tiene valor
    undefined = que no esta definido el valor
    number = valor numerico  (int -> float)
    string = cadena de caracteres
    object = objetos
    arrays =  arrays o matrices
    funciones = algoritmos que guardan una sentencia en especifica
    symbol = es tipo de valor incluido desde ecma6+

****************************************************************************
****************************************************************************

¿Que es el hosting? Tarea para casa 
¿Que es el scope? Tarea para casa 

pseudocodigo -> parsear (si no hay errores) -> ast -> bytecode -> optimiza -> machinecode
*/