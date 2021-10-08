
//const test = "dato que no se puede cambiar"
//Objeto literal 
//Las claves de un objeto se llaman propiedades // importante : dos puntos y no igual
/*
const julian = {
    nombre: "julian",
    apellido: "fuoco",
    edad: 28,
    lf: {
        nombre: "js",
        version: "ecma6+"
    },
    casaPropia: false,
}
console.log(julian);
//No esta considerado una de las mejores practicas en js
console.log(julian["nombre"]);
console.log(julian["lf"]);
//Esta forma es mas bonita
console.log(julian.apellido);
console.log(julian.edad);
julian.lf.nombre = "php"
console.log(julian.lf.nombre);
function Personas(nombre, apellido, edad, lf) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad
    this.lf = lf
}
Personas.prototype.hablar = function() {
    console.log(`Hola mi nombres ${this.nombre} `);
}
const julian = new Personas("julian", "fuoco", 28, { nombre: "js", version: "ecma6+" })
const julian1 = new Personas("Tomas", "fuoco", 28, { nombre: "js", version: "ecma6+" })
console.log(julian1.hablar());
class Personas {
    constructor(nombre, apellido, edad, lf, experiencia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.lf = lf;
        this.experiencia = experiencia
    }
    hablar() {
        console.log(`Hola mi nombres ${this.nombre} `);
    }
    caminar() {
        console.log(`Hoy camine ${this.edad * 10} metros`);
    }
    entrenar(time) {
        let tiempo = time * 10
        this.experiencia = this.experiencia + tiempo
        console.log("Ganaste " + tiempo + " experiencia");
    }
}
let persona1 = new Personas("Julian", "fuoco", 28, "js", 0)
const parche = () => {
    if (persona1.experiencia >= 5000) {
        console.log("esta roto   permaban    nerf");
    }
}
persona1.hablar()
persona1.caminar()
persona1.entrenar(50)
*/
//Ecommerce
class Productos {
    constructor({
        nombrePP = "Sin nombre",
        catePP = "hola mundo",
        precioPP = 0,
        stockPP = 0,
        validoPP
    }) {
        this.nombre = nombrePP,
            this.categoria = catePP,
            this.precio = precioPP,
            this.stock = stockPP,
            this.disponible = validoPP
    }
     
    comprar(cantidad) {
        if (this.stock <= 0) {
            console.log("no podes comprar");
            this.disponible = false
        } else {
            this.stock = this.stock - cantidad
            console.log(`Compraste un ${this.nombre}, te salio ${this.precio * cantidad}`);
        }
    }
}
const producto1 = new Productos({
    stockPP: 50,
    validoPP: true,
    precioPP: 3000,
    nombrePP: "Remera",
    catePP: "Nike",
})
console.log(producto1);

/////////////////////////////////////

/*class StageGameOver extends Stage {

    start(game) {
        this.nextStage = false;
        this.canNextStage = false;
        this.alpha = 0;
        this.animationEnd = false;
        game.planeYellow.x = game.planeYellow.image.width * -1;
        game.textGameOver.y = 100;

        Events.addEventListener(Events.clickOnCanvas, e => {
            if (this.animationEnd) this.nextStage = true;
        });
    }

    draw(game) {
        game.clear();
        game.drawBackground();

        if (this.alpha < 1 && !this.nextStage) this.alpha += 0.04;

        if (game.planeYellow.x < 100) {
            game.planeYellow.x += 4;

        } else {
            this.animationEnd = true;
        }


        game.drawAndCenterY(game.planeYellow);

        if (this.nextStage) {
            if (this.alpha > 0) this.alpha -= 0.04;

            if (this.alpha < 0) {
                this.alpha = 0;
                this.canNextStage = true;
            }

        }

        game.ctx.globalAlpha = this.alpha;
        game.drawAndCenterX(game.textGameOver);
        game.drawAndCenterX(game.tapRight);
        game.ctx.globalAlpha = 1;

        if (this.canNextStage)
            game.setStage('play');

    }
}*/


