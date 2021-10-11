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